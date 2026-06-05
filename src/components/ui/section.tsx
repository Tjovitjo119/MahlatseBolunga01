import type { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

type Background =
    | "white"
    | "ecosystem-gradient"
    | "industries-gray"
    | "purple-gradient"
    | "transparent";

type Spacing = "compact" | "default" | "spacious";

type ContainerWidth = "narrow" | "default" | "wide" | "full";

type SectionProps = {
    children: ReactNode;
    background?: Background;
    customBackground?: CSSProperties["background"] | CSSProperties["backgroundColor"];
    spacing?: Spacing;
    containerWidth?: ContainerWidth;
    id?: string;
    className?: string;
    containerClassName?: string;
};

// Pre-defined backgrounds (matches existing homepage sections)
const backgroundStyles: Record<Background, CSSProperties> = {
    white: { backgroundColor: "#ffffff" },
    "ecosystem-gradient": {
        background:
            "linear-gradient(135deg, #F5F0FF 0%, #EDE8F8 40%, #FAF0F0 100%)",
    },
    "industries-gray": { backgroundColor: "#d3d8dfff" },
    "purple-gradient": {
        background:
            "linear-gradient(135deg, #1C2237 0%, #3B1F6B 55%, #6B3FA0 100%)",
    },
    transparent: {},
};

// Spacing variants
const spacingStyles: Record<Spacing, string> = {
    compact: "py-12 md:py-16",
    default: "py-20 md:py-28",
    spacious: "py-24 md:py-32",
};

// Container width variants
const containerWidthStyles: Record<ContainerWidth, string> = {
    narrow: "max-w-5xl",
    default: "max-w-7xl",
    wide: "max-w-screen-2xl",
    full: "max-w-none",
};

export function Section({
                            children,
                            background = "white",
                            customBackground,
                            spacing = "default",
                            containerWidth = "default",
                            id,
                            className,
                            containerClassName,
                        }: SectionProps) {
    // Build the inline style
    // Priority: customBackground > pre-defined background
    const sectionStyle: CSSProperties = customBackground
        ? typeof customBackground === "string" && customBackground.includes("gradient")
            ? { background: customBackground }
            : { backgroundColor: customBackground as string }
        : backgroundStyles[background];

    return (
        <section
            id={id}
            className={cn(spacingStyles[spacing], className)}
            style={sectionStyle}
        >
            <div
                className={cn(
                    containerWidthStyles[containerWidth],
                    "mx-auto px-4 sm:px-6 lg:px-8",
                    containerClassName,
                )}
            >
                {children}
            </div>
        </section>
    );
}
