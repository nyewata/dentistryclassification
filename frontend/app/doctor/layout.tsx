import React, { ReactNode } from "react";
import { redirect } from "next/navigation";
import { authServer } from "@/lib/auth/server";
import { DoctorShell } from "./doctor-shell";

async function DoctorsLayout({ children }: { children: ReactNode }) {
    const { data } = await authServer.getSession();

    if (!data || !data.user) {
        redirect("/login");
    }

    const { user } = data;

    return (
        <DoctorShell userName={user.name ?? "User"}>
            {children}
        </DoctorShell>
    );
}

export default DoctorsLayout;
