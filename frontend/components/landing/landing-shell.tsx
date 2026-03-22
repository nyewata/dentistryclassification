import LandingNavbar from "@/components/landing/landing-navbar";
import LandingFooter from "@/components/landing/landing-footer";

export default function LandingShell({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col bg-[#f9f9f8] font-dente-body text-[#191c1c] dente-selection">
            <LandingNavbar />
            <div className="flex flex-1 flex-col pt-[120px] md:pt-[88px]">
                {children}
            </div>
            <LandingFooter />
        </div>
    );
}
