import type { Metadata } from "next";
import {
    Geist,
    Geist_Mono,
    Outfit,
    DM_Serif_Display,
    DM_Sans,
    Caveat,
    Manrope,
    Inter,
} from "next/font/google";
import "./globals.css";
import { authClient } from "@/lib/auth/client";
import { NeonAuthUIProvider, UserButton } from "@neondatabase/auth/react";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-serif",
});

const dmSans = DM_Sans({
    subsets: ["latin"],
    variable: "--font-body",
});

const caveat = Caveat({
    subsets: ["latin"],
    variable: "--font-handwritten",
});

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-dente-headline",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-dente-body",
});

export const metadata: Metadata = {
    title: "Dentistry Classification",
    description: "AI-powered dental X-ray analysis for accurate diagnosis support",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${outfit.variable} ${dmSerif.variable} ${dmSans.variable} ${caveat.variable} ${manrope.variable} ${inter.variable}`}
            suppressHydrationWarning
        >
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <NeonAuthUIProvider
                    authClient={authClient}
                    redirectTo="/account/settings"
                    emailOTP
                >
                    {children}
                </NeonAuthUIProvider>
            </body>
        </html>
    );
}
