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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Past Predictions */}
                    <Link
                        href="/doctor/pastpredictions"
                        className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:shadow-lg hover:border-blue-200"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600">
                                <IconHistory size={20} />
                            </div>
                            <IconArrowRight
                                size={18}
                                className="text-gray-300 group-hover:text-blue-600 transition-colors"
                            />
                        </div>
                        <div className="text-4xl font-bold text-gray-900 mb-1">
                            8
                        </div>
                        <div className="text-sm text-gray-500">
                            Total predictions
                        </div>
                    </Link>

                    {/* Predict Now */}
                    <Link
                        href="/doctor/predict"
                        className="group rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white transition-all hover:shadow-lg hover:shadow-blue-200 col-span-1"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/20">
                                <IconUpload size={20} />
                            </div>
                            <IconArrowRight
                                size={18}
                                className="text-blue-200 group-hover:translate-x-1 transition-transform"
                            />
                        </div>
                        <div className="text-lg font-semibold mb-1">
                            New Prediction
                        </div>
                        <div className="text-sm text-blue-100">
                            Upload an image and classify
                        </div>
                    </Link>

                    {/* Stats */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600">
                                <IconChartBar size={20} />
                            </div>
                        </div>
                        <div className="text-4xl font-bold text-gray-900 mb-1">
                            94%
                        </div>
                        <div className="text-sm text-gray-500">
                            Avg. confidence score
                        </div>
                    </div>
                </div>

                {/* Bottom row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Available Models */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-6">
                        <div className="flex items-center gap-2 mb-5">
                            <IconCpu size={18} className="text-blue-600" />
                            <h3 className="font-semibold text-gray-900 text-sm">
                                Available Models
                            </h3>
                        </div>

                        <div className="space-y-2">
                            {models.map((model) => (
                                <div
                                    key={model.name}
                                    className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2.5"
                                >
                                    <span className="text-sm text-gray-700 font-medium">
                                        {model.name}
                                    </span>
                                    <span className="text-[11px] text-gray-400 uppercase tracking-wider">
                                        .{model.type}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Ongoing Tasks */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-6">
                        <div className="flex items-center gap-2 mb-5">
                            <Spinner className="text-blue-600" />
                            <h3 className="font-semibold text-gray-900 text-sm">
                                Ongoing Tasks
                            </h3>
                        </div>

                        <div className="space-y-3">
                            {tasks.map((task) => (
                                <div key={task.name} className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-700">
                                            {task.name}
                                        </span>
                                        <span className="text-xs font-semibold text-blue-600">
                                            {task.progress}%
                                        </span>
                                    </div>
                                    <div className="h-1.5 w-full rounded-full bg-gray-100">
                                        <div
                                            className="h-full rounded-full bg-blue-600 transition-all"
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
                        className="group rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50/50 p-6 transition-all hover:border-blue-400 hover:bg-blue-50"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-100 text-blue-600">
                                <IconBrandDatabricks size={20} />
                            </div>
                            <IconArrowRight
                                size={18}
                                className="text-blue-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                            />
                        </div>
                        <div className="text-lg font-semibold text-blue-700 mb-1">
                            Transformer Predict
                        </div>
                        <div className="text-sm text-blue-500">
                            Use transformer-based classification
                        </div>
                    </Link>
                </div>
            </PageContent>
        </PageContainer>
    );
}

export default DoctorPage;
