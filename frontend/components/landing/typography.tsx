import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function TypographyH1({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <h1
            className={cn(
                "text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-balance font-[family-name:var(--font-serif)] text-[#1B2030]",
                className
            )}
        >
            {children}
        </h1>
    );
}

export function TypographyH2({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <h2
            className={cn(
                "text-2xl md:text-3xl font-normal tracking-tight text-balance text-[var(--dark-teal)] font-[family-name:var(--font-serif)]",
                className
            )}
        >
            {children}
        </h2>
    );
}

export function TypographyP({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <p
            className={cn(
                "leading-7 [&:not(:first-child)]:mt-3 font-[family-name:var(--font-body)] text-[#3a3a4a]",
                className
            )}
        >
            {children}
        </p>
    );
}

export function HandwrittenText({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <span
            className={cn(
                "font-[family-name:var(--font-handwritten)] text-[var(--accent-blue)] text-2xl md:text-3xl inline-block -rotate-1",
                className
            )}
        >
            {children}
        </span>
    );
}
