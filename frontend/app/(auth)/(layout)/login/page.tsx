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

        try {
            let signInError: { message?: string } | null = null;
            try {
                const result = await authClient.signIn.email({
                    email,
                    password,
                });
                signInError = result.error ?? null;
            } catch (err) {
                signInError = {
                    message:
                        err instanceof Error ? err.message : "Failed to sign in.",
                };
            }

            if (signInError) {
                setError(signInError.message || "Invalid email or password.");
                return;
            }

            try {
                await authClient.getSession();
            } catch {
                /* non-fatal; cookies may still be set */
            }

            if (typeof window !== "undefined") {
                window.location.assign("/doctor");
                return;
            }

            router.push("/doctor");
        } catch (caughtError) {
            const message =
                caughtError instanceof Error
                    ? caughtError.message
                    : "Login failed. Please try again.";
            setError(message || "Login failed. Please try again.");
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
                    Sign in to your doctor workspace
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
                            placeholder="Enter your password"
                            required
                            className="w-full rounded-lg border border-[#bec9c7]/60 bg-white px-3 py-2.5 pr-9 text-sm text-[#191c1c] outline-none transition-all placeholder:text-[#6e7977] focus:border-[#004d48] focus:ring-2 focus:ring-[#a1f1e9]/50"
                        />
                        <IconAsterisk size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                </div>

                <Link
                    href="/forgotpassword"
                    className="self-start text-xs font-medium text-[#004d48] transition-colors hover:text-[#006761]"
                >
                    Forgot password?
                </Link>

                <button
                    type="submit"
                    disabled={isPending}
                    className="clinical-gradient w-full rounded-full px-4 py-2.5 text-sm font-medium text-white shadow-md shadow-[#004d48]/20 transition-all hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[#a1f1e9]/60 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {isPending ? "Logging in..." : "Log In"}
                </button>
            </form>

            <p className="text-center text-sm text-[#3e4947]">
                Don&apos;t have an account?{" "}
                <Link
                    href="/signup"
                    className="font-medium text-[#004d48] transition-colors hover:text-[#006761]"
                >
                    Sign Up
                </Link>
            </p>
        </div>
    );
}

export default LoginPage;
