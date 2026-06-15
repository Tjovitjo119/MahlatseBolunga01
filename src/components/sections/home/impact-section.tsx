import { Section } from "@/components/ui/section";
import { impactStats } from "@/data/home";
import { StatCard } from "../stat-card";

export function ImpactSection() {
  return (
    <Section background="purple-gradient" id="impact">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-3 md:mb-4">
          Our Impact
        </h2>
        <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
          Over 12 years of delivering enterprise-grade technology solutions
          across Africa and beyond.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {impactStats.map((item, i) => (
          <StatCard
            key={i}
            stat={item.stat}
            label={item.label}
            description={item.description}
          />
        ))}
      </div>
    </Section>
  );
}
