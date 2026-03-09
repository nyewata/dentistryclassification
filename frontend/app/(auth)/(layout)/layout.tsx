import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";
import { ReactNode } from "react";

function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex h-screen w-full">
            <div className="flex-3 relative hidden md:block">
                <Image
                    fill={true}
                    src="/images/front-teeth-shot.jpg"
                    alt="Front Teeth Shot"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-blue-600/20" />
                <div className="absolute inset-0 p-8 flex flex-col">
                    <div className="flex gap-4 items-center">
                        <div className="text-4xl max-w-6 leading-11 text-white">
                            Dentistry Classification
                        </div>
                    </div>
                    <q className="mt-auto text-white text-3xl mb-4">
                        A smile is a curve that sets everything straight.
                    </q>
                </div>
            </div>

            <div className="relative flex-6 items-center justify-center flex flex-col bg-[#f8f9fb]">
                <div className="absolute top-6 left-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors"
                    >
                        <IconArrowLeft size={14} /> Back to home
                    </Link>
                </div>
                {children}
                <div className="absolute bottom-4">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;
