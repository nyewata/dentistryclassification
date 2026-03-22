"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const linkClass = (active: boolean) =>
    cn(
        "font-dente-headline text-sm font-light tracking-wide transition-colors whitespace-nowrap",
        active
            ? "text-teal-700 dark:text-teal-300 font-medium border-b-2 border-teal-700 pb-1"
            : "text-zinc-500 hover:text-teal-700 dark:text-zinc-400 dark:hover:text-teal-300"
    );

export default function LandingNavbar() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 z-50 w-full bg-white/70 backdrop-blur-xl shadow-sm dark:bg-zinc-950/70 dark:shadow-none">
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-8">
                <div className="flex items-center justify-between gap-3 py-4">
                <Link
                    href="/"
                    className="font-dente-headline max-w-[min(100%,14rem)] truncate text-lg font-light tracking-tighter text-teal-900 sm:max-w-none sm:text-xl dark:text-teal-100"
                    title="Dentistry Classification"
                >
                    Dentistry Classification
                </Link>

                    <div className="hidden flex-1 justify-center gap-8 md:flex">
                        <Link href="/" className={linkClass(pathname === "/")}>
                            How it Works
                        </Link>
                        <Link
                            href="/predict"
                            className={linkClass(pathname === "/predict")}
                        >
                            Technology
                        </Link>
                        <Link
                            href="/about"
                            className={linkClass(pathname === "/about")}
                        >
                            About
                        </Link>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3">
                        <Link
                            href="/login"
                            className="font-dente-body hidden text-sm text-zinc-600 transition-colors hover:text-teal-800 sm:inline dark:text-zinc-300"
                        >
                            Sign In
                        </Link>
                        <span
                            className="hidden text-zinc-300 sm:inline dark:text-zinc-600"
                            aria-hidden
                        >
                            |
                        </span>
                        <Link
                            href="/signup"
                            className="font-dente-body text-sm font-medium text-teal-800 transition-colors hover:text-teal-600 dark:text-teal-300"
                        >
                            Register
                        </Link>
                    </div>
                </div>

                <div className="flex justify-center gap-6 border-t border-zinc-100/90 py-3 md:hidden dark:border-zinc-800/80">
                    <Link href="/" className={linkClass(pathname === "/")}>
                        How it Works
                    </Link>
                    <Link
                        href="/predict"
                        className={linkClass(pathname === "/predict")}
                    >
                        Technology
                    </Link>
                    <Link
                        href="/about"
                        className={linkClass(pathname === "/about")}
                    >
                        About
                    </Link>
                    <Link
                        href="/login"
                        className="font-dente-body text-sm text-zinc-600"
                    >
                        Sign In
                    </Link>
                </div>
            </div>
        </header>
    );
}
