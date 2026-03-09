export function PageContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col w-full h-full overflow-y-auto">
            {children}
        </div>
    );
}

export function PageContent({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid gap-6 w-full flex-1">{children}</div>
    );
}
