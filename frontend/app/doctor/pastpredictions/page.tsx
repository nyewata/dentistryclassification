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
                <div className="rounded-2xl border border-gray-200 bg-white">
                    {/* Search bar */}
                    <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100">
                        <IconSearch size={18} className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search predictions..."
                            className="flex-1 text-sm bg-transparent outline-none placeholder:text-gray-400 text-gray-700"
                        />
                    </div>

                    {/* Empty state */}
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-100 text-gray-400 mb-4">
                            <IconHistory size={24} />
                        </div>
                        <p className="text-sm font-medium text-gray-600 mb-1">
                            No predictions yet
                        </p>
                        <p className="text-xs text-gray-400 max-w-xs">
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
