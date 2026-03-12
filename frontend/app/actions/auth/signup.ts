"use server";

import { authServer } from "@/lib/auth/server";
import prisma from "@/prisma";
import { headers } from "next/headers";

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

    // #region agent log
    const hdrs = await headers();
    const debugInfo = {
        origin: hdrs.get("origin"),
        referer: hdrs.get("referer"),
        host: hdrs.get("host"),
        xForwardedHost: hdrs.get("x-forwarded-host"),
        xForwardedProto: hdrs.get("x-forwarded-proto"),
        neonAuthBaseUrl: process.env.NEON_AUTH_BASE_URL?.substring(0, 60),
        betterAuthUrl: process.env.BETTER_AUTH_URL,
    };
    console.log("[DEBUG-9f6369] signup-pre-call", JSON.stringify(debugInfo));
    fetch('http://127.0.0.1:7353/ingest/2cc87a84-6d44-4b79-8c5a-cc3886685a54',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'9f6369'},body:JSON.stringify({sessionId:'9f6369',location:'signup.ts:38',message:'signup-pre-call',data:debugInfo,timestamp:Date.now(),hypothesisId:'H1'})}).catch(()=>{});
    // #endregion

    const resultObject = await authServer.signUp.email({
        email,
        name,
        password,
    });

    const { error, data } = resultObject;

    // #region agent log
    const resultDebug = {
        hasError: !!error,
        errorMessage: error?.message,
        errorCode: (error as any)?.code,
        errorStatus: (error as any)?.status,
        fullError: error ? JSON.stringify(error).substring(0, 500) : null,
        hasData: !!data,
    };
    console.log("[DEBUG-9f6369] signup-result", JSON.stringify(resultDebug));
    fetch('http://127.0.0.1:7353/ingest/2cc87a84-6d44-4b79-8c5a-cc3886685a54',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'9f6369'},body:JSON.stringify({sessionId:'9f6369',location:'signup.ts:55',message:'signup-result',data:resultDebug,timestamp:Date.now(),hypothesisId:'H1'})}).catch(()=>{});
    // #endregion

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
