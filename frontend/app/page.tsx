import Link from "next/link";
import Image from "next/image";
import LandingShell from "@/components/landing/landing-shell";
import {
    IconArrowRight,
    IconUpload,
    IconBrain,
    IconCircleCheck,
    IconCpu,
    IconBrandDatabricks,
} from "@tabler/icons-react";

const HERO_IMG =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAsZ2acIfE_Uh3zhHX7Osu-hrDO1B6R0zYYVwiL5CNfRMg8btf-h_POL2IY_6NtodVwYZY_7KmTLt-2GhOlfuoPxJuuZQccrUpZf9XGBzQJKowmRIiZp7L5fpBiKlh8ZlJi6IhwKm6njwv5hLpakYy2UfxmV28-DaDQT8MclxfmLYK7gio_oFcOGofxoyUScODYRtPkrqiME0a1y7i07gEjyeH6ElX0TdYo6OWMOCBldig_3LjHjTfroTT1ypixiJYKaVjBFp2wzgXj";

const CTA_PATTERN_IMG =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB0eahzZF8si5z8sdwMNQoAOyHrhtxuaWmRaAxu51mjfE8In_HpRCDeCjAXDRQt5I915SkB1dnlIFRAsM5CZHTrrtArBvpLQRjhPFSxpqN620dIHOlqkdxF0fbJEAoONv7IpJIhte2zkY3drVLhyA0iBMVEVQzoHmTZc3zuOor3axTdJ0ctCpPkyvXyCZImj-jJggH_RNaSE1tXITybY3nnGXdlaGnTWodGzC3oiFBJQHIin2Lj3VNtp1vTKD9upR8oHAf3bMxtnadA";

