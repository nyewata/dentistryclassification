"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
    IconAsterisk,
    IconAt,
    IconUser,
    IconCheck,
    IconAlertTriangle,
    IconInfoCircle,
} from "@tabler/icons-react";
import { authClient } from "@/lib/auth/client";
import { createUserRecord } from "@/app/actions/auth/create-user-record";
import { parseSignUpError } from "@/lib/auth/errors";

function SignupPage() {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const [accountExistsInfo, setAccountExistsInfo] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [isPending, setIsPending] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError(null);
        setAccountExistsInfo(false);
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

        let signUpError: { message?: string; code?: string; status?: number } | null =
            null;
        let data: Awaited<
            ReturnType<typeof authClient.signUp.email>
        >["data"];

        try {
            const result = await authClient.signUp.email({
                email,
                name,
                password,
            });
            signUpError = result.error ?? null;
            data = result.data;
        } catch (err) {
            const thrown =
                err instanceof Error
                    ? { message: err.message }
                    : { message: String(err) };
            signUpError = thrown;
            data = undefined;
        }

        if (signUpError) {
            const parsed = parseSignUpError(signUpError);
            if (parsed.kind === "duplicate_email") {
                setAccountExistsInfo(true);
                setError(null);
            } else {
                setError(parsed.userMessage);
            }
            setIsPending(false);
            return;
        }

        try {
            if (data?.user) {
                const createResult = await createUserRecord(data.user.id);
                if (createResult.error) {
                    setError(createResult.error);
                    return;
                }
            }

            setSuccess("Account created successfully! Redirecting to login...");
            setTimeout(() => router.push("/login"), 2500);
        } catch (caughtError) {
            const message =
                caughtError instanceof Error
                    ? caughtError.message
                    : "Signup failed. Please try again.";
            setError(message || "Signup failed. Please try again.");
        } finally {
            setIsPending(false);
        }
    }

    return (
        <div className="flex w-[340px] flex-col gap-6">
            <div className="mb-2 text-center">
                <h1 className="text-2xl font-semibold text-[#191c1c]">
                    Welcome to{" "}
                    <span className="text-[#004d48]">Dentistry Classification</span>
                </h1>
                <p className="mt-1 text-sm text-[#3e4947]">
                    Create your doctor account
                </p>
            </div>

            {accountExistsInfo && (
                <div className="flex flex-col gap-3 rounded-lg border border-amber-200/80 bg-amber-50/90 px-4 py-3 text-sm text-amber-950">
                    <div className="flex items-start gap-2">
                        <IconInfoCircle
                            size={18}
                            className="mt-0.5 shrink-0 text-amber-600"
                        />
                        <span>
                            An account with this email already exists. Use{" "}
                            <strong>Sign in</strong> with your password to open
                            your doctor workspace.
                        </span>
                    </div>
                    <Link
                        href="/login"
                        className="inline-flex w-full items-center justify-center rounded-full border border-amber-300/80 bg-white px-4 py-2 text-sm font-medium text-[#004d48] shadow-sm transition-colors hover:bg-amber-100/80"
                    >
                        Go to sign in
                    </Link>
                </div>
            )}

            {error && (
                <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    <IconAlertTriangle size={18} className="mt-0.5 shrink-0" />
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
                    <label className="mb-1.5 block text-xs font-medium text-[#3e4947]">
                        Full Name
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            required
                            className="w-full rounded-lg border border-[#bec9c7]/60 bg-white px-3 py-2.5 pr-9 text-sm text-[#191c1c] outline-none transition-all placeholder:text-[#6e7977] focus:border-[#004d48] focus:ring-2 focus:ring-[#a1f1e9]/50"
                        />
                        <IconUser size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                </div>

                <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#3e4947]">
                        Email
                    </label>
                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            required
                            className="w-full rounded-lg border border-[#bec9c7]/60 bg-white px-3 py-2.5 pr-9 text-sm text-[#191c1c] outline-none transition-all placeholder:text-[#6e7977] focus:border-[#004d48] focus:ring-2 focus:ring-[#a1f1e9]/50"
                        />
                        <IconAt size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                </div>

                <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#3e4947]">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            type="password"
                            name="password"
                            placeholder="Min 8 characters"
                            required
                            className="w-full rounded-lg border border-[#bec9c7]/60 bg-white px-3 py-2.5 pr-9 text-sm text-[#191c1c] outline-none transition-all placeholder:text-[#6e7977] focus:border-[#004d48] focus:ring-2 focus:ring-[#a1f1e9]/50"
                        />
                        <IconAsterisk size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                </div>

                <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#3e4947]">
                        Repeat Password
                    </label>
                    <div className="relative">
                        <input
                            type="password"
                            name="password_repeat"
                            placeholder="Re-enter password"
                            required
                            className="w-full rounded-lg border border-[#bec9c7]/60 bg-white px-3 py-2.5 pr-9 text-sm text-[#191c1c] outline-none transition-all placeholder:text-[#6e7977] focus:border-[#004d48] focus:ring-2 focus:ring-[#a1f1e9]/50"
                        />
                        <IconAsterisk size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isPending || !!success}
                    className="clinical-gradient w-full rounded-full px-4 py-2.5 text-sm font-medium text-white shadow-md shadow-[#004d48]/20 transition-all hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[#a1f1e9]/60 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {isPending ? "Creating account..." : "Sign Up"}
                </button>
            </form>

            <p className="text-center text-sm text-[#3e4947]">
                Have an account?{" "}
                <Link
                    href="/login"
                    className="font-medium text-[#004d48] transition-colors hover:text-[#006761]"
                >
                    Log In
                </Link>
            </p>
        </div>
    );
}

export default SignupPage;
