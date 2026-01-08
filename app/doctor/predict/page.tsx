import { PageContainer, PageContent } from "@/components/container";
import { PageTitle } from "@/components/title";
import React from "react";

function page() {
    return (
        <PageContainer>
            <PageTitle>Predict</PageTitle>
            <PageContent>
                <div>
                    <div>Instructions</div>

                    {/* list down instruction for prediction */}
                </div>
            </PageContent>
        </PageContainer>
    );
}

export default page;