export default function Home() {
    return (
        <LandingShell>
            <main className="flex flex-col">
                {/* Hero */}
                <section className="relative overflow-hidden px-8 pb-24 pt-8 md:pb-40 md:pt-12">
                    <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 md:flex-row md:gap-24">
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 rounded-full border border-[#bec9c7]/40 bg-[#f3f4f3] px-3 py-1">
                                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#004d48]" />
                                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#004d48]">
                                    CNN + Transformer · Doctor portal
                                </span>
                            </div>
                            <h1 className="font-dente-headline text-5xl font-extralight leading-[1.1] tracking-tight text-[#191c1c] md:text-7xl">
                                AI classification <br />
                                <span className="italic text-[#004d48]">
                                    for dentists.
                                </span>
                            </h1>
                            <p className="max-w-xl font-dente-body text-lg font-light leading-relaxed text-[#3e4947] md:text-xl">
                                Upload dental radiographs or intraoral images,
                                pick a model, and get condition predictions with
                                confidence scores—then track everything from your
                                doctor dashboard. Designed for dentists and oral
                                health professionals; always use alongside your
                                clinical judgment.
                            </p>
                            <div className="flex flex-wrap items-center gap-6 pt-4">
                                <Link
                                    href="/login"
                                    className="clinical-gradient rounded-full px-8 py-4 text-base font-medium text-white shadow-xl shadow-[#004d48]/20 transition-transform hover:scale-105"
                                >
                                    Open doctor workspace
                                </Link>
                                <Link
                                    href="/about"
                                    className="group flex items-center gap-2 font-medium text-[#004d48]"
                                >
                                    Explore the tech
                                    <IconArrowRight
                                        size={20}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="relative flex-1">
                            <div className="relative aspect-square w-full overflow-hidden rounded-3xl shadow-2xl">
                                <Image
                                    src={HERO_IMG}
                                    alt="Clinical dental radiograph"
                                    fill
                                    className="object-cover brightness-110 grayscale"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#004d48]/20 to-transparent" />
                                <div className="absolute left-1/4 top-1/4 h-0.5 w-1/2 animate-[bounce_4s_infinite] bg-[#004d48]/40 shadow-[0_0_15px_rgba(0,77,72,0.5)]" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Precision + Neural */}
                <section className="bg-[#f3f4f3] py-24">
                    <div className="mx-auto max-w-7xl px-8">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
                            <div className="flex flex-col justify-between rounded-[2rem] border border-[#bec9c7]/10 bg-white p-12 shadow-sm md:col-span-7">
                                <div>
                                    <h3 className="font-dente-headline mb-4 text-3xl font-light text-[#191c1c]">
                                        Models & confidence
                                    </h3>
                                    <p className="mb-12 max-w-md font-dente-body font-light text-[#3e4947]">
                                        Your dashboard surfaces how many
                                        predictions you&apos;ve run and the{" "}
                                        <strong className="font-medium text-[#191c1c]">
                                            average confidence
                                        </strong>{" "}
                                        across runs—so you can monitor model
                                        behavior over time in your own practice.
                                    </p>
                                </div>
                                <div className="space-y-8">
                                    <div className="flex items-end justify-between">
                                        <div className="flex flex-col">
                                            <span className="font-dente-headline text-5xl font-light text-[#004d48]">
                                                94%
                                            </span>
                                            <span className="mt-1 text-xs uppercase tracking-tighter text-[#6e7977]">
                                                Example avg. confidence
                                            </span>
                                        </div>
                                        <div className="flex h-32 items-end gap-2">
                                            <div className="h-[40%] w-12 rounded-t-lg bg-[#e7e8e7]" />
                                            <div className="h-[65%] w-12 rounded-t-lg bg-[#e7e8e7]" />
                                            <div className="h-[95%] w-12 rounded-t-lg bg-[#004d48] shadow-lg shadow-[#004d48]/20" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-[#004d48] p-12 text-white md:col-span-5">
                                <div className="absolute -right-8 -top-8 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
                                <div className="relative z-10">
                                    <div className="mb-2 flex items-center gap-3">
                                        <IconCpu size={32} className="opacity-90" />
                                        <IconBrandDatabricks
                                            size={32}
                                            className="opacity-90"
                                        />
                                    </div>
                                    <h3 className="font-dente-headline mb-4 text-2xl font-light">
                                        Two ways to classify
                                    </h3>
                                    <p className="font-dente-body text-sm font-light leading-relaxed text-[#a1f1e9]/80">
                                        Use standard CNN prediction (ResNet,
                                        Inception, DenseNet, EfficientNet) or
                                        open{" "}
                                        <strong className="font-medium text-white">
                                            Transformer Predict
                                        </strong>{" "}
                                        for a transformer-based pathway—same
                                        upload flow, different architecture.
                                    </p>
                                </div>
                                <div className="relative z-10 mt-12 rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
                                    <div className="mb-2 flex justify-between font-mono text-xs">
                                        <span>Prediction run</span>
                                        <span>Confidence</span>
                                    </div>
                                    <div className="h-1 w-full overflow-hidden rounded-full bg-white/20">
                                        <div className="h-full w-[94%] bg-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Diagnostic flow */}
                <section className="px-8 py-32">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-24 text-center">
                            <h2 className="font-dente-headline text-4xl font-light tracking-tight text-[#191c1c]">
                                How it works in the app
                            </h2>
                            <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-[#004d48]" />
                        </div>
                        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
                            {[
                                {
                                    icon: (
                                        <IconUpload
                                            className="text-3xl"
                                            stroke={1.25}
                                        />
                                    ),
                                    title: "Upload image",
                                    body: "Add a dental X-ray or intraoral photo (PNG or JPG, up to 10MB) from the Predict screen after you sign in.",
                                },
                                {
                                    icon: (
                                        <IconBrain
                                            className="text-3xl"
                                            stroke={1.25}
                                        />
                                    ),
                                    title: "Choose model & run",
                                    body: "Select a CNN backbone for standard prediction or use Transformer Predict; confirm your inputs before processing.",
                                },
                                {
                                    icon: (
                                        <IconCircleCheck
                                            className="text-3xl"
                                            stroke={1.25}
                                        />
                                    ),
                                    title: "Results & history",
                                    body: "View the predicted class with a confidence score; find past runs anytime under Past Predictions with search.",
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="group flex flex-col items-center text-center"
                                >
                                    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e7e8e7] transition-all duration-500 group-hover:bg-[#006761] group-hover:text-white">
                                        {item.icon}
                                    </div>
                                    <h4 className="font-dente-headline mb-4 text-xl font-light">
                                        {item.title}
                                    </h4>
                                    <p className="font-dente-body px-4 text-sm font-light leading-relaxed text-[#3e4947]">
                                        {item.body}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="px-8 pb-32">
                    <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[3rem] border border-[#bec9c7]/10 bg-[#f3f4f3] p-12 text-center md:p-24">
                        <div className="pointer-events-none absolute inset-0 opacity-10">
                            <Image
                                src={CTA_PATTERN_IMG}
                                alt=""
                                fill
                                className="object-cover"
                                sizes="100vw"
                            />
                        </div>
                        <div className="relative z-10">
                            <h2 className="font-dente-headline mb-8 text-4xl font-light text-[#191c1c] md:text-5xl">
                                Ready to use it <br />
                                in your practice?
                            </h2>
                            <p className="font-dente-body mx-auto mb-12 max-w-xl text-lg font-light text-[#3e4947]">
                                Register or sign in to access the dentist
                                dashboard: overview, prediction, history, and
                                transformer tools in one place.
                            </p>
                            <Link
                                href="/login"
                                className="inline-block rounded-full bg-[#004d48] px-12 py-5 text-lg font-medium text-white transition-all hover:-translate-y-1 hover:shadow-2xl"
                            >
                                Sign in to dashboard
                            </Link>
                            <p className="font-dente-body mt-8 text-xs uppercase tracking-widest text-[#6e7977]">
                                New users: create an account from Register
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </LandingShell>
    );
}
