"use client";

import { useEffect, useRef } from "react";
import {
    TypographyH1,
    TypographyH2,
    TypographyP,
    HandwrittenText,
} from "@/components/landing/typography";
import Navbar from "@/components/landing/navbar";
import TeethBackground from "@/components/landing/teeth-background";
import { Button } from "@/components/ui/button";
import {
    IconArrowRight,
    IconUpload,
    IconBrain,
    IconReportMedical,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const heroStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};
const heroFadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

const steps = [
    {
        num: "01",
        icon: <IconUpload size={24} className="text-[var(--dental-teal)]" />,
        title: "Upload X-Ray",
        description:
            "Upload a dental X-ray or intraoral image. We accept common formats like JPEG and PNG.",
    },
    {
        num: "02",
        icon: <IconBrain size={24} className="text-[var(--dental-teal)]" />,
        title: "AI Analysis",
        description:
            "Our deep learning model examines the image and classifies the dental condition in seconds.",
    },
    {
        num: "03",
        icon: <IconReportMedical size={24} className="text-[var(--dental-teal)]" />,
        title: "View Results",
        description:
            "Receive an instant classification with confidence scores to support clinical decisions.",
    },
];

export default function Home() {
    const aboutRef = useRef<HTMLElement>(null);
    const processRef = useRef<HTMLElement>(null);
    const ctaRef = useRef<HTMLElement>(null);
    const dividerRefs = useRef<(HTMLHRElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // About section
            if (aboutRef.current) {
                gsap.from(aboutRef.current.querySelectorAll(".gsap-about"), {
                    y: 50,
                    opacity: 0,
                    duration: 0.9,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: aboutRef.current,
                        start: "top 75%",
                        once: true,
                    },
                });
            }

            // Process section – heading
            if (processRef.current) {
                gsap.from(
                    processRef.current.querySelector(".gsap-process-heading"),
                    {
                        y: 40,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: processRef.current,
                            start: "top 75%",
                            once: true,
                        },
                    }
                );

                // Process steps – staggered
                gsap.from(
                    processRef.current.querySelectorAll(".gsap-step"),
                    {
                        x: -40,
                        opacity: 0,
                        duration: 0.7,
                        stagger: 0.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: processRef.current,
                            start: "top 60%",
                            once: true,
                        },
                    }
                );
            }

            // CTA section
            if (ctaRef.current) {
                gsap.from(ctaRef.current.querySelectorAll(".gsap-cta"), {
                    scale: 0.9,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "back.out(1.4)",
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: "top 75%",
                        once: true,
                    },
                });
            }

            // Dividers – expand from center
            dividerRefs.current.forEach((hr) => {
                if (!hr) return;
                gsap.from(hr, {
                    scaleX: 0,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: hr,
                        start: "top 85%",
                        once: true,
                    },
                });
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="relative bg-[var(--bg-warm)] dot-grid overflow-hidden">
            <TeethBackground count={60} seed={7} />
            <Navbar />

            {/* ══════════ Hero ══════════ */}
            <motion.section
                variants={heroStagger}
                initial="hidden"
                animate="visible"
                className="relative mx-auto grid min-h-screen max-w-4xl gap-12 px-6 pt-32 pb-20 md:grid-cols-[1.2fr_1fr] md:items-center"
            >
                <div className="grid gap-6">
                    <motion.div variants={heroFadeUp}>
                        <TypographyH1>Dentistry</TypographyH1>
                        <TypographyH1>Classification</TypographyH1>
                    </motion.div>

                    <motion.div variants={heroFadeUp}>
                        <HandwrittenText>
                            detect dental problems early, with confidence
                        </HandwrittenText>
                    </motion.div>

                    <motion.p
                        variants={heroFadeUp}
                        className="max-w-md text-[#4a4a5a] font-[family-name:var(--font-body)] leading-relaxed"
                    >
                        AI-powered dental X-ray analysis that helps clinicians
                        identify cavities, periodontal disease, and other
                        conditions&mdash;fast.
                    </motion.p>

                    <motion.div variants={heroFadeUp}>
                        <Link href="/login">
                            <Button
                                variant="rounded"
                                className="h-11 gap-2 px-7 text-base"
                            >
                                Start Prediction
                                <IconArrowRight size={18} />
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    variants={heroFadeUp}
                    className="relative hidden md:block"
                >
                    <div className="overflow-hidden rounded-2xl border border-[var(--dental-teal)]/30 shadow-lg">
                        <Image
                            src="/images/teeth-doctor.jpg"
                            alt="Dental professional examining an X-ray"
                            width={520}
                            height={400}
                            className="h-auto w-full object-cover"
                            priority
                        />
                    </div>
                </motion.div>
            </motion.section>

            {/* ── Divider ── */}
            <div className="mx-auto max-w-4xl px-6">
                <hr ref={(el) => { dividerRefs.current[0] = el; }} className="border-[#d0d0d8] origin-center" />
            </div>

            {/* ══════════ About ══════════ */}
            <section
                ref={aboutRef}
                className="mx-auto grid min-h-screen max-w-4xl content-center gap-6 px-6 py-28"
            >
                <div className="gsap-about">
                    <TypographyH2>What is Dental Classification?</TypographyH2>
                </div>

                <div className="gsap-about max-w-2xl grid gap-0">
                    <TypographyP>
                        Dental classification uses deep learning to analyze
                        dental X-rays and intraoral images, identifying
                        conditions such as cavities, periodontal disease,
                        impacted teeth, and other oral pathologies.
                    </TypographyP>
                    <TypographyP>
                        By training on thousands of annotated dental images, the
                        AI model learns to recognize patterns invisible to the
                        untrained eye&mdash;enabling faster screening and
                        supporting clinical decision-making.
                    </TypographyP>
                    <TypographyP>
                        Early detection of dental problems is critical.
                        Untreated cavities can progress to painful infections,
                        and undiagnosed periodontal disease can lead to tooth
                        loss. AI-assisted classification bridges the gap between
                        routine checkups and specialist review.
                    </TypographyP>
                </div>
            </section>

            {/* ── Divider ── */}
            <div className="mx-auto max-w-4xl px-6">
                <hr ref={(el) => { dividerRefs.current[1] = el; }} className="border-[#d0d0d8] origin-center" />
            </div>

            {/* ══════════ Prediction Process ══════════ */}
            <section
                ref={processRef}
                className="mx-auto grid min-h-screen max-w-4xl content-center gap-12 px-6 py-28"
            >
                <div className="gsap-process-heading">
                    <TypographyH2>Prediction Process</TypographyH2>
                </div>

                <div className="relative ml-4 sm:ml-8 border-l-2 border-[var(--dental-teal)]/25 pl-8 sm:pl-12 grid gap-16">
                    {steps.map((step) => (
                        <div key={step.num} className="gsap-step relative">
                            <div className="absolute -left-[calc(2rem+5px)] sm:-left-[calc(3rem+5px)] top-1 h-2.5 w-2.5 rounded-full bg-[var(--dental-teal)]" />

                            <div className="flex items-start gap-4">
                                <span className="shrink-0 text-4xl font-[family-name:var(--font-serif)] text-[#4A9E9666] leading-none">
                                    {step.num}
                                </span>
                                <div className="grid gap-1.5 pt-1">
                                    <div className="flex items-center gap-2">
                                        {step.icon}
                                        <h3 className="text-lg font-semibold text-[var(--dark-teal)] font-[family-name:var(--font-body)]">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm leading-relaxed text-[#4a4a5a] font-[family-name:var(--font-body)] max-w-md">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Divider ── */}
            <div className="mx-auto max-w-4xl px-6">
                <hr ref={(el) => { dividerRefs.current[2] = el; }} className="border-[#d0d0d8] origin-center" />
            </div>

            {/* ══════════ Handwritten Quote + CTA ══════════ */}
            <section
                ref={ctaRef}
                className="mx-auto grid min-h-screen max-w-4xl place-items-center gap-8 px-6 py-28 text-center"
            >
                <div className="grid place-items-center gap-8">
                    <div className="gsap-cta">
                        <HandwrittenText className="text-3xl md:text-4xl lg:text-5xl rotate-0 leading-snug">
                            Every smile deserves the best diagnosis.
                        </HandwrittenText>
                    </div>

                    <div className="gsap-cta">
                        <Link href="/login">
                            <Button
                                variant="rounded"
                                className="h-11 gap-2 px-7 text-base"
                            >
                                Start Prediction
                                <IconArrowRight size={18} />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ══════════ Footer ══════════ */}
            <footer className="border-t border-[#d0d0d8]">
                <div className="mx-auto max-w-4xl px-6 py-6 text-center text-xs text-[#7a7a8a] font-[family-name:var(--font-body)]">
                    &copy; 2026 Dentistry Classification. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
