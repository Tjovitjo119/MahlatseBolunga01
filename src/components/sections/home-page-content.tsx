import { HeroSection } from "./home/hero-section";
import { AboutSection } from "./home/about-section";
import { ServicesSection } from "./home/services-section";
import { IndustriesSection } from "./home/industries-section";
import { ProjectsSection } from "./home/projects-section";
import { ImpactSection } from "./home/impact-section";
import { AffiliationsSection } from "./home/affiliations-section";

export function HomePageContent() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <IndustriesSection />
            <ProjectsSection />
            <ImpactSection />
            <AffiliationsSection />
        </>
    );
}
