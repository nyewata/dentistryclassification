"use client";

import { PageContainer, PageContent } from "@/components/container";
import { PageTitle } from "@/components/title";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
    IconArrowLeft,
    IconArrowRight,
    IconBrandDatabricks,
    IconCubeUnfolded,
} from "@tabler/icons-react";

function DoctorPage() {
    return (
        <PageContainer>
            <PageTitle>Dashboard</PageTitle>
            <PageContent>
                <div className="flex gap-8 w-full h-full">
                    <div className="flex-1 flex border rounded-2xl flex-col overflow-hidden justify-between">
                        <div className="text-2xl p-8 py-4 text-blue-600">
                            <span className="text-8xl">8</span>{" "}
                            <span>predictions</span>
                        </div>
                        <div className="bg-blue-600 p-8 py-4 text-white flex gap-1 items-center justify-between">
                            Review past predictions <IconArrowRight />
                        </div>
                    </div>
                    <div className="flex-2 border rounded-2xl text-xl gap-2 bg-blue-600 text-white flex items-center justify-center">
                        <IconCubeUnfolded /> Predict Now
                    </div>
                    <div className="flex-1 border rounded-2xl p-4 flex items-center justify-center">
                        chart placeholder
                    </div>
                </div>

                <div className="flex gap-8 w-full h-full">
                    <div className="flex-1 border rounded-2xl p-4 px-8 flex flex-col">
                        <div className="mb-4 text-primary">
                            Available Models
                        </div>

                        <div className="grid gap-0.5 mb-2">
                            <div className="bg-blue-600 text-white p-2 px-4 rounded-md text-xs">
                                ResNet50V2.keras
                            </div>
                            <div className="bg-blue-600 text-white p-2 px-4 rounded-md text-xs">
                                ResNet50V2.keras
                            </div>
                            <div className="bg-blue-600 text-white p-2 px-4 rounded-md text-xs">
                                ResNet50V2.keras
                            </div>
                            <div className="bg-blue-600 text-white p-2 px-4 rounded-md text-xs">
                                ResNet50V2.keras
                            </div>
                        </div>

                        <Button className="self-end p-0" variant={"link"}>
                            View All <IconArrowRight size={14} />
                        </Button>
                    </div>
                    <div className="flex-1 border rounded-2xl p-4 px-8">
                        <div className="mb-4 text-primary">Ongoing Tasks</div>

                        <div className="grid gap-0.5 mb-2">
                            <div className="bg-blue-600 text-white p-2 rounded-md text-xs flex justify-between">
                                <div className="flex gap-2">
                                    <Spinner />
                                    <div>Normal prediction</div>
                                </div>
                                <div>68%</div>
                            </div>

                            <div className="bg-blue-600 text-white p-2 rounded-md text-xs flex justify-between">
                                <div className="flex gap-2">
                                    <Spinner />
                                    <div>Transformer prediction</div>
                                </div>
                                <div>10%</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 rounded-2xl text-xl gap-2 border-blue-600 border-4 text-blue-600 flex items-center justify-center">
                        <IconBrandDatabricks /> Transformer Predict
                    </div>{" "}
                </div>

                <div className="flex gap-8 w-full h-full">
                    {/* <div className="flex-1 border rounded-2xl"></div> */}
                </div>
            </PageContent>
        </PageContainer>
    );
}

export default DoctorPage;
