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
                    <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-white p-8 flex flex-col items-center justify-center min-h-[320px] hover:border-blue-400 hover:bg-blue-50/30 transition-colors cursor-pointer">
                        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 mb-4">
                            <IconUpload size={28} />
                        </div>
                        <p className="text-sm font-medium text-gray-700 mb-1">
                            Drop your image here
                        </p>
                        <p className="text-xs text-gray-400">
                            PNG, JPG up to 10MB
                        </p>
                    </div>

                    {/* Instructions */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-8">
                        <h3 className="font-semibold text-gray-900 mb-6">
                            How it works
                        </h3>
                        <div className="space-y-5">
                            {steps.map((step, i) => (
                                <div key={step.title} className="flex gap-4">
                                    <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                                        <step.icon size={18} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-800">
                                            {i + 1}. {step.title}
                                        </p>
                                        <p className="text-xs text-gray-500 mt-0.5">
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
