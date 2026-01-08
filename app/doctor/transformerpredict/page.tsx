import { PageContainer, PageContent } from "@/components/container";
import { PageTitle } from "@/components/title";

function TransformerPredictPage() {
    return (
        <PageContainer>
            <PageTitle>Transformer Predict</PageTitle>
            <PageContent>
                <div>{/* table component of all past predictions */}</div>
            </PageContent>
        </PageContainer>
    );
}

export default TransformerPredictPage;
