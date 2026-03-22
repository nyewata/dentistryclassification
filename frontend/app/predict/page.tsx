"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LandingShell from "@/components/landing/landing-shell";
import {
    IconUpload,
    IconShieldCheck,
    IconLock,
    IconChevronRight,
    IconArrowRight,
    IconDashboard,
    IconFolderShare,
    IconChartBar,
    IconSettings,
    IconDental,
} from "@tabler/icons-react";

const SCANS = [
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFljzh492BdlPgNqpV4sZf1t50AWeU9Frh5m9JCKeKylVF6uUVdYMurWPmA0tk7K-RjnxEpp9vmZHWKa2ouHm11EofkycIPQ3NUGsti_MU3r6pQQvdEl1Dl3ngFuWcrzDVkE49V0XI5G09YE2Ar1npObiXW6AFRT0Q0jyR-uRYV8cuC89uJPhNio1hDUIJOG13CBTeqVhiIMPhJXx4MRFkUnYMwRHbo7N0B5ybev2-0Bjdd3bC1aW8Wj8gc3oXV2N2tGbSjJ2OcjQH",
        title: "Patient #8842 - Jane D.",
        meta: "Oct 24 • Healthy",
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZMgvfuNkwbdAnPdaYnN6qo1QF6O28Gv-FpHS-J8KYDYLjN5FFpkAoiszggN-B_9DRuod8_sqyxqCMbXTgsp9O1FwlBMnod_bLH1iIDZYjd0hu4Hyypm5cf3CYj6EY8-ZKH78pG8iCxPJac5E3R_mf2WFffyJA-3O9rvG9JbgAFjln8VndChFScV2kx6yw5vlz55ChWQ97ipck0Vr8GgvQga4t-GQCd0s8Rl30gO3bHbcBqBm0dqHZJ-oWGoIVmnsJrVoV6kB8kl6s",
        title: "Patient #1029 - Alex M.",
        meta: "Oct 23 • Caries (2)",
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwGlj2fM55dL4Gt0NPFcjB1vVT5x6V5EY3DBemcsa_x83dAvT4D3Dg34MtR14J3IiiDUhWt4zp7y2tghJrkzy4WzS6NXlUDtUz7dkcuGJgRlo76Vhf4_DHiDK7BoWxYx6Jp1MOiy-uhqLItAF7FG0EHywOdOQ4DE3lxC-ywhrczfNIDid1McTSBV0Hdhj2XBXrn779ECMuZtfvOOWWI4ocPA-55nwa1a9z7NJxvYf6it5RFA-f4PoMmGS0YvqqBBwydZvMRGg-Hcq4",
        title: "Patient #3391 - Sam R.",
        meta: "Oct 21 • Healthy",
    },
];

