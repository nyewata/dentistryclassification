"use server";

import { authServer } from "@/lib/auth/server";
import prisma from "@/prisma";

export async function signUpWithEmail(
    _prevState: { error?: string; success?: string } | null,
    formData: FormData
) {
    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const password = formData.get("password") as string;
    const passwordRepeat = formData.get("password_repeat") as string;

    if (!name || name.length < 2) {
        return { error: "Please enter your full name." };
    }

    if (!email) {
        return { error: "Email address is required." };
    }

    if (!password || password.length < 8) {
        return { error: "Password must be at least 8 characters long." };
    }

    if (password !== passwordRepeat) {
        return { error: "Passwords do not match." };
    }

    const resultObject = await authServer.signUp.email({
        email,
        name,
        password,
    });

    const { error, data } = resultObject;

    if (error) {
        return { error: error.message || "Failed to create account. Please try again." };
    }

    if (data) {
        const { id } = data.user;
        try {
            await prisma.user.create({ data: { id } });
        } catch {
            return { error: "Account created but profile setup failed. Please contact support." };
        }
    }

    return { success: "Account created successfully! Redirecting to login..." };
}
