export function PageTitle({
    children,
    subtitle,
}: {
    children: string;
    subtitle?: string;
}) {
    return (
        <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-[#191c1c]">
                {children}
            </h1>
            {subtitle && (
                <p className="mt-1 text-sm text-[#3e4947]">{subtitle}</p>
            )}
        </div>
    );
}
