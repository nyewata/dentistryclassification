export function PageTitle({ children }: { children: string }) {
    return (
        <div className="mb-6 h-14 text-primary font-bold text-4xl flex items-end">
            {children}
        </div>
    );
}
