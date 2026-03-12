"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IconAt, IconAsterisk, IconAlertTriangle } from "@tabler/icons-react";
import { authClient } from "@/lib/auth/client";

function LoginPage() {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const [isPending, setIsPending] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError(null);
        setIsPending(true);

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const { error: signInError } = await authClient.signIn.email({
            email,
            password,
        });

        if (signInError) {
            setError(signInError.message || "Failed to sign in. Try again.");
            setIsPending(false);
            return;
        }

        router.push("/doctor");
        setIsPending(false);
    }

    return (
        <div className="flex flex-col gap-6 w-[340px]">
            <div className="text-center mb-2">
                <h1 className="text-2xl font-semibold text-gray-800">
                    Welcome to{" "}
                    <span className="text-blue-600">DentistryAI</span>
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                    Sign in to your account
                </p>
            </div>

            {error && (
                <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    <IconAlertTriangle size={18} className="shrink-0 mt-0.5" />
                    <span>{error}</span>
                </div>
            )}

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
                            placeholder="Enter your password"
                            required
                            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 pr-9 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                        />
                        <IconAsterisk size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                </div>

                <Link
                    href="/forgotpassword"
                    className="text-blue-600 font-medium text-xs hover:text-blue-700 transition-colors self-start"
                >
                    Forgot password?
                </Link>

                <button
                    type="submit"
                    disabled={isPending}
                    className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    {isPending ? "Logging in..." : "Log In"}
                </button>
            </form>

            <p className="text-sm text-center text-gray-500">
                Don&apos;t have an account?{" "}
                <Link
                    href="/signup"
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                    Sign Up
                </Link>
            </p>
        </div>
    );
}

export default LoginPage;
