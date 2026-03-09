export function PageTitle({
    children,
    subtitle,
}: {
    children: string;
    subtitle?: string;
}) {
    return (
        <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                {children}
            </h1>
            {subtitle && (
                <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
            )}
        </div>
    );
}