export default function PredictMarketingPage() {
    const [isUploading, setIsUploading] = useState(false);

    return (
        <LandingShell>
            <main className="mx-auto flex max-w-7xl flex-col gap-24 px-6 pb-32 pt-4 md:px-12">
                <header className="max-w-3xl">
                    <h1 className="font-dente-headline mb-6 text-5xl font-light tracking-tight text-[#191c1c] md:text-6xl">
                        Diagnostic{" "}
                        <span className="font-medium italic text-[#004d48]">
                            Intelligence
                        </span>
                    </h1>
                    <p className="font-dente-body max-w-xl text-lg leading-relaxed text-[#3e4947]">
                        This mirrors what dentists do in the app: upload a dental
                        image, pick a model (CNN or transformer pathway), and
                        review a predicted class with a confidence score—then
                        save the case to Past Predictions for follow-up.
                    </p>
                </header>

                <section className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
                    <div className="space-y-8 lg:col-span-7">
                        <button
                            type="button"
                            className="group relative w-full cursor-pointer text-left"
                            onClick={() => setIsUploading((u) => !u)}
                            aria-pressed={isUploading}
                        >
                            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#004d48]/10 to-[#5652b3]/10 opacity-25 blur transition duration-1000 group-hover:opacity-50 group-hover:duration-200" />
                            <div className="relative flex aspect-[4/3] flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#bec9c7]/30 bg-[#f3f4f3] p-12 text-center transition-all hover:border-[#004d48]/40">
                                <div
                                    className={`mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-500 ${isUploading ? "animate-bounce" : "group-hover:scale-110"}`}
                                >
                                    <IconUpload
                                        className="text-[#004d48]"
                                        size={40}
                                    />
                                </div>
                                <h3 className="font-dente-headline mb-2 text-xl font-light text-[#191c1c]">
                                    {isUploading
                                        ? "Analyzing…"
                                        : "Upload radiograph or photo"}
                                </h3>
                                <p className="font-dente-body mx-auto mb-8 max-w-xs text-sm text-[#3e4947]">
                                    Same limits as the live Predict screen: PNG or
                                    JPEG, up to 10MB. Use clear, well-lit
                                    clinical images for best results.
                                </p>
                                <div className="flex gap-4">
                                    <span className="rounded bg-[#e7e8e7] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#3e4947]">
                                        PNG
                                    </span>
                                    <span className="rounded bg-[#e7e8e7] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#3e4947]">
                                        JPG · 10MB
                                    </span>
                                </div>
                            </div>
                        </button>
                        <div className="flex flex-wrap items-center gap-8 px-4 opacity-60">
                            <div className="flex items-center gap-2">
                                <IconShieldCheck size={16} />
                                <span className="font-dente-body text-xs uppercase tracking-widest">
                                    Sign-in protected
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <IconLock size={16} />
                                <span className="font-dente-body text-xs uppercase tracking-widest">
                                    Account & profile
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12 lg:col-span-5">
                        <div className="relative overflow-hidden rounded-xl bg-white p-8 shadow-[0px_24px_48px_rgba(25,28,28,0.06)]">
                            <div className="absolute right-0 top-0 p-6 opacity-10">
                                <IconDental size={120} stroke={1} />
                            </div>
                            <div className="relative z-10">
                                <div className="mb-8 flex items-start justify-between">
                                    <div>
                                        <span className="font-dente-body text-xs font-bold uppercase tracking-widest text-[#004d48]">
                                            Live Analysis
                                        </span>
                                        <h2 className="font-dente-headline mt-1 text-2xl font-light text-[#191c1c]">
                                            Classification Results
                                        </h2>
                                    </div>
                                    <div className="relative flex h-16 w-16 items-center justify-center">
                                        <svg
                                            className="-rotate-90"
                                            width="64"
                                            height="64"
                                            viewBox="0 0 64 64"
                                            aria-hidden
                                        >
                                            <circle
                                                className="text-[#e7e8e7]"
                                                cx="32"
                                                cy="32"
                                                r="28"
                                                fill="transparent"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                            />
                                            <circle
                                                className="text-[#004d48] transition-[stroke-dashoffset] duration-[2s] ease-in-out"
                                                cx="32"
                                                cy="32"
                                                r="28"
                                                fill="transparent"
                                                stroke="currentColor"
                                                strokeDasharray="175.9"
                                                strokeDashoffset={
                                                    isUploading ? 175.9 : 3.5
                                                }
                                                strokeWidth="3"
                                            />
                                        </svg>
                                        <span className="font-dente-body absolute text-xs font-bold text-[#004d48]">
                                            {isUploading ? "…" : "98%"}
                                        </span>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="ghost-border-bottom flex items-center justify-between pb-4">
                                        <div className="flex items-center gap-3">
                                            <span className="h-2 w-2 rounded-full bg-[#ba1a1a]" />
                                            <span className="font-dente-body text-sm font-medium text-[#191c1c]">
                                                Caries Detected
                                            </span>
                                        </div>
                                        <span className="font-dente-body text-sm text-[#3e4947]">
                                            High Confidence
                                        </span>
                                    </div>
                                    <div className="ghost-border-bottom flex items-center justify-between pb-4">
                                        <div className="flex items-center gap-3">
                                            <span className="h-2 w-2 rounded-full bg-[#bec9c7]" />
                                            <span className="font-dente-body text-sm font-medium text-[#191c1c]">
                                                Periapical Lucency
                                            </span>
                                        </div>
                                        <span className="font-dente-body text-sm text-[#3e4947]">
                                            Not Found
                                        </span>
                                    </div>
                                </div>
                                <Link
                                    href="/login"
                                    className="clinical-gradient mt-8 flex w-full items-center justify-center rounded-full py-3 text-sm font-medium text-white shadow-lg transition-all hover:shadow-[#004d48]/20 active:scale-95"
                                >
                                    Generate Full Report
                                </Link>
                            </div>
                        </div>

                        <div className="px-2">
                            <h4 className="font-dente-body mb-6 text-xs font-bold uppercase tracking-widest text-[#3e4947]">
                                Recent Patient Scans
                            </h4>
                            <div className="space-y-4">
                                {SCANS.map((s) => (
                                    <div
                                        key={s.title}
                                        className="group flex cursor-pointer items-center gap-4 rounded-lg p-2 transition-colors hover:bg-[#f3f4f3]"
                                    >
                                        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-[#e7e8e7]">
                                            <Image
                                                src={s.src}
                                                alt=""
                                                fill
                                                className="object-cover opacity-80 grayscale transition-opacity group-hover:opacity-100"
                                                sizes="48px"
                                            />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="font-dente-body truncate text-sm font-medium text-[#191c1c]">
                                                {s.title}
                                            </p>
                                            <p className="font-dente-body text-xs text-[#3e4947]">
                                                {s.meta}
                                            </p>
                                        </div>
                                        <IconChevronRight className="shrink-0 text-[#bec9c7] transition-colors group-hover:text-[#004d48]" />
                                    </div>
                                ))}
                            </div>
                            <Link
                                href="/doctor/pastpredictions"
                                className="font-dente-body mt-6 flex items-center gap-1 text-xs font-bold uppercase tracking-tighter text-[#004d48] transition-all hover:gap-2"
                            >
                                Open Past Predictions{" "}
                                <IconArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="flex flex-col justify-between rounded-xl bg-[#f3f4f3] p-10 md:col-span-2">
                        <div>
                            <span className="font-dente-body text-xs font-bold uppercase tracking-widest text-[#5652b3]">
                                Technology Stack
                            </span>
                            <h3 className="font-dente-headline mt-4 max-w-md text-3xl font-light text-[#191c1c]">
                                CNN backbones you can select in-app—plus a
                                dedicated transformer prediction mode.
                            </h3>
                        </div>
                        <div className="mt-12 flex flex-wrap gap-8 border-t border-[#bec9c7]/10 pt-8 md:gap-12">
                            <div>
                                <div className="font-dente-headline text-lg font-light leading-tight text-[#004d48]">
                                    ResNet · Inception
                                </div>
                                <div className="font-dente-body mt-1 text-xs uppercase tracking-widest text-[#3e4947]">
                                    DenseNet · EfficientNet
                                </div>
                            </div>
                            <div>
                                <div className="font-dente-headline text-3xl font-light text-[#004d48]">
                                    +TF
                                </div>
                                <div className="font-dente-body mt-1 text-xs uppercase tracking-widest text-[#3e4947]">
                                    Transformer Predict
                                </div>
                            </div>
                            <div>
                                <div className="font-dente-headline text-3xl font-light text-[#004d48]">
                                    94%
                                </div>
                                <div className="font-dente-body mt-1 text-xs uppercase tracking-widest text-[#3e4947]">
                                    Dashboard avg. confidence (demo)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex flex-col justify-between overflow-hidden rounded-xl bg-[#006761] p-10 text-[#93e2da]">
                        <div className="absolute -bottom-4 -right-4 opacity-10">
                            <IconShieldCheck size={120} stroke={1} />
                        </div>
                        <h3 className="font-dente-headline relative z-10 text-2xl font-light leading-snug">
                            Your account stays yours.
                        </h3>
                        <p className="font-dente-body relative z-10 text-sm text-[#93e2da]/80">
                            Doctors sign in to a private workspace; profile
                            supports password updates through the same auth
                            system you use at login.
                        </p>
                        <Link
                            href="/login"
                            className="relative z-10 inline-flex w-fit border-b border-[#93e2da]/30 pb-1 text-sm font-medium transition-all hover:border-[#93e2da]"
                        >
                            Go to secure login
                        </Link>
                    </div>
                </section>

                <div className="fixed bottom-8 left-1/2 z-40 flex -translate-x-1/2 items-center gap-6 rounded-full border border-white/40 bg-[#f9f9f8]/70 px-6 py-3 shadow-[0px_24px_48px_rgba(25,28,28,0.12)] backdrop-blur-xl md:gap-8">
                    <Link
                        href="/doctor/predict"
                        className="flex flex-col items-center gap-1 text-[#004d48]"
                    >
                        <IconDashboard size={22} stroke={1.5} />
                        <span className="text-[10px] font-bold uppercase tracking-tighter">
                            Predict
                        </span>
                    </Link>
                    <Link
                        href="/doctor/pastpredictions"
                        className="flex flex-col items-center gap-1 text-zinc-400 transition-colors hover:text-[#004d48]"
                    >
                        <IconFolderShare size={22} stroke={1.5} />
                        <span className="text-[10px] font-bold uppercase tracking-tighter">
                            History
                        </span>
                    </Link>
                    <Link
                        href="/doctor"
                        className="flex flex-col items-center gap-1 text-zinc-400 transition-colors hover:text-[#004d48]"
                    >
                        <IconChartBar size={22} stroke={1.5} />
                        <span className="text-[10px] font-bold uppercase tracking-tighter">
                            Stats
                        </span>
                    </Link>
                    <div className="h-6 w-px bg-[#bec9c7]/30" />
                    <Link
                        href="/doctor/profile"
                        className="flex flex-col items-center gap-1 text-zinc-400 transition-colors hover:text-[#004d48]"
                    >
                        <IconSettings size={22} stroke={1.5} />
                        <span className="text-[10px] font-bold uppercase tracking-tighter">
                            Lab
                        </span>
                    </Link>
                </div>
            </main>
        </LandingShell>
    );
}
