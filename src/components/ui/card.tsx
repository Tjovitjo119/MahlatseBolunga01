import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <article className={cn("rounded-xl bg-surface p-6 shadow-soft", className)}>
      {children}
    </article>
  );
}
