"use client";

import {
  Award,
  Globe,
  Trophy,
  Heart,
  CheckCircle2,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { whyChooseUsItems } from "@/data/home";

const iconMap: Record<string, LucideIcon> = {
  Award,
  Globe,
  Trophy,
  Heart,
  CheckCircle2,
  Shield,
};

export function WhyChooseUsSection() {
  return (
    <Section background="white" id="why-choose-us">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="The Bolunga Advantage"
        description="Six powerful reasons why leading organisations across Africa trust us to deliver their most critical technology initiatives."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7">
        {whyChooseUsItems.map((item, i) => {
          const Icon = iconMap[item.iconName];
          return (
            <div
              key={i}
              className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-default"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6B3FA0]/0 via-[#6B3FA0]/0 to-[#F7941D]/0 group-hover:from-[#6B3FA0]/5 group-hover:via-transparent group-hover:to-[#F7941D]/10 transition-all duration-500" />

              {/* Top accent bar */}
              <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#6B3FA0] to-[#F7941D] transition-all duration-700" />

              {/* Decorative corner circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#F7941D]/0 group-hover:bg-[#F7941D]/10 transition-all duration-700 group-hover:scale-150" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6B3FA0]/10 to-[#F7941D]/10 group-hover:from-[#6B3FA0] group-hover:to-[#F7941D] flex items-center justify-center mb-5 transition-all duration-500 group-hover:rotate-[360deg] group-hover:shadow-lg group-hover:shadow-[#6B3FA0]/30">
                  <Icon
                    className="w-7 h-7 text-[#6B3FA0] group-hover:text-white transition-colors duration-300"
                    strokeWidth={2}
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#1C2237] mb-3 leading-tight group-hover:text-[#6B3FA0] transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
