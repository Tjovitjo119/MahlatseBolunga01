import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type Align = "left" | "center";
type Theme = "dark" | "light";
type Size = "md" | "lg" | "xl";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  accentWord?: string;
  description?: ReactNode;
  align?: Align;
  theme?: Theme;
  size?: Size;
  uppercase?: boolean;
  className?: string;
};

const alignStyles: Record<Align, string> = {
  left: "text-left mx-0",
  center: "text-center mx-auto",
};

const titleColorStyles: Record<Theme, string> = {
  dark: "text-[#1C2237]",
  light: "text-white",
};

const descriptionColorStyles: Record<Theme, string> = {
  dark: "text-gray-500",
  light: "text-white/80",
};

const eyebrowColorStyles: Record<Theme, string> = {
  dark: "text-[#6B3FA0]",
  light: "text-[#F7941D]",
};

const titleSizeStyles: Record<Size, string> = {
  md: "text-3xl md:text-4xl",
  lg: "text-4xl md:text-5xl lg:text-6xl",
  xl: "text-5xl md:text-6xl lg:text-7xl",
};

export function SectionHeading({
  eyebrow,
  title,
  accentWord,
  description,
  align = "center",
  theme = "dark",
  size = "lg",
  uppercase = false,
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "max-w-3xl space-y-3 md:space-y-4 mb-12 md:mb-16",
        alignStyles[align],
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-sm font-semibold uppercase tracking-wider",
            eyebrowColorStyles[theme],
          )}
        >
          {eyebrow}
        </p>
      ) : null}

      <h2
        className={cn(
          "font-black leading-tight tracking-tight",
          titleSizeStyles[size],
          titleColorStyles[theme],
          uppercase && "uppercase tracking-widest",
        )}
      >
        {title}
        {accentWord ? (
          <>
            <br />
            <span className="text-[#F7941D]">{accentWord}</span>
          </>
        ) : null}
      </h2>

      {description ? (
        <p
          className={cn(
            "text-base md:text-lg leading-relaxed max-w-2xl",
            align === "center" && "mx-auto",
            descriptionColorStyles[theme],
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
