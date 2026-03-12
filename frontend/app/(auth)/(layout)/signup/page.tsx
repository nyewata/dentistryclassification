"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IconAsterisk, IconAt, IconUser, IconCheck, IconAlertTriangle } from "@tabler/icons-react";
import { authClient } from "@/lib/auth/client";
import { createUserRecord } from "@/app/actions/auth/create-user-record";

function SignupPage() {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [isPending, setIsPending] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError(null);
        setSuccess(null);
        setIsPending(true);

        const formData = new FormData(e.currentTarget);
        const name = (formData.get("name") as string)?.trim();
        const email = (formData.get("email") as string)?.trim();
        const password = formData.get("password") as string;
        const passwordRepeat = formData.get("password_repeat") as string;

        if (!name || name.length < 2) {
            setError("Please enter your full name.");
            setIsPending(false);
            return;
        }
        if (!email) {
            setError("Email address is required.");
            setIsPending(false);
            return;
        }
        if (!password || password.length < 8) {
            setError("Password must be at least 8 characters long.");
            setIsPending(false);
            return;
        }
        if (password !== passwordRepeat) {
            setError("Passwords do not match.");
            setIsPending(false);
            return;
        }

        // #region agent log
        console.log("[DEBUG-9f6369] signup-client-submit");
        fetch('http://127.0.0.1:7353/ingest/2cc87a84-6d44-4b79-8c5a-cc3886685a54',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'9f6369'},body:JSON.stringify({sessionId:'9f6369',location:'signup/page.tsx:50',message:'signup-client-submit',data:{},timestamp:Date.now(),hypothesisId:'H1-fix'})}).catch(()=>{});
        // #endregion

        const { error: signUpError, data } = await authClient.signUp.email({
            email,
            name,
            password,
        });

        // #region agent log
        console.log("[DEBUG-9f6369] signup-client-result", { hasError: !!signUpError, errorMessage: signUpError?.message, hasData: !!data });
        fetch('http://127.0.0.1:7353/ingest/2cc87a84-6d44-4b79-8c5a-cc3886685a54',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'9f6369'},body:JSON.stringify({sessionId:'9f6369',location:'signup/page.tsx:60',message:'signup-client-result',data:{hasError:!!signUpError,errorMessage:signUpError?.message,hasData:!!data},timestamp:Date.now(),hypothesisId:'H1-fix'})}).catch(()=>{});
        // #endregion

        if (signUpError) {
            setError(signUpError.message || "Failed to create account. Please try again.");
            setIsPending(false);
            return;
        }

        if (data?.user) {
            const result = await createUserRecord(data.user.id);
            if (result.error) {
                setError(result.error);
                setIsPending(false);
                return;
            }
        }

        setSuccess("Account created successfully! Redirecting to login...");
        setTimeout(() => router.push("/login"), 2500);
    }

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

            {error && (
                <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    <IconAlertTriangle size={18} className="shrink-0 mt-0.5" />
                    <span>{error}</span>
                </div>
            )}

            {success && (
                <div className="flex items-start gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                    <IconCheck size={18} className="shrink-0 mt-0.5" />
                    <span>{success}</span>
                </div>
            )}

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
                    disabled={isPending || !!success}
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
