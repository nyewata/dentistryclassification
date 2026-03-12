"use server";

import prisma from "@/prisma";

export async function createUserRecord(userId: string) {
    try {
        await prisma.user.create({ data: { id: userId } });
        return { success: true };
    } catch {
        return { error: "Profile setup failed. Please contact support." };
    }
}
