/**
 * Map provider errors to friendly UX (Neon / Better Auth style messages vary).
 */
export function parseSignUpError(err: {
    message?: string;
    code?: string;
    status?: number;
} | null): { kind: "duplicate_email" | "generic"; userMessage: string } {
    if (!err) {
        return {
            kind: "generic",
            userMessage: "Failed to create account. Please try again.",
        };
    }

    const raw = `${err.message ?? ""} ${err.code ?? ""}`.toLowerCase();

    const looksDuplicate =
        raw.includes("already") ||
        raw.includes("exist") ||
        raw.includes("duplicate") ||
        raw.includes("registered") ||
        raw.includes("taken") ||
        raw.includes("user with this email") ||
        raw.includes("email is already") ||
        err.status === 409;

    if (looksDuplicate) {
        return {
            kind: "duplicate_email",
            userMessage:
                "An account with this email already exists. Sign in with your password instead.",
        };
    }

    return {
        kind: "generic",
        userMessage: err.message || "Failed to create account. Please try again.",
    };
}
