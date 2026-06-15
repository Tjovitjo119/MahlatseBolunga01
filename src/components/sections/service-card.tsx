import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type HoverColor = "orange" | "purple";

type ServiceCardProps = {
  title: string;
  description: string;
  ctaText: string;
  ctaHref?: string;
  icon?: LucideIcon;
  hoverColor?: HoverColor;
  ctaColor?: HoverColor;
};

const hoverBgStyles: Record<HoverColor, string> = {
  orange: "hover:bg-gradient-to-br hover:from-[#F7941D] hover:to-[#FF7A00]",
  purple: "hover:bg-gradient-to-br hover:from-[#6B3FA0] hover:to-[#8B5FC0]",
};

const accentBarStyles: Record<HoverColor, string> = {
  orange: "bg-gradient-to-r from-[#F7941D] to-[#FF7A00]",
  purple: "bg-gradient-to-r from-[#6B3FA0] to-[#8B5FC0]",
};

const ctaColorStyles: Record<HoverColor, string> = {
  orange: "text-[#F7941D]",
  purple: "text-[#6B3FA0]",
};

const iconBgStyles: Record<HoverColor, string> = {
  orange: "bg-[#F7941D]/10 text-[#F7941D]",
  purple: "bg-[#6B3FA0]/10 text-[#6B3FA0]",
};

const glowStyles: Record<HoverColor, string> = {
  orange: "hover:shadow-[0_20px_50px_-10px_rgba(247,148,29,0.5)]",
  purple: "hover:shadow-[0_20px_50px_-10px_rgba(107,63,160,0.5)]",
};

export function ServiceCard({
  title,
  description,
  ctaText,
  ctaHref = "/services",
  icon: Icon,
  hoverColor = "purple",
  ctaColor = "purple",
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative bg-white rounded-2xl p-6 sm:p-8 shadow-md flex flex-col justify-between min-h-[280px] transition-all duration-500 hover:-translate-y-2 overflow-hidden",
        hoverBgStyles[hoverColor],
        glowStyles[hoverColor],
      )}
    >
      {/* Top accent bar — slides in from left on hover */}
      <div
        className={cn(
          "absolute top-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700",
          accentBarStyles[ctaColor],
        )}
      />

      {/* Decorative corner circle */}
      <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-700 group-hover:scale-150" />

      <div className="relative z-10">
        {Icon && (
          <div
            className={cn(
              "w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-white/20 group-hover:text-white group-hover:rotate-[360deg] group-hover:scale-110",
              iconBgStyles[ctaColor],
            )}
          >
            <Icon className="w-7 h-7" strokeWidth={2} />
          </div>
        )}
        <h3 className="text-xl font-bold text-[#1C2237] group-hover:text-white mb-3 leading-tight transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm md:text-base text-gray-500 group-hover:text-white/90 leading-relaxed transition-colors duration-300">
          {description}
        </p>
      </div>

      <Link
        href={ctaHref}
        className={cn(
          "relative z-10 mt-6 text-sm font-bold group-hover:text-white inline-flex items-center gap-2 transition-all duration-300",
          ctaColorStyles[ctaColor],
        )}
      >
        <span className="relative">
          {ctaText}
          {/* Underline grows on hover */}
          <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-white transition-all duration-500" />
        </span>
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
}
