import type { Metadata } from "next";
import { CtaBlock } from "@/components/sections/cta-block";
import { ProjectCard } from "@/components/sections/project-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredProjects } from "@/data/home";

export const metadata: Metadata = {
  title: "Projects",
  description: "Portfolio examples from Bolunga Systems delivery initiatives.",
};

export default function ProjectsPage() {
  return (
    <section className="py-section">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Projects"
          title="Implementation snapshots and delivery outcomes"
          description="A preview of the systems we have designed and delivered for growth-focused businesses."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              category={project.category}
            />
          ))}
        </div>
      </Container>
      <CtaBlock />
    </section>
  );
}
