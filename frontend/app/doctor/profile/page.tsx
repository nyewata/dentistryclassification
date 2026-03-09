"use client";

import { PageContainer, PageContent } from "@/components/container";
import { PageTitle } from "@/components/title";
import { Button } from "@/components/ui/button";
import {
    IconUser,
    IconMail,
    IconLock,
    IconCheck,
    IconAlertTriangle,
    IconArrowLeft,
} from "@tabler/icons-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth/client";

function ProfilePage() {
    const [user, setUser] = useState<{ name: string; email: string } | null>(null);
    const [loading, setLoading] = useState(true);

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [pwStatus, setPwStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
    const [changingPw, setChangingPw] = useState(false);

    useEffect(() => {
        authClient.getSession().then(({ data }) => {
            if (data?.user) {
                setUser({ name: data.user.name ?? "", email: data.user.email ?? "" });
            }
            setLoading(false);
        });
    }, []);

    async function handleChangePassword(e: React.FormEvent) {
        e.preventDefault();
        setPwStatus(null);

        if (newPassword.length < 8) {
            setPwStatus({ type: "error", message: "New password must be at least 8 characters." });
            return;
        }
        if (newPassword !== confirmPassword) {
            setPwStatus({ type: "error", message: "New passwords do not match." });
            return;
        }

        setChangingPw(true);
        const { error } = await authClient.changePassword({
            currentPassword,
            newPassword,
            revokeOtherSessions: false,
        });
        setChangingPw(false);

        if (error) {
            setPwStatus({ type: "error", message: error.message || "Failed to change password." });
        } else {
            setPwStatus({ type: "success", message: "Password changed successfully!" });
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
        }
    }

    if (loading) {
        return (
            <PageContainer>
                <PageTitle>Profile</PageTitle>
                <PageContent>
                    <div className="flex items-center justify-center h-48 text-gray-400 text-sm">
                        Loading...
                    </div>
                </PageContent>
            </PageContainer>
        );
    }

    return (
        <PageContainer>
            <div className="mb-2">
                <Link
                    href="/doctor"
                    className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors"
                >
                    <IconArrowLeft size={14} /> Back to Dashboard
                </Link>
            </div>
            <PageTitle subtitle="View your account details and manage your password">
                Profile
            </PageTitle>
            <PageContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    {/* User Info */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-8">
                        <h3 className="font-semibold text-gray-900 mb-6">Account Information</h3>

                        <div className="space-y-5">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                                    <IconUser size={18} />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">
                                        Full Name
                                    </div>
                                    <div className="text-sm font-medium text-gray-900">
                                        {user?.name || "—"}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                                    <IconMail size={18} />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">
                                        Email
                                    </div>
                                    <div className="text-sm font-medium text-gray-900">
                                        {user?.email || "—"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Change Password */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-8">
                        <div className="flex items-center gap-2 mb-6">
                            <IconLock size={18} className="text-blue-600" />
                            <h3 className="font-semibold text-gray-900">Change Password</h3>
                        </div>

                        {pwStatus && (
                            <div
                                className={`flex items-start gap-2 rounded-lg border px-4 py-3 text-sm mb-5 ${
                                    pwStatus.type === "error"
                                        ? "border-red-200 bg-red-50 text-red-700"
                                        : "border-green-200 bg-green-50 text-green-700"
                                }`}
                            >
                                {pwStatus.type === "error" ? (
                                    <IconAlertTriangle size={16} className="shrink-0 mt-0.5" />
                                ) : (
                                    <IconCheck size={16} className="shrink-0 mt-0.5" />
                                )}
                                <span>{pwStatus.message}</span>
                            </div>
                        )}

                        <form onSubmit={handleChangePassword} className="space-y-4">
                            <div>
                                <label className="block text-xs text-gray-500 mb-1.5">
                                    Current Password
                                </label>
                                <input
                                    type="password"
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                    required
                                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                                    placeholder="Enter current password"
                                />
                            </div>
                            <div>
                                <label className="block text-xs text-gray-500 mb-1.5">
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                                    placeholder="At least 8 characters"
                                />
                            </div>
                            <div>
                                <label className="block text-xs text-gray-500 mb-1.5">
                                    Confirm New Password
                                </label>
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                                    placeholder="Re-enter new password"
                                />
                            </div>
                            <Button
                                type="submit"
                                disabled={changingPw}
                                className="w-full"
                                size="lg"
                            >
                                {changingPw ? "Changing..." : "Update Password"}
                            </Button>
                        </form>
                    </div>
                </div>
            </PageContent>
        </PageContainer>
    );
}

export default ProfilePage;
