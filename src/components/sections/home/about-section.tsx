import Image from "next/image";
import { Eye, Heart, Award } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { companyPillars } from "@/data/home";

const pillarIcons = [Eye, Heart, Award];

export function AboutSection() {
    return (
        <Section background="white" id="about-bolunga">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* LEFT — Image with badge */}
                <div className="relative flex justify-center lg:justify-start">
                    <div className="relative w-full max-w-md">
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

                        {/* Floating badge */}
                        <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white rounded-2xl shadow-2xl px-6 py-5 border-l-4 border-[#F7941D]">
                            <p className="text-4xl sm:text-5xl font-black text-[#6B3FA0] leading-none">
                                12+
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

                    {/* 3 Pillars */}
                    <div className="space-y-4 mb-8">
                        {companyPillars.map((pillar, i) => {
                            const Icon = pillarIcons[i];
                            return (
                                <div
                                    key={pillar.num}
                                    className="flex items-start gap-4 group p-4 rounded-xl transition-all duration-300 hover:bg-[#F0F3FC] cursor-pointer"
                                >
                                    <div className="shrink-0 w-12 h-12 rounded-xl bg-[#6B3FA0]/10 group-hover:bg-[#6B3FA0] flex items-center justify-center transition-all duration-300">
                                        <Icon
                                            className="w-6 h-6 text-[#6B3FA0] group-hover:text-white transition-colors duration-300"
                                            strokeWidth={2}
                                        />
                                    </div>
                                    <div className="flex-1">
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