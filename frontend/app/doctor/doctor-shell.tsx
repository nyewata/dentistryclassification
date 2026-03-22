"use client";

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
import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode, useState } from "react";
import { authClient } from "@/lib/auth/client";

const NAV_ITEMS = [
    { href: "/doctor", label: "Dashboard", icon: IconHome },
    { href: "/doctor/predict", label: "Predict", icon: IconLoader3 },
    { href: "/doctor/pastpredictions", label: "Past Predictions", icon: IconHistory },
    { href: "/doctor/transformerpredict", label: "Transformer", icon: IconBrandDatabricks },
];

export function DoctorShell({
    userName,
    children,
}: {
    userName: string;
    children: ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();
    const [loggingOut, setLoggingOut] = useState(false);

    async function handleLogout() {
        setLoggingOut(true);
        await authClient.signOut();
        router.push("/login");
    }

    return (
        <div className="h-screen w-full flex bg-[#f9f9f8]">
            {/* Top-right toolbar */}
            <div className="z-10 flex gap-1.5 absolute right-8 top-8 rounded-4xl border border-[#bec9c7]/40 bg-white/90 p-2 shadow-sm backdrop-blur-sm">
                <Tooltip>
                    <TooltipTrigger
                        render={
                            <Link
                                href="/doctor/profile"
                                className="inline-flex h-8 items-center gap-1.5 rounded-full border border-[#bec9c7]/50 bg-white px-3 text-sm font-medium text-[#004d48] transition-colors hover:border-[#004d48]/30 hover:bg-[#f3f4f3]"
                            >
                                <IconUser size={16} /> {userName}
                            </Link>
                        }
                    />
                    <TooltipContent>
                        <p>View Profile</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger
                        render={
                            <Button
                                className="relative rounded-full border-[#bec9c7]/50 text-[#004d48] hover:border-[#004d48]/30 hover:bg-[#f3f4f3]"
                                variant="outline"
                                size="icon"
                            >
                                <IconBell size={16} />
                                <Badge className="-top-1 -right-1 absolute h-4 min-w-4 rounded-full text-[9px] px-0 font-mono tabular-nums">
                                    9
                                </Badge>
                            </Button>
                        }
                    />
                    <TooltipContent>
                        <p>Notifications</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger
                        render={
                            <Button
                                className="rounded-full border-[#bec9c7]/50 text-[#6e7977] hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                                variant="outline"
                                size="icon"
                                onClick={handleLogout}
                                disabled={loggingOut}
                            >
                                <IconLogout size={16} />
                            </Button>
                        }
                    />
                    <TooltipContent>
                        <p>{loggingOut ? "Logging out..." : "Logout"}</p>
                    </TooltipContent>
                </Tooltip>
            </div>

            {/* Page content */}
            <div className="flex-1 w-full h-full p-8 pb-28 overflow-y-auto">
                {children}
            </div>

            {/* Bottom nav */}
            <div className="z-10 flex absolute bottom-8 items-center justify-center w-full">
                <nav className="flex gap-1.5 rounded-4xl border border-[#bec9c7]/40 bg-white/95 p-2 shadow-md backdrop-blur-sm">
                    {NAV_ITEMS.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`inline-flex h-8 items-center gap-1.5 rounded-4xl px-4 text-sm font-medium transition-all ${
                                    isActive
                                        ? "clinical-gradient text-white shadow-md shadow-[#004d48]/25"
                                        : "text-[#3e4947] hover:bg-[#f3f4f3] hover:text-[#004d48]"
                                }`}
                            >
                                <item.icon size={16} /> {item.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
}
