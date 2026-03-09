"use client";

import Link from "next/link";
import { motion } from "motion/react";

const Navbar = () => {
    return (
        <motion.header
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 z-50 w-full"
        >
            <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
                <Link
                    href="/"
                    className="font-[family-name:var(--font-serif)] text-xl text-[var(--dark-teal)] hover:text-[var(--dental-teal)] transition-colors"
                >
                    DentistryAI
                </Link>

                <div className="flex items-center gap-1 text-sm font-[family-name:var(--font-body)]">
                    <Link
                        href="/login"
                        className="px-3 py-1.5 text-[#3a3a4a] hover:text-[#1B2030] transition-colors"
                    >
                        Sign In
                    </Link>
                    <span className="text-[#3a3a4a40]">|</span>
                    <Link
                        href="/signup"
                        className="px-3 py-1.5 text-[var(--dark-teal)] hover:text-[var(--dental-teal)] font-medium transition-colors"
                    >
                        Register
                    </Link>
                </div>
            </nav>
        </motion.header>
    );
};

export default Navbar;
