import { PageContainer, PageContent } from "@/components/container";
import { PageTitle } from "@/components/title";
import {
    IconBrandDatabricks,
    IconUpload,
    IconSparkles,
} from "@tabler/icons-react";

function TransformerPredictPage() {
    return (
        <PageContainer>
            <PageTitle subtitle="Advanced classification powered by transformer models">
                Transformer Predict
            </PageTitle>
            <PageContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Upload area */}
                    <div className="rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50/40 p-8 flex flex-col items-center justify-center min-h-[320px] hover:border-blue-400 hover:bg-blue-50 transition-colors cursor-pointer">
                        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 mb-4">
                            <IconUpload size={28} />
                        </div>
                        <p className="text-sm font-medium text-blue-700 mb-1">
                            Drop your image here
                        </p>
                        <p className="text-xs text-blue-400">
                            PNG, JPG up to 10MB
                        </p>
                    </div>

                    {/* Info */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600">
                                <IconBrandDatabricks size={20} />
                            </div>
                            <h3 className="font-semibold text-gray-900">
                                Transformer Model
                            </h3>
                        </div>
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <IconSparkles
                                    size={18}
                                    className="text-blue-500 shrink-0 mt-0.5"
                                />
                                <div>
                                    <p className="text-sm font-medium text-gray-800">
                                        Higher accuracy
                                    </p>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                        Transformer models capture complex patterns in dental imagery for improved classification.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <IconSparkles
                                    size={18}
                                    className="text-blue-500 shrink-0 mt-0.5"
                                />
                                <div>
                                    <p className="text-sm font-medium text-gray-800">
                                        Attention-based analysis
                                    </p>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                        See which regions of the image the model focuses on during classification.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContent>
        </PageContainer>
    );
}

export default TransformerPredictPage;
