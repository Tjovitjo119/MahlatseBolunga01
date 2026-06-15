import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

type CtaButton = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type CtaBlockProps = {
  title?: string;
  description?: string;
  buttons?: CtaButton[];
  className?: string;
  withWrapper?: boolean;
};

const defaultButtons: CtaButton[] = [
  {
    label: "Request A Quote",
    href: "/contact?intent=quote",
    variant: "primary",
  },
  {
    label: "Contact Support",
    href: "/contact?intent=support",
    variant: "secondary",
  },
];

export function CtaBlock({
  title = "Ready to Accelerate Your Digital Transformation?",
  description = "Our consultants are ready to build the infrastructure your ambition requires. Let's engineer the future today.",
  buttons = defaultButtons,
  className,
  withWrapper = true,
}: CtaBlockProps) {
  const card = (
    <div className="rounded-2xl px-5 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20 text-center shadow-2xl bg-[linear-gradient(135deg,_#6B3FA0_0%,_#3B1F6B_50%,_#F7941D_100%)]">
      <h3 className="text-white font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-5 max-w-2xl mx-auto leading-tight">
        {title}
      </h3>
      <p className="text-sm sm:text-base md:text-lg text-white/95 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
        {buttons.map((btn) => (
          <Button
            key={btn.label}
            href={btn.href}
            variant={btn.variant ?? "primary"}
            size="lg"
            arrow
            className="w-full sm:w-auto"
          >
            {btn.label}
          </Button>
        ))}
      </div>
    </div>
  );

  if (!withWrapper) return card;

  return (
    <section className={className ?? "py-16"}>
      <Container>{card}</Container>
    </section>
  );
}
