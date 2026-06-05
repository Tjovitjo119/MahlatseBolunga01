import Link from "next/link";
import type { LucideIcon } from "lucide-react";
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

// Hover background color mapping
const hoverBgStyles: Record<HoverColor, string> = {
    orange: "hover:bg-[#F7941D]",
    purple: "hover:bg-[#6B3FA0]",
};

// CTA text color mapping (when not hovered)
const ctaColorStyles: Record<HoverColor, string> = {
    orange: "text-[#F7941D]",
    purple: "text-[#6B3FA0]",
};

// Icon background color mapping (when not hovered)
const iconBgStyles: Record<HoverColor, string> = {
    orange: "bg-[#F7941D]/10 text-[#F7941D]",
    purple: "bg-[#6B3FA0]/10 text-[#6B3FA0]",
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
                "group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl flex flex-col justify-between min-h-[280px] transition-all duration-300 hover:-translate-y-1",
                hoverBgStyles[hoverColor],
            )}
        >
            <div>
                {Icon && (
                    <div
                        className={cn(
                            "w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-white/20 group-hover:text-white",
                            iconBgStyles[ctaColor],
                        )}
                    >
                        <Icon className="w-7 h-7" strokeWidth={2} />
                    </div>
                )}
                <h3 className="text-xl font-bold text-[#1C2237] group-hover:text-white mb-4 leading-tight transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-sm md:text-base text-gray-500 group-hover:text-white/90 leading-relaxed transition-colors duration-300">
                    {description}
                </p>
            </div>
            <Link
                href={ctaHref}
                className={cn(
                    "mt-6 text-sm font-bold group-hover:text-white inline-flex items-center gap-2 transition-all duration-300",
                    ctaColorStyles[ctaColor],
                )}
            >
                {ctaText}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                </span>
            </Link>
        </div>
    );
}
