import Link from "next/link";
import Image from "next/image";
import LandingShell from "@/components/landing/landing-shell";
import {
    IconArrowRight,
    IconCheck,
    IconStethoscope,
    IconCpu,
    IconCircleCheck,
    IconLayoutDashboard,
    IconHistory,
    IconBrandDatabricks,
    IconShieldLock,
} from "@tabler/icons-react";

const IMG_ABOUT =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCLRiOnQzEWqe_n6DKPKMdmlX_9sIBg6k2_jIOFtUPT2dKWnIWTQye5VkgD5Zt7dLIKh8WFHPbfWqoskvkjKFt7D9teUUr6ezLCbdCrQvINvMzpXhQBw1bVoFSU2iDhhl-eyy6tX0jiSJrHbRUEkUkTaU4XRZd_E4CkY0gtSx0EiyYHMPfRCK2cc5RLA5-Zr90iRuQonBjdxHI_NPfGkGOnpWoTafya3RevuMAELSQmOsL5oXN7BdPiTUCScb8tHfzax3KlPPH-4mpr";

export default function AboutPage() {
    return (
        <LandingShell>
            <main className="relative flex flex-col">
                <section className="mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-8 pb-24 pt-8">
                    <div className="grid gap-8 lg:grid-cols-12">
                        <div className="lg:col-span-8">
                            <span className="font-dente-body mb-8 inline-block rounded-full bg-[#9b98fe]/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-[#5652b3]">
                                For dentists & oral health professionals
                            </span>
                            <h1 className="font-dente-headline mb-12 text-5xl font-extralight leading-[1.1] tracking-tight text-[#191c1c] md:text-7xl lg:text-8xl">
                                AI-assisted{" "}
                                <span className="italic font-light">
                                    classification
                                </span>{" "}
                                for your practice.
                            </h1>
                        </div>
                        <div className="self-end lg:col-start-8 lg:col-span-5">
                            <p className="font-dente-body text-lg font-light leading-relaxed text-[#3e4947] md:text-xl">
                                <strong className="font-medium text-[#191c1c]">
                                    Dentistry Classification
                                </strong>{" "}
                                helps you turn dental radiographs and intraoral
                                images into structured predictions—so you can
                                screen cases faster and focus clinical time on
                                patients. It supports your judgment; it does not
                                replace examination or diagnosis.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden bg-[#f3f4f3] py-40">
                    <div className="ambient-glow pointer-events-none absolute inset-0" />
                    <div className="relative z-10 mx-auto max-w-7xl px-8">
                        <div className="mb-32">
                            <h2 className="font-dente-body mb-4 text-sm uppercase tracking-[0.3em] text-[#004d48]">
                                Guiding Pillars
                            </h2>
                            <div className="h-px w-24 bg-[#004d48]/30" />
                        </div>
                        <div className="space-y-48">
                            <div className="grid grid-cols-1 items-center gap-24 md:grid-cols-2">
                                <div>
                                    <span className="font-dente-headline mb-6 block text-5xl font-thin text-[#bec9c7]">
                                        01
                                    </span>
                                    <h3 className="font-dente-headline mb-8 text-4xl font-light">
                                        Built for clinical workflows
                                    </h3>
                                    <p className="font-dente-body mb-8 text-lg font-light leading-relaxed text-[#3e4947]">
                                        Deep learning models are trained on dental
                                        imaging so they learn patterns relevant to
                                        oral conditions—not generic photo labels.
                                        Each prediction is returned with a{" "}
                                        <strong className="font-medium text-[#191c1c]">
                                            confidence score
                                        </strong>{" "}
                                        you can weigh alongside your exam, history,
                                        and imaging review.
                                    </p>
                                    <Link
                                        href="/predict"
                                        className="group flex w-fit items-center gap-2 text-[#004d48]"
                                    >
                                        <span className="font-dente-body text-sm font-semibold uppercase tracking-wider group-hover:underline">
                                            See how prediction works
                                        </span>
                                        <IconArrowRight size={16} />
                                    </Link>
                                </div>
                                <div className="group relative">
                                    <div className="flex aspect-square items-center justify-center rounded-full bg-white p-12 shadow-sm transition-transform duration-700 group-hover:scale-105">
                                        <div className="absolute inset-0 animate-[spin_20s_linear_infinite] rounded-full border border-dashed border-[#004d48]/20" />
                                        <IconStethoscope
                                            className="relative z-10 text-[#004d48]/40"
                                            stroke={0.75}
                                            size={96}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 items-center gap-24 md:grid-cols-2">
                                <div className="order-2 md:order-1">
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#e1e3e2] shadow-2xl">
                                        <Image
                                            src={IMG_ABOUT}
                                            alt="High quality medical imaging"
                                            fill
                                            className="object-cover opacity-80 mix-blend-multiply grayscale"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-[#004d48]/10" />
                                    </div>
                                </div>
                                <div className="order-1 md:order-2">
                                    <span className="font-dente-headline mb-6 block text-5xl font-thin text-[#bec9c7]">
                                        02
                                    </span>
                                    <h3 className="font-dente-headline mb-8 text-4xl font-light">
                                        CNN & transformer pathways
                                    </h3>
                                    <p className="font-dente-body mb-8 text-lg font-light leading-relaxed text-[#3e4947]">
                                        In the doctor app you can run{" "}
                                        <strong className="font-medium text-[#191c1c]">
                                            standard prediction
                                        </strong>{" "}
                                        with proven CNN backbones—ResNet50V2,
                                        InceptionV3, DenseNet121, and
                                        EfficientNetB0—or switch to{" "}
                                        <strong className="font-medium text-[#191c1c]">
                                            Transformer Predict
                                        </strong>{" "}
                                        when you want a transformer-based
                                        classifier for the same dental imagery.
                                    </p>
                                    <ul className="font-dente-body space-y-4 text-[#3e4947]">
                                        <li className="flex items-center gap-3">
                                            <IconCheck
                                                className="shrink-0 text-[#004d48]"
                                                size={18}
                                            />
                                            <span className="font-light">
                                                Upload PNG or JPEG intraoral images
                                                or radiographs (up to 10MB)
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <IconCheck
                                                className="shrink-0 text-[#004d48]"
                                                size={18}
                                            />
                                            <span className="font-light">
                                                Choose the model, review inputs, then
                                                view class + confidence
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 items-center gap-24 md:grid-cols-2">
                                <div>
                                    <span className="font-dente-headline mb-6 block text-5xl font-thin text-[#bec9c7]">
                                        03
                                    </span>
                                    <h3 className="font-dente-headline mb-8 text-4xl font-light">
                                        Your doctor dashboard
                                    </h3>
                                    <p className="font-dente-body text-lg font-light leading-relaxed text-[#3e4947]">
                                        After you sign in, everything lives in one
                                        workspace: a{" "}
                                        <strong className="font-medium text-[#191c1c]">
                                            dashboard
                                        </strong>{" "}
                                        with prediction counts and average
                                        confidence, quick links to{" "}
                                        <strong className="font-medium text-[#191c1c]">
                                            Predict
                                        </strong>{" "}
                                        and{" "}
                                        <strong className="font-medium text-[#191c1c]">
                                            Past Predictions
                                        </strong>{" "}
                                        (searchable history),{" "}
                                        <strong className="font-medium text-[#191c1c]">
                                            Transformer Predict
                                        </strong>
                                        , and your{" "}
                                        <strong className="font-medium text-[#191c1c]">
                                            profile
                                        </strong>{" "}
                                        for account security—built for individual
                                        clinicians and practice staff who need a
                                        clear daily workflow.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex h-40 flex-col items-center justify-center gap-2 rounded-xl bg-white shadow-sm">
                                        <IconLayoutDashboard
                                            className="text-[#5652b3]/40"
                                            size={36}
                                        />
                                        <span className="font-dente-body text-center text-xs text-[#3e4947]">
                                            Overview & stats
                                        </span>
                                    </div>
                                    <div className="flex h-40 flex-col items-center justify-center gap-2 rounded-xl bg-[#004d48]/5">
                                        <IconHistory
                                            className="text-[#004d48]/40"
                                            size={36}
                                        />
                                        <span className="font-dente-body text-center text-xs text-[#3e4947]">
                                            Past predictions
                                        </span>
                                    </div>
                                    <div className="flex h-40 flex-col items-center justify-center gap-2 rounded-xl bg-[#004d48]/5">
                                        <IconCpu
                                            className="text-[#004d48]/40"
                                            size={36}
                                        />
                                        <span className="font-dente-body text-center text-xs text-[#3e4947]">
                                            CNN models
                                        </span>
                                    </div>
                                    <div className="flex h-40 flex-col items-center justify-center gap-2 rounded-xl bg-white shadow-sm">
                                        <IconBrandDatabricks
                                            className="text-[#5652b3]/40"
                                            size={36}
                                        />
                                        <span className="font-dente-body text-center text-xs text-[#3e4947]">
                                            Transformer
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[#f9f9f8] py-40">
                    <div className="mx-auto max-w-7xl px-8">
                        <div className="mb-32 text-center">
                            <h2 className="font-dente-headline mb-6 text-4xl font-extralight md:text-5xl">
                                The Technical Foundation
                            </h2>
                            <p className="font-dente-body mx-auto max-w-2xl font-light text-[#3e4947]">
                                Aligned with how the live doctor app is built:
                                secure access, multiple architectures, and
                                reviewable outputs.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            {[
                                {
                                    icon: (
                                        <IconShieldLock
                                            className="text-[#004d48]"
                                            size={24}
                                        />
                                    ),
                                    title: "Secure doctor accounts",
                                    body: "Sign-in protected workspace with profile and password management—so only your team accesses predictions tied to your account.",
                                },
                                {
                                    icon: (
                                        <IconCpu
                                            className="text-[#004d48]"
                                            size={24}
                                        />
                                    ),
                                    title: "Multiple model architectures",
                                    body: "Choose among ResNet50V2, InceptionV3, DenseNet121, and EfficientNetB0 for standard runs, or use the dedicated Transformer Predict flow when you need a transformer-based classifier.",
                                },
                                {
                                    icon: (
                                        <IconCircleCheck
                                            className="text-[#004d48]"
                                            size={24}
                                        />
                                    ),
                                    title: "Confidence & history",
                                    body: "Each run surfaces a classification with a confidence score; the dashboard summarizes averages, and Past Predictions keeps a searchable log for follow-up and audit-friendly review.",
                                },
                            ].map((card) => (
                                <div
                                    key={card.title}
                                    className="rounded-2xl border border-[#bec9c7]/10 bg-white p-10 shadow-[0px_24px_48px_rgba(25,28,28,0.04)]"
                                >
                                    <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#f3f4f3]">
                                        {card.icon}
                                    </div>
                                    <h4 className="font-dente-headline mb-4 text-lg font-semibold text-[#191c1c]">
                                        {card.title}
                                    </h4>
                                    <p className="font-dente-body text-sm font-light leading-relaxed text-[#3e4947]">
                                        {card.body}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden bg-[#004d48] py-40">
                    <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-[#006761] opacity-20 blur-3xl" />
                    <div className="relative z-10 mx-auto max-w-7xl px-8 text-center">
                        <h2 className="font-dente-headline mb-12 text-5xl font-light tracking-tight text-white md:text-7xl">
                            Ready to augment <br />
                            your diagnosis?
                        </h2>
                        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                            <Link
                                href="/login"
                                className="rounded-full bg-white px-10 py-5 text-base font-bold text-[#004d48] transition-transform hover:scale-105"
                            >
                                Try The Predictor
                            </Link>
                            <button
                                type="button"
                                className="rounded-full border border-white/30 px-10 py-5 text-base font-medium text-white transition-colors hover:bg-white/5"
                            >
                                Request a Demo
                            </button>
                        </div>
                        <p className="font-dente-body mt-12 text-sm font-light uppercase tracking-widest text-[#93e2da]">
                            Built for dentists using Dentistry Classification
                            every day
                        </p>
                    </div>
                </section>
            </main>
        </LandingShell>
    );
}
