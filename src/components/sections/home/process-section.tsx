"use client";

import {
  Search,
  PenTool,
  Rocket,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/data/home";

const iconMap: Record<string, LucideIcon> = {
  Search,
  PenTool,
  Rocket,
  HeartHandshake,
};

export function ProcessSection() {
  return (
    <Section background="industries-gray" id="our-process">
      <SectionHeading
        eyebrow="Our Process"
        title="How We Deliver Excellence"
        description="A proven four-step methodology that ensures successful outcomes — from initial discovery through long-term partnership."
      />

      <div className="relative">
        {/* Connecting line — desktop only */}
        <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#6B3FA0]/30 to-transparent" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative z-10">
          {processSteps.map((step) => {
            const Icon = iconMap[step.iconName];
            return (
              <div key={step.num} className="group relative text-center">
                {/* Step number badge */}
                <div className="relative inline-block mb-5">
                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6B3FA0] to-[#F7941D] opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500 group-hover:scale-150" />

                  {/* Number circle */}
                  <div className="relative w-32 h-32 mx-auto rounded-full bg-white border-4 border-[#6B3FA0]/10 group-hover:border-[#F7941D] flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-lg group-hover:shadow-2xl group-hover:shadow-[#6B3FA0]/30">
                    <Icon
                      className="w-12 h-12 text-[#6B3FA0] group-hover:text-[#F7941D] transition-all duration-500 group-hover:scale-110"
                      strokeWidth={1.8}
                    />
                    {/* Step number */}
                    <span className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-[#F7941D] to-[#FF7A00] text-white text-sm font-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-[#1C2237] mb-3 group-hover:text-[#6B3FA0] transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
