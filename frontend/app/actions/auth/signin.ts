'use server';

import { authServer } from '@/lib/auth/server';
import { redirect } from 'next/navigation';

export async function signInWithEmail(
  _prevState: { error: string } | null,
  formData: FormData
) {
  const { error } = await authServer.signIn.email({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    // add a path for admin and reroute based on role after signin
    // options: { redirectTo: '/admin/dashboard' },
  });

  if (error) {
    return { error: error.message || 'Failed to sign in. Try again' };
  }

  redirect('/doctor'); // change to correct reroute after signin
}