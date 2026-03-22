import Link from "next/link";

export default function LandingFooter() {
    return (
        <footer className="mt-auto w-full border-t border-zinc-200/50 bg-zinc-50 py-12 dark:border-zinc-800/50 dark:bg-zinc-900">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-8 px-6 sm:flex-row sm:items-center sm:px-12">
                <div className="flex flex-col gap-2">
                    <div className="text-sm font-bold text-teal-800 dark:text-teal-200">
                        Dentistry Classification
                    </div>
                    <p className="font-dente-body text-xs uppercase tracking-tight text-zinc-400">
                        © {new Date().getFullYear()} AI-assisted imaging for
                        dentists & oral health teams.
                    </p>
                </div>
                <div className="flex flex-wrap gap-6 sm:gap-8">
                    <Link
                        href="#"
                        className="font-dente-body text-xs uppercase tracking-tight text-zinc-400 transition-all hover:text-teal-600 hover:underline"
                    >
                        Privacy
                    </Link>
                    <Link
                        href="#"
                        className="font-dente-body text-xs uppercase tracking-tight text-zinc-400 transition-all hover:text-teal-600 hover:underline"
                    >
                        Terms
                    </Link>
                    <Link
                        href="/login"
                        className="font-dente-body text-xs uppercase tracking-tight text-zinc-400 transition-all hover:text-teal-600 hover:underline"
                    >
                        Doctor login
                    </Link>
                </div>
            </div>
        </footer>
    );
}
