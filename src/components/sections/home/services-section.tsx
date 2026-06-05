import {
    Briefcase,
    ShieldCheck,
    Radio,
    Brain,
    Database,
    Recycle,
    type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeServices } from "@/data/home";
import { ServiceCard } from "../service-card";

const iconMap: Record<string, LucideIcon> = {
    Briefcase,
    ShieldCheck,
    Radio,
    Brain,
    Database,
    Recycle,
};

export function ServicesSection() {
    return (
        <Section background="ecosystem-gradient" id="core-ecosystem">
            <SectionHeading
                title="Core Ecosystem"
                description="Six integrated service lines engineered to deliver high-end digital reliability across every layer of your business."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
                {homeServices.map((service, i) => (
                    <ServiceCard
                        key={i}
                        title={service.title}
                        description={service.description}
                        ctaText={service.ctaText}
                        ctaHref={service.ctaHref}
                        icon={iconMap[service.iconName]}
                        hoverColor={service.hoverColor}
                        ctaColor={service.ctaColor}
                    />
                ))}
            </div>

            <div className="text-center">
                <Button href="/services" variant="dark" size="lg" arrow>
                    View All Services
                </Button>
            </div>
        </Section>
    );
}
