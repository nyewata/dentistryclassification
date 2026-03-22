"use client";

import { PageContainer, PageContent } from "@/components/container";
import { PageTitle } from "@/components/title";
import { Spinner } from "@/components/ui/spinner";
import {
    IconArrowRight,
    IconBrandDatabricks,
    IconChartBar,
    IconHistory,
    IconUpload,
    IconCpu,
} from "@tabler/icons-react";
import Link from "next/link";

const models = [
    { name: "ResNet50V2", type: "keras", status: "active" },
    { name: "InceptionV3", type: "keras", status: "active" },
    { name: "DenseNet121", type: "keras", status: "inactive" },
    { name: "EfficientNetB0", type: "keras", status: "active" },
];

const tasks = [
    { name: "Normal prediction", progress: 68 },
    { name: "Transformer prediction", progress: 10 },
];

function DoctorPage() {
    return (
        <PageContainer>
            <PageTitle subtitle="Overview of your dental classification workspace">
                Dashboard
            </PageTitle>
            <PageContent>
                {/* Top row */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {/* Past Predictions */}
                    <Link
                        href="/doctor/pastpredictions"
                        className="group rounded-2xl border border-[#bec9c7]/40 bg-white p-6 shadow-sm transition-all hover:border-[#004d48]/25 hover:shadow-lg"
                    >
                        <div className="mb-4 flex items-center justify-between">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f3f4f3] text-[#004d48]">
                                <IconHistory size={20} />
                            </div>
                            <IconArrowRight
                                size={18}
                                className="text-[#bec9c7] transition-colors group-hover:text-[#004d48]"
                            />
                        </div>
                        <div className="mb-1 text-4xl font-bold text-[#191c1c]">
                            8
                        </div>
                        <div className="text-sm text-[#3e4947]">
                            Total predictions
                        </div>
                    </Link>

                    {/* Predict Now — landing “technology” style: gradient + soft glow */}
                    <Link
                        href="/doctor/predict"
                        className="group relative col-span-1 overflow-hidden rounded-2xl p-6 text-white shadow-xl shadow-[#004d48]/20 ring-1 ring-white/15 transition-all hover:shadow-2xl hover:shadow-[#004d48]/30 clinical-gradient"
                    >
                        <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                        <div className="relative">
                            <div className="mb-4 flex items-center justify-between">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 ring-1 ring-white/25">
                                    <IconUpload size={20} />
                                </div>
                                <IconArrowRight
                                    size={18}
                                    className="text-[#a1f1e9]/90 transition-transform group-hover:translate-x-1"
                                />
                            </div>
                            <div className="mb-1 text-lg font-semibold tracking-tight">
                                New Prediction
                            </div>
                            <div className="text-sm font-light text-[#a1f1e9]/95">
                                Upload · choose model · classify
                            </div>
                        </div>
                    </Link>

                    {/* Stats */}
                    <div className="rounded-2xl border border-[#bec9c7]/40 bg-white p-6 shadow-sm">
                        <div className="mb-4 flex items-center justify-between">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f5f3] text-[#006761]">
                                <IconChartBar size={20} />
                            </div>
                        </div>
                        <div className="mb-1 text-4xl font-bold text-[#191c1c]">
                            94%
                        </div>
                        <div className="text-sm text-[#3e4947]">
                            Avg. confidence score
                        </div>
                    </div>
                </div>

                {/* Bottom row */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {/* Available Models */}
                    <div className="rounded-2xl border border-[#bec9c7]/40 bg-white p-6 shadow-sm">
                        <div className="mb-5 flex items-center gap-2">
                            <IconCpu size={18} className="text-[#004d48]" />
                            <h3 className="text-sm font-semibold text-[#191c1c]">
                                Available Models
                            </h3>
                        </div>

                        <div className="space-y-2">
                            {models.map((model) => (
                                <div
                                    key={model.name}
                                    className="flex items-center justify-between rounded-lg bg-[#f3f4f3] px-4 py-2.5"
                                >
                                    <span className="text-sm font-medium text-[#191c1c]">
                                        {model.name}
                                    </span>
                                    <span className="text-[11px] uppercase tracking-wider text-[#6e7977]">
                                        .{model.type}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Ongoing Tasks */}
                    <div className="rounded-2xl border border-[#bec9c7]/40 bg-white p-6 shadow-sm">
                        <div className="mb-5 flex items-center gap-2">
                            <Spinner className="text-[#006761]" />
                            <h3 className="text-sm font-semibold text-[#191c1c]">
                                Ongoing Tasks
                            </h3>
                        </div>

                        <div className="space-y-3">
                            {tasks.map((task) => (
                                <div key={task.name} className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-[#3e4947]">
                                            {task.name}
                                        </span>
                                        <span className="text-xs font-semibold text-[#004d48]">
                                            {task.progress}%
                                        </span>
                                    </div>
                                    <div className="h-1.5 w-full rounded-full bg-[#e7e8e7]">
                                        <div
                                            className="h-full rounded-full bg-[#006761] transition-all"
                                            style={{ width: `${task.progress}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Transformer Predict */}
                    <Link
                        href="/doctor/transformerpredict"
                        className="group rounded-2xl border-2 border-dashed border-[#004d48]/35 bg-[#f3f4f3]/80 p-6 transition-all hover:border-[#006761] hover:bg-[#e8f5f3]/60"
                    >
                        <div className="mb-4 flex items-center justify-between">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#004d48] shadow-sm ring-1 ring-[#bec9c7]/30">
                                <IconBrandDatabricks size={20} />
                            </div>
                            <IconArrowRight
                                size={18}
                                className="text-[#bec9c7] transition-all group-hover:translate-x-1 group-hover:text-[#004d48]"
                            />
                        </div>
                        <div className="mb-1 text-lg font-semibold text-[#191c1c]">
                            Transformer Predict
                        </div>
                        <div className="text-sm text-[#3e4947]">
                            Transformer-based classification
                        </div>
                    </Link>
                </div>
            </PageContent>
        </PageContainer>
    );
}

export default DoctorPage;
