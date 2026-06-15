import Image from "next/image";

import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaBlock } from "../cta-block";

export function AffiliationsSection() {
  return (
    <Section background="white" id="affiliations">
      <SectionHeading
        title="Professional Affiliations"
        description="Bolunga Systems is proudly affiliated with following local & internationally reputed companies & organizations"
        size="md"
        uppercase
      />

      <div className="flex justify-center mb-16 md:mb-20">
        <div className="relative w-full max-w-5xl aspect-[3/1] sm:aspect-[5/1] min-h-[100px] max-h-[192px]">
          <Image
            src="/image/Affiliations.jpg"
            alt="Professional Affiliations - Samsung, Dell, HP, Intel"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 896px"
            className="object-contain"
          />
        </div>
      </div>

      <CtaBlock withWrapper={false} />
    </Section>
  );
}
