import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean;
  loading?: boolean;
  loadingText?: string;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = BaseProps &
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
  href?: undefined;
};

type ButtonAsLink = BaseProps &
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
  href: string;
  external?: boolean;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

// Variant styles
const variantStyles: Record<ButtonVariant, string> = {
  primary:
      "bg-[#F7941D] hover:bg-[#e5830a] text-white shadow-md hover:shadow-lg hover:scale-105",
  secondary:
      "border-2 border-white text-white hover:bg-white hover:text-[#1C2237]",
  ghost: "text-[#6B3FA0] hover:text-[#F7941D] hover:underline",
  dark:
      "bg-[#1C2237] hover:bg-[#6B3FA0] text-white shadow-md hover:shadow-lg hover:scale-105",
  outline:
      "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
};

// Size styles
const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs md:text-sm",
  md: "px-6 py-3 text-sm md:text-base",
  lg: "px-8 py-4 text-sm md:text-base",
};

// Base styles applied to all buttons
const baseStyles =
    "group inline-flex items-center justify-center gap-2 rounded-md font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100";

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    arrow = false,
    loading = false,
    loadingText,
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className,
  );

  const content = (
      <>
        {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>{loadingText ?? "Loading..."}</span>
            </>
        ) : (
            <>
              {children}
              {arrow && (
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
              )}
            </>
        )}
      </>
  );

  // Render as Link if href is provided
  if ("href" in props && props.href) {
    const { href, external, ...linkRest } = rest as Omit<ButtonAsLink, keyof BaseProps>;

    if (external) {
      return (
          <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={classes}
              {...linkRest}
          >
            {content}
          </a>
      );
    }

    return (
        <Link href={href} className={classes} {...linkRest}>
          {content}
        </Link>
    );
  }

  // Render as button
  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
      <button
          className={classes}
          disabled={loading || buttonRest.disabled}
          {...buttonRest}
      >
        {content}
      </button>
  );
}
