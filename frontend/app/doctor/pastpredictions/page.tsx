import { PageContainer, PageContent } from "@/components/container";
import { PageTitle } from "@/components/title";
import { IconSearch, IconHistory } from "@tabler/icons-react";

function PastPredictionsPage() {
    return (
        <PageContainer>
            <PageTitle subtitle="Browse all your previous classification results">
                Past Predictions
            </PageTitle>
            <PageContent>
                <div className="rounded-2xl border border-[#bec9c7]/40 bg-white shadow-sm">
                    {/* Search bar */}
                    <div className="flex items-center gap-3 border-b border-[#e7e8e7] px-6 py-4">
                        <IconSearch size={18} className="text-[#6e7977]" />
                        <input
                            type="text"
                            placeholder="Search predictions..."
                            className="flex-1 bg-transparent text-sm text-[#191c1c] outline-none placeholder:text-[#6e7977]"
                        />
                    </div>

                    {/* Empty state */}
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f3f4f3] text-[#6e7977]">
                            <IconHistory size={24} />
                        </div>
                        <p className="mb-1 text-sm font-medium text-[#191c1c]">
                            No predictions yet
                        </p>
                        <p className="max-w-xs text-xs text-[#3e4947]">
                            Once you run a prediction, your results will appear
                            here for easy reference.
                        </p>
                    </div>
                </div>
            </PageContent>
        </PageContainer>
    );
}

export default PastPredictionsPage;
