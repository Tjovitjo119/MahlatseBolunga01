import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredProjects } from "@/data/home";
import { ProjectCard } from "../project-card";

export function ProjectsSection() {
  return (
    <Section background="white" id="featured-projects">
      <SectionHeading
        title="Featured Projects"
        description="Real engagements, measurable outcomes. A snapshot of how Bolunga delivers across the African technology landscape."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
        {featuredProjects.map((project, i) => (
          <ProjectCard
            key={i}
            image={project.image}
            category={project.category}
            title={project.title}
            description={project.description}
            slug={project.slug}
          />
        ))}
      </div>

      <div className="text-center">
        <Button href="/projects" variant="dark" size="lg" arrow>
          View All Projects
        </Button>
      </div>
    </Section>
  );
}
