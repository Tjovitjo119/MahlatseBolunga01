import { HeroSection } from "./home/hero-section";
import { AboutSection } from "./home/about-section";
import { ServicesSection } from "./home/services-section";
import { WhyChooseUsSection } from "./home/why-choose-us-section";
import { ProcessSection } from "./home/process-section";
import { IndustriesSection } from "./home/industries-section";
import { ProjectsSection } from "./home/projects-section";
import { ImpactSection } from "./home/impact-section";
import { TestimonialsSection } from "./home/testimonials-section";
import { AffiliationsSection } from "./home/affiliations-section";

export function HomePageContent() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <IndustriesSection />
      <ProjectsSection />
      <ImpactSection />
      <TestimonialsSection />
      <AffiliationsSection />
    </>
  );
}
