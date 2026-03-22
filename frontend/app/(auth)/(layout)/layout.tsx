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
                <div className="absolute inset-0 bg-gradient-to-tr from-[#004d48]/45 via-[#006761]/25 to-transparent" />
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

            <div className="relative flex flex-6 flex-col items-center justify-center bg-[#f9f9f8]">
                <div className="absolute left-6 top-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1 text-sm text-[#6e7977] transition-colors hover:text-[#004d48]"
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
