import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from "@/components/ui/tooltip";
import {
    IconBell,
    IconBrandDatabricks,
    IconHistory,
    IconHome,
    IconLoader3,
    IconLogout,
    IconUser,
} from "@tabler/icons-react";
import Link from "next/link";
import React, { ReactNode } from "react";

function DoctorsLayout({ children }: { children: ReactNode }) {
    return (
        <div className="h-screen w-full flex">
            <div className="z-10 flex gap-1.5 text-primary absolute right-8 top-8 p-2 border border-gray-300 rounded-4xl">
                <Tooltip>
                    <TooltipTrigger>
                        <Button
                            className={"rounded-full border-gray-300"}
                            variant={"outline"}
                            // size={"icon"}
                        >
                            <IconUser /> Ibrahim Ame
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>User Information</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>
                        <Button
                            className={"rounded-full border-gray-300 relative"}
                            variant={"outline"}
                            size={"icon"}
                        >
                            <IconBell />
                            <Badge className="-top-1 -right-1 absolute h-4 min-w-4 rounded-full text-[9px] px-0 font-mono tabular-nums">
                                9
                            </Badge>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Notifications</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>
                        <Button
                            className={"rounded-full border-gray-300"}
                            variant={"outline"}
                            size={"icon"}
                        >
                            <IconLogout />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Logout</p>
                    </TooltipContent>
                </Tooltip>
            </div>
            <div className="flex-1 w-full h-full p-8">{children}</div>
            <div className="z-10 flex absolute bottom-8 items-center justify-center w-full ">
                <div className="flex border border-gray-300 p-2 rounded-4xl gap-1.5 bg-white">
                    <LinkItem active={true} href={"/doctor"}>
                        <IconHome /> Dashboard
                    </LinkItem>
                    <LinkItem href={"/doctor/predict"}>
                        <IconLoader3 /> Predict
                    </LinkItem>
                    <LinkItem href={"/doctor/pastpredictions"}>
                        <IconHistory /> Past Predictions
                    </LinkItem>
                    <LinkItem href={"/doctor/transformerpredict"}>
                        <IconBrandDatabricks /> TransformerPredict
                    </LinkItem>
                </div>
            </div>
        </div>
    );
}

function LinkItem({
    href,
    children,
    active = false,
}: {
    href: string;
    children: ReactNode;
    active?: boolean;
}) {
    const activeClass = active
        ? "bg-blue-600 text-white"
        : "bg-white border-gray-300 text-blue-600 hover:bg-blue-600 hover:text-white";

    return (
        <Link href={href}>
            <Button className={`${activeClass} rounded-4xl`}>{children}</Button>
        </Link>
    );
}

export default DoctorsLayout;
