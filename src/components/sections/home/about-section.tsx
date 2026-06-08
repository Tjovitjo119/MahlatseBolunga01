"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Eye, Heart, Award } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { companyPillars } from "@/data/home";

const pillarIcons = [Eye, Heart, Award];

export function AboutSection() {
    const [hasStarted, setHasStarted] = useState(false);
    const [years, setYears] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    // Trigger animations when section scrolls into view
    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasStarted) {
                        setHasStarted(true);
                    }
                });
            },
            { threshold: 0.25 }
        );

        observer.observe(node);

        return () => {
            observer.unobserve(node);
        };
    }, [hasStarted]);

    // Count up 12+ years
    useEffect(() => {
        if (!hasStarted) return;

        const target = 12;
        const duration = 1800;
        let startTime: number | null = null;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setYears(Math.floor(eased * target));

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                setYears(target);
            }
        };

        requestAnimationFrame(step);
    }, [hasStarted]);

    return (
        <Section background="white" id="about-bolunga">
            <style>{`
                @keyframes aboutFloat {
                    0%   { transform: translateY(0)     rotate(0deg); }
                    50%  { transform: translateY(-14px) rotate(1.5deg); }
                    100% { transform: translateY(0)     rotate(0deg); }
                }
                @keyframes aboutBadgeFloat {
                    0%   { transform: translateY(0); }
                    50%  { transform: translateY(-8px); }
                    100% { transform: translateY(0); }
                }
                @keyframes aboutGlowPulse {
                    0%, 100% { opacity: 0.4; transform: scale(1);    }
                    50%      { opacity: 0.7; transform: scale(1.05); }
                }
                @keyframes aboutSpinSlow {
                    from { transform: rotate(0deg);   }
                    to   { transform: rotate(360deg); }
                }
                @keyframes aboutFadeInUp {
                    0%   { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0);    }
                }
                .about-float       { animation: aboutFloat 6s ease-in-out infinite; }
                .about-badge-float { animation: aboutBadgeFloat 4s ease-in-out infinite; }
                .about-glow        { animation: aboutGlowPulse 4s ease-in-out infinite; }
                .about-spin-slow   { animation: aboutSpinSlow 20s linear infinite; }
                .about-fade-up     { animation: aboutFadeInUp 0.7s ease-out both; }
                @media (prefers-reduced-motion: reduce) {
                    .about-float,
                    .about-badge-float,
                    .about-glow,
                    .about-spin-slow,
                    .about-fade-up { animation: none; }
                }
            `}</style>

            <div ref={sectionRef} className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* LEFT — Image with badge */}
                <div className="relative flex justify-center lg:justify-start">
                    <div className="relative w-full max-w-md">

                        {/* Decorative glowing ring behind image */}
                        <div className="absolute inset-0 -m-4 rounded-full bg-gradient-to-tr from-[#6B3FA0]/30 via-[#F7941D]/20 to-transparent blur-2xl about-glow" />

                        {/* Decorative slow-spinning dotted ring */}
                        <div className="absolute -inset-3 about-spin-slow pointer-events-none hidden sm:block">
                            <div className="w-full h-full rounded-2xl border-2 border-dashed border-[#6B3FA0]/30" />
                        </div>

                        {/* Floating image container */}
                        <div className="relative about-float">
                            <div className="relative w-full h-[400px] sm:h-[460px] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/image/Cybersecurity.png"
                                    alt="Bolunga Systems - Top Empowered Company"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 450px"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#1C2237]/40 via-transparent to-transparent" />
                            </div>
                        </div>

                        {/* Floating badge with counting number */}
                        <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white rounded-2xl shadow-2xl px-6 py-5 border-l-4 border-[#F7941D] about-badge-float">
                            <p className="text-4xl sm:text-5xl font-black text-[#6B3FA0] leading-none">
                                {years}+
                            </p>
                            <p className="text-xs sm:text-sm font-bold text-[#1C2237] uppercase tracking-wider mt-1">
                                Years
                            </p>
                            <p className="text-xs text-gray-500">Experience</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT — Content */}
                <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-[#F7941D] mb-3">
                        Who We Are
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1C2237] leading-tight mb-5">
                        Technology & People{" "}
                        <span className="text-[#6B3FA0]">Services Company</span>
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-4">
                        The journey of Bolunga Systems started in{" "}
                        <strong className="text-[#1C2237]">2012</strong> as a
                        Telecommunications company with a Digital Radio installation team.
                        Today, we are a fully fledged ICT company offering Outsourcing,
                        Consulting, People Solutions and Health Promotion.
                    </p>
                    <p className="text-sm md:text-base text-slate-500 italic mb-8">
                        &ldquo;Bolunga&rdquo; is an Nguni word meaning{" "}
                        <strong>&ldquo;Goodness will prevail&rdquo;</strong> — our promise
                        to every client and stakeholder.
                    </p>

                    {/* 3 Pillars — premium animated cards */}
                    <div className="space-y-4 mb-8">
                        {companyPillars.map((pillar, i) => {
                            const Icon = pillarIcons[i];
                            return (
                                <div
                                    key={pillar.num}
                                    className={`relative flex items-start gap-4 group p-4 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                                        hasStarted ? "about-fade-up" : "opacity-0"
                                    }`}
                                    style={{ animationDelay: `${0.3 + i * 0.15}s` }}
                                >
                                    {/* Gradient slide-in background on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#F0F3FC] via-[#F0F3FC] to-[#E8EBF8] -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />

                                    {/* Left accent bar on hover */}
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-3/4 bg-gradient-to-b from-[#F7941D] to-[#6B3FA0] rounded-full transition-all duration-500" />

                                    <div className="relative shrink-0 w-12 h-12 rounded-xl bg-[#6B3FA0]/10 group-hover:bg-gradient-to-br group-hover:from-[#6B3FA0] group-hover:to-[#8B5FC0] flex items-center justify-center transition-all duration-500 group-hover:rotate-[360deg] group-hover:shadow-lg group-hover:shadow-[#6B3FA0]/40">
                                        <Icon
                                            className="w-6 h-6 text-[#6B3FA0] group-hover:text-white transition-colors duration-300"
                                            strokeWidth={2}
                                        />
                                    </div>
                                    <div className="relative flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-black text-[#F7941D]">
                                                {pillar.num}
                                            </span>
                                            <h3 className="text-base sm:text-lg font-bold text-[#1C2237] group-hover:text-[#6B3FA0] transition-colors duration-300">
                                                {pillar.title}
                                            </h3>
                                        </div>
                                        <p className="text-sm text-slate-500 leading-relaxed">
                                            {pillar.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <Button href="/about" variant="primary" size="md" arrow>
                        Learn More About Us
                    </Button>
                </div>
            </div>
        </Section>
    );
}
