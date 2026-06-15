import Image from "next/image";

import { Section } from "@/components/ui/section";
import { industries } from "@/data/home";
import { IndustryCard } from "../industry-card";

export function IndustriesSection() {
  return (
    <Section background="industries-gray" id="industries">
      <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
        {/* Image pair — visible on ALL screen sizes now */}
        <div className="flex justify-center lg:justify-start order-2 lg:order-1">
          <div className="relative w-full max-w-md h-[320px] sm:h-[420px] lg:h-[500px] flex gap-3 sm:gap-5 items-center">
            {/* Left image — Manufacturing */}
            <div className="group relative w-1/2 h-[220px] sm:h-[300px] lg:h-[340px] mt-10 sm:mt-16 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F5F8FF] cursor-pointer">
              <Image
                src="/image/unnamed02.png"
                alt="Manufacturing Industry"
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 200px"
                className="object-cover transition-all duration-700 group-hover:grayscale group-hover:scale-110"
              />
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500" />
              {/* Label appears on hover */}
              <div className="absolute inset-0 flex items-end p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <p className="text-white font-bold text-sm sm:text-base">
                  Manufacturing
                </p>
              </div>
            </div>

            {/* Right image — Healthcare */}
            <div className="group relative w-1/2 h-[240px] sm:h-[340px] lg:h-[380px] mb-6 sm:mb-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F5F8FF] cursor-pointer">
              <Image
                src="/image/unnamed 01.png"
                alt="Healthcare Industry"
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 200px"
                className="object-cover transition-all duration-700 group-hover:grayscale group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500" />
              <div className="absolute inset-0 flex items-end p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <p className="text-white font-bold text-sm sm:text-base">
                  Healthcare
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right text content */}
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1C2237] leading-tight mb-1">
            Industries We
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#F7941D] leading-tight mb-3 sm:mb-4">
            Transform
          </h2>
          <p className="text-base md:text-lg text-slate-600 mb-6 sm:mb-10 max-w-md leading-relaxed">
            Our expertise transcends borders, providing domain-specific
            intelligence for critical global sectors.
          </p>

          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            {industries.map(({ num, title, desc }) => (
              <IndustryCard key={num} num={num} title={title} desc={desc} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
