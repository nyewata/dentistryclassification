'use server';

import { authServer } from '@/lib/auth/server';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export async function signInWithEmail(
  _prevState: { error: string } | null,
  formData: FormData
) {
  // #region agent log
  const hdrs = await headers();
  const debugInfo = {
    origin: hdrs.get("origin"),
    referer: hdrs.get("referer"),
    host: hdrs.get("host"),
    xForwardedHost: hdrs.get("x-forwarded-host"),
    neonAuthBaseUrl: process.env.NEON_AUTH_BASE_URL?.substring(0, 60),
  };
  console.log("[DEBUG-9f6369] signin-pre-call", JSON.stringify(debugInfo));
  fetch('http://127.0.0.1:7353/ingest/2cc87a84-6d44-4b79-8c5a-cc3886685a54',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'9f6369'},body:JSON.stringify({sessionId:'9f6369',location:'signin.ts:14',message:'signin-pre-call',data:debugInfo,timestamp:Date.now(),hypothesisId:'H1'})}).catch(()=>{});
  // #endregion

  const { error } = await authServer.signIn.email({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  });

  // #region agent log
  if (error) {
    const errDebug = { errorMessage: error.message, errorCode: (error as any)?.code, fullError: JSON.stringify(error).substring(0, 500) };
    console.log("[DEBUG-9f6369] signin-error", JSON.stringify(errDebug));
    fetch('http://127.0.0.1:7353/ingest/2cc87a84-6d44-4b79-8c5a-cc3886685a54',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'9f6369'},body:JSON.stringify({sessionId:'9f6369',location:'signin.ts:28',message:'signin-error',data:errDebug,timestamp:Date.now(),hypothesisId:'H1'})}).catch(()=>{});
  }
  // #endregion

  if (error) {
    return { error: error.message || 'Failed to sign in. Try again' };
  }

  redirect('/doctor');
}
