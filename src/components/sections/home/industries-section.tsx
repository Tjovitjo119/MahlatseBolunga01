import Image from "next/image";

import { Section } from "@/components/ui/section";
import { industries } from "@/data/home";
import { IndustryCard } from "../industry-card";

export function IndustriesSection() {
    return (
        <Section background="industries-gray" id="industries">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* Mobile single image */}
                <div className="lg:hidden mb-2 flex justify-center">
                    <div className="relative w-full max-w-sm h-64 rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/image/unnamed02.png"
                            alt="Industry Visual"
                            fill
                            sizes="(max-width: 640px) 100vw, 384px"
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Desktop image pair */}
                <div className="hidden lg:flex justify-center lg:justify-start">
                    <div className="relative w-full max-w-md h-[420px] sm:h-[460px] lg:h-[500px] flex gap-5 items-center">
                        <div className="relative w-1/2 h-[300px] sm:h-[320px] lg:h-[340px] mt-16 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F5F8FF]">
                            <Image
                                src="/image/unnamed02.png"
                                alt="Manufacturing Industry"
                                fill
                                sizes="(max-width: 1024px) 22vw, 200px"
                                className="object-cover transition-all duration-500 hover:grayscale cursor-pointer"
                            />
                        </div>
                        <div className="relative w-1/2 h-[340px] sm:h-[360px] lg:h-[380px] mb-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F5F8FF]">
                            <Image
                                src="/image/unnamed 01.png"
                                alt="Healthcare Industry"
                                fill
                                sizes="(max-width: 1024px) 22vw, 200px"
                                className="object-cover transition-all duration-500 hover:grayscale cursor-pointer"
                            />
                        </div>
                    </div>
                </div>

                {/* Right text content */}
                <div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1C2237] leading-tight mb-1">
                        Industries We
                    </h2>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#F7941D] leading-tight mb-4">
                        Transform
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 mb-10 max-w-md leading-relaxed">
                        Our expertise transcends borders, providing domain-specific
                        intelligence for critical global sectors.
                    </p>

                    <div className="space-y-4 sm:space-y-6">
                        {industries.map(({ num, title, desc }) => (
                            <IndustryCard key={num} num={num} title={title} desc={desc} />
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
