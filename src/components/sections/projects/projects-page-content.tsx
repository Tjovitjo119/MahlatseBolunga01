"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Globe,
  Users,
  Award,
  Filter,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { CtaBlock } from "@/components/sections/cta-block";
import { ProjectCard } from "@/components/sections/project-card";
import { Container } from "@/components/ui/container";
import { allProjects, projectCategories } from "@/data/home";

export function ProjectsPageContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return allProjects;
    return allProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Featured project — always the first one
  const featuredProject = allProjects[0];
  const otherProjects = filteredProjects.filter(
    (p) => activeCategory !== "All" || p.slug !== featuredProject.slug,
  );

  return (
    <>
      <style>{`
                @keyframes floatOrb {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33%      { transform: translate(30px, -20px) scale(1.1); }
                    66%      { transform: translate(-20px, 20px) scale(0.95); }
                }
                @keyframes fadeUpIn {
                    0%   { opacity: 0; transform: translateY(30px); }
                    100% { opacity: 1; transform: translateY(0);    }
                }
                @keyframes shimmerPulse {
                    0%, 100% { opacity: 0.4; }
                    50%      { opacity: 0.8; }
                }
                .proj-orb-1 { animation: floatOrb 14s ease-in-out infinite; }
                .proj-orb-2 { animation: floatOrb 18s ease-in-out infinite reverse; }
                .proj-orb-3 { animation: floatOrb 16s ease-in-out infinite; }
                .proj-fade-up { animation: fadeUpIn 0.8s ease-out both; }
                .proj-shimmer { animation: shimmerPulse 4s ease-in-out infinite; }
                @media (prefers-reduced-motion: reduce) {
                    .proj-orb-1, .proj-orb-2, .proj-orb-3,
                    .proj-fade-up, .proj-shimmer { animation: none; }
                }
            `}</style>

      {/* ============ HERO BANNER ============ */}
      <section className="relative w-full overflow-hidden bg-[linear-gradient(135deg,_#3D1A2E_0%,_#5B1A6B_50%,_#6B0AC9_100%)] py-20 sm:py-24 md:py-32 lg:py-40">
        {/* Decorative floating orbs */}
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#F7941D]/25 blur-3xl proj-orb-1 pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[28rem] h-[28rem] rounded-full bg-[#6B0AC9]/40 blur-3xl proj-orb-2 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-[#8B5FC0]/20 blur-3xl proj-orb-3 pointer-events-none" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating decorative dots */}
        <div className="absolute top-32 right-20 w-3 h-3 rounded-full bg-[#F7941D] proj-shimmer hidden sm:block" />
        <div
          className="absolute bottom-28 left-32 w-2 h-2 rounded-full bg-white/70 proj-shimmer hidden sm:block"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-40 w-4 h-4 rounded-full bg-[#F7941D]/60 proj-shimmer hidden md:block"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/3 left-20 w-2 h-2 rounded-full bg-white/60 proj-shimmer hidden md:block"
          style={{ animationDelay: "3s" }}
        />

        <Container>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="proj-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 text-[#F7941D]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white">
                Our Portfolio
              </span>
            </div>

            {/* Title */}
            <h1
              className="proj-fade-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.05] mb-6 drop-shadow-2xl"
              style={{ animationDelay: "0.1s" }}
            >
              Real Projects.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7941D] to-[#FFB668]">
                Real Impact.
              </span>
            </h1>

            {/* Description */}
            <p
              className="proj-fade-up text-base sm:text-lg md:text-xl lg:text-2xl text-white/85 leading-relaxed max-w-3xl mx-auto"
              style={{ animationDelay: "0.25s" }}
            >
              A curated showcase of enterprise systems we have designed,
              deployed, and supported for growth-focused businesses across
              Africa.
            </p>
          </div>
        </Container>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
      </section>

      {/* ============ STATS BAR — Premium Cards ============ */}
      <section className="relative bg-white -mt-12 sm:-mt-16 md:-mt-20 pb-16 sm:pb-20 z-10">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {[
              {
                icon: Briefcase,
                value: "2,600+",
                label: "Projects Completed",
                color: "from-[#6B3FA0] to-[#8B5FC0]",
              },
              {
                icon: Globe,
                value: "9",
                label: "Countries Served",
                color: "from-[#F7941D] to-[#FF7A00]",
              },
              {
                icon: Users,
                value: "845+",
                label: "Happy Clients",
                color: "from-[#6B3FA0] to-[#8B5FC0]",
              },
              {
                icon: Award,
                value: "12+",
                label: "Years Experience",
                color: "from-[#F7941D] to-[#FF7A00]",
              },
            ].map(({ icon: Icon, value, label, color }, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-2xl p-5 sm:p-6 md:p-7 border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-default overflow-hidden"
              >
                {/* Top gradient bar */}
                <div
                  className={`absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${color} transition-all duration-700`}
                />

                {/* Decorative corner gradient */}
                <div
                  className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-all duration-700 group-hover:scale-150`}
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`inline-flex w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${color} items-center justify-center mb-4 shadow-md group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}
                  >
                    <Icon
                      className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                      strokeWidth={2}
                    />
                  </div>

                  {/* Value */}
                  <p className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1C2237] leading-none mb-2">
                    {value}
                  </p>

                  {/* Label */}
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ FEATURED PROJECT — Big Hero Card ============ */}
      {activeCategory === "All" && (
        <section className="bg-gradient-to-b from-white to-slate-50 py-12 sm:py-16">
          <Container>
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#F7941D]/50 max-w-[100px]" />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#F7941D] flex items-center gap-2">
                <Sparkles size={14} />
                Featured Case Study
              </p>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#F7941D]/50 max-w-[100px]" />
            </div>

            <Link
              href={`/projects#${featuredProject.slug}`}
              className="group relative grid lg:grid-cols-5 gap-6 lg:gap-10 bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-[#F7941D]/30"
            >
              {/* Image side */}
              <div className="lg:col-span-3 relative h-64 sm:h-80 md:h-96 lg:h-[480px] overflow-hidden">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Featured badge */}
                <div className="absolute top-5 left-5 flex items-center gap-2 bg-gradient-to-r from-[#F7941D] to-[#FF7A00] text-white text-xs font-black px-4 py-2 rounded-full shadow-xl uppercase tracking-wider">
                  <Sparkles size={14} />
                  Featured
                </div>

                {/* Category badge */}
                <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-sm text-[#6B3FA0] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  {featuredProject.category}
                </div>
              </div>

              {/* Content side */}
              <div className="lg:col-span-2 flex flex-col justify-center p-6 sm:p-8 md:p-10 relative">
                {/* Decorative corner orb */}
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-gradient-to-br from-[#6B3FA0]/5 to-[#F7941D]/5 -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />

                <div className="relative">
                  {/* Client + Year */}
                  <div className="flex items-center gap-3 mb-4">
                    {featuredProject.client && (
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        {featuredProject.client}
                      </span>
                    )}
                    {featuredProject.year && (
                      <>
                        <span className="text-slate-300">•</span>
                        <span className="text-xs font-bold text-[#6B3FA0] uppercase tracking-wider">
                          {featuredProject.year}
                        </span>
                      </>
                    )}
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1C2237] mb-4 leading-tight group-hover:text-[#6B3FA0] transition-colors duration-300">
                    {featuredProject.title}
                  </h2>

                  <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed mb-6">
                    {featuredProject.description}
                  </p>

                  {/* CTA */}
                  <div className="inline-flex items-center gap-3 text-[#6B3FA0] group-hover:text-[#F7941D] font-bold transition-all duration-300">
                    <span className="text-base">Read Full Case Study</span>
                    <ArrowUpRight
                      size={20}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </Container>
        </section>
      )}

      {/* ============ FILTERS + PROJECTS GRID ============ */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-50">
        <Container>
          {/* Section heading */}
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#F7941D] mb-3">
              Browse Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1C2237] leading-tight">
              Explore Our Work
            </h2>
          </div>

          {/* Filter bar */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 md:p-6 shadow-md border border-slate-100 mb-10 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-2 shrink-0">
                <Filter className="w-5 h-5 text-[#6B3FA0]" strokeWidth={2.5} />
                <span className="text-sm font-bold text-[#1C2237] uppercase tracking-wider">
                  Filter:
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {projectCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 ${
                      activeCategory === cat
                        ? "bg-gradient-to-r from-[#F7941D] to-[#FF7A00] text-white shadow-lg shadow-[#F7941D]/40 scale-105"
                        : "bg-slate-100 text-slate-600 hover:text-[#6B3FA0] hover:bg-white border border-transparent hover:border-[#F7941D]/40 hover:shadow-md"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects count */}
          <div className="flex items-center justify-between mb-6 sm:mb-8 px-1">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-bold text-[#6B3FA0]">
                {otherProjects.length}
              </span>{" "}
              {otherProjects.length === 1 ? "project" : "projects"}
              {activeCategory !== "All" && (
                <>
                  {" in "}
                  <span className="font-bold text-[#6B3FA0]">
                    {activeCategory}
                  </span>
                </>
              )}
            </p>

            {activeCategory !== "All" && (
              <button
                onClick={() => setActiveCategory("All")}
                className="text-xs sm:text-sm font-bold text-[#F7941D] hover:text-[#FF7A00] inline-flex items-center gap-1.5 transition-colors"
              >
                Clear filter
                <ArrowRight size={14} />
              </button>
            )}
          </div>

          {/* Grid */}
          {otherProjects.length > 0 ? (
            <div className="grid gap-6 md:gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  title={project.title}
                  category={project.category}
                  image={project.image}
                  description={project.description}
                  slug={project.slug}
                  client={project.client}
                  year={project.year}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-100">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
                <Filter className="w-8 h-8 text-slate-400" />
              </div>
              <p className="text-lg text-slate-600 font-semibold mb-2">
                No projects found
              </p>
              <p className="text-sm text-slate-500 mb-6">
                We couldn&apos;t find projects in this category. Try another
                filter.
              </p>
              <button
                onClick={() => setActiveCategory("All")}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F7941D] to-[#FF7A00] text-white font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-lg"
              >
                View all projects
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </Container>
      </section>

      {/* CTA */}
      <CtaBlock />
    </>
  );
}
