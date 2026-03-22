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
                    <div className="flex min-h-[320px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#004d48]/30 bg-[#e8f5f3]/40 p-8 transition-colors hover:border-[#006761] hover:bg-[#e8f5f3]/70">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#004d48] shadow-sm ring-1 ring-[#bec9c7]/30">
                            <IconUpload size={28} />
                        </div>
                        <p className="mb-1 text-sm font-medium text-[#191c1c]">
                            Drop your image here
                        </p>
                        <p className="text-xs text-[#3e4947]">
                            PNG, JPG up to 10MB
                        </p>
                    </div>

                    {/* Info */}
                    <div className="flex flex-col justify-center rounded-2xl border border-[#bec9c7]/40 bg-white p-8 shadow-sm">
                        <div className="mb-6 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f3f4f3] text-[#004d48]">
                                <IconBrandDatabricks size={20} />
                            </div>
                            <h3 className="font-semibold text-[#191c1c]">
                                Transformer Model
                            </h3>
                        </div>
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <IconSparkles
                                    size={18}
                                    className="mt-0.5 shrink-0 text-[#006761]"
                                />
                                <div>
                                    <p className="text-sm font-medium text-[#191c1c]">
                                        Higher accuracy
                                    </p>
                                    <p className="mt-0.5 text-xs text-[#3e4947]">
                                        Transformer models capture complex patterns in dental imagery for improved classification.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <IconSparkles
                                    size={18}
                                    className="mt-0.5 shrink-0 text-[#006761]"
                                />
                                <div>
                                    <p className="text-sm font-medium text-[#191c1c]">
                                        Attention-based analysis
                                    </p>
                                    <p className="mt-0.5 text-xs text-[#3e4947]">
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
