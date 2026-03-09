"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IconAsterisk, IconAt, IconUser, IconCheck, IconAlertTriangle } from "@tabler/icons-react";
import { signUpWithEmail } from "@/app/actions/auth/signup";

function SignupPage() {
    const [state, formAction, isPending] = useActionState(
        signUpWithEmail,
        null
    );
    const router = useRouter();

    useEffect(() => {
        if (state?.success) {
            const timer = setTimeout(() => {
                router.push("/login");
            }, 2500);
            return () => clearTimeout(timer);
        }
    }, [state?.success, router]);

    return (
        <div className="flex flex-col gap-6 w-[340px]">
            <div className="text-center mb-2">
                <h1 className="text-2xl font-semibold text-gray-800">
                    Welcome to{" "}
                    <span className="text-blue-600">DentistryAI</span>
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                    Create your account
                </p>
            </div>

            {state?.error && (
                <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    <IconAlertTriangle size={18} className="shrink-0 mt-0.5" />
                    <span>{state.error}</span>
                </div>
            )}

            {state?.success && (
                <div className="flex items-start gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                    <IconCheck size={18} className="shrink-0 mt-0.5" />
                    <span>{state.success}</span>
                </div>
            )}

            <form className="flex flex-col gap-4" action={formAction}>
                <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">
                        Full Name
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            required
                            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 pr-9 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                        />
                        <IconUser size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">
                        Email
                    </label>
                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            required
                            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 pr-9 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                        />
                        <IconAt size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            type="password"
                            name="password"
                            placeholder="Min 8 characters"
                            required
                            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 pr-9 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                        />
                        <IconAsterisk size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">
                        Repeat Password
                    </label>
                    <div className="relative">
                        <input
                            type="password"
                            name="password_repeat"
                            placeholder="Re-enter password"
                            required
                            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 pr-9 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                        />
                        <IconAsterisk size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isPending || !!state?.success}
                    className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    {isPending ? "Creating account..." : "Sign Up"}
                </button>
            </form>

            <p className="text-sm text-center text-gray-500">
                Have an account?{" "}
                <Link
                    href="/login"
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                    Log In
                </Link>
            </p>
        </div>
    );
}

export default SignupPage;
