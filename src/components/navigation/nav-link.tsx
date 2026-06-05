"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export function NavLink({
                          href,
                          label,
                          onClick,
                        }: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
      <Link
          href={href}
          onClick={onClick}
          className={cn(
              "group relative text-sm font-semibold transition-all duration-300 pb-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm",
              isActive ? "text-[#F7941D]" : "text-white hover:text-[#F7941D]",
          )}
      >
        {label}
        {/* Animated underline - shows on hover and active */}
        <span
            className={cn(
                "absolute bottom-0 left-0 h-0.5 bg-[#F7941D] transition-all duration-300",
                isActive ? "w-full" : "w-0 group-hover:w-full",
            )}
        />
      </Link>
  );
}
