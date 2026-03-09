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
        <div className="h-screen w-full flex bg-[#f8f9fb]">
            {/* Top-right toolbar */}
            <div className="z-10 flex gap-1.5 absolute right-8 top-8 p-2 border border-gray-200 rounded-4xl bg-white shadow-sm">
                <Tooltip>
                    <TooltipTrigger
                        render={
                            <Link
                                href="/doctor/profile"
                                className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 h-8 text-sm font-medium text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-colors"
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
                                className="rounded-full border-gray-200 relative hover:bg-blue-50 hover:border-blue-200 text-blue-600"
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
                                className="rounded-full border-gray-200 hover:bg-red-50 hover:text-red-600 hover:border-red-200 text-gray-500"
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
                <nav className="flex border border-gray-200 p-2 rounded-4xl gap-1.5 bg-white shadow-md">
                    {NAV_ITEMS.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`inline-flex items-center gap-1.5 rounded-4xl px-4 h-8 text-sm font-medium transition-all ${
                                    isActive
                                        ? "bg-blue-600 text-white shadow-sm"
                                        : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
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
