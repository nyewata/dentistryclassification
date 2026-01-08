import Footer from "@/components/footer";
import Image from "next/image";
import { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
    return (
        <div className="flex h-screen w-full">
            <div className="flex-3 relative">
                <Image
                    fill={true}
                    src={"/images/front-teeth-shot.jpg"}
                    alt="Front Teeth Shot"
                />
                <div className="absolute grid w-full h-full bg-blue-600 opacity-20"></div>
                <div className="absolute grid w-full h-full p-8 items-start">
                    <div className="flex gap-4 items-center">
                        {/* <div className="bg-white rounded-md h-13 w-15"></div> */}
                        <div className="text-4xl max-w-6 leading-11 text-white">
                            Dentistry Classification
                        </div>
                    </div>

                    <q className="mt-auto text-white text-3xl mb-4">
                        A smile is a curve that sets everything straight.
                    </q>
                </div>
            </div>

            <div className="relative flex-6 items-center justify-center flex flex-col">
                {children}
                <div className="absolute bottom-4">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default layout;
