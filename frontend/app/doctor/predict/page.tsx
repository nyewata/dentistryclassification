import { PageContainer, PageContent } from "@/components/container";
import { PageTitle } from "@/components/title";
import {
    IconUpload,
    IconPhoto,
    IconEye,
    IconChartBar,
} from "@tabler/icons-react";

const steps = [
    {
        icon: IconUpload,
        title: "Upload Image",
        description: "Select or drag-and-drop a dental X-ray or photograph.",
    },
    {
        icon: IconPhoto,
        title: "Choose Model",
        description:
            "Pick the classification model best suited for your case.",
    },
    {
        icon: IconEye,
        title: "Review",
        description:
            "Confirm the image and model selection before processing.",
    },
    {
        icon: IconChartBar,
        title: "Get Results",
        description:
            "View the classification result with a confidence score.",
    },
];

function PredictPage() {
    return (
        <PageContainer>
            <PageTitle subtitle="Upload an image to classify dental conditions">
                Predict
            </PageTitle>
            <PageContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Upload area */}
                    <div className="flex min-h-[320px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#bec9c7]/70 bg-white p-8 transition-colors hover:border-[#006761]/50 hover:bg-[#f3f4f3]/50">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e8f5f3] text-[#004d48]">
                            <IconUpload size={28} />
                        </div>
                        <p className="mb-1 text-sm font-medium text-[#191c1c]">
                            Drop your image here
                        </p>
                        <p className="text-xs text-[#6e7977]">
                            PNG, JPG up to 10MB
                        </p>
                    </div>

                    {/* Instructions */}
                    <div className="rounded-2xl border border-[#bec9c7]/40 bg-white p-8 shadow-sm">
                        <h3 className="mb-6 font-semibold text-[#191c1c]">
                            How it works
                        </h3>
                        <div className="space-y-5">
                            {steps.map((step, i) => (
                                <div key={step.title} className="flex gap-4">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#f3f4f3] text-[#004d48]">
                                        <step.icon size={18} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-[#191c1c]">
                                            {i + 1}. {step.title}
                                        </p>
                                        <p className="mt-0.5 text-xs text-[#3e4947]">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </PageContent>
        </PageContainer>
    );
}

export default PredictPage;
