"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Briefcase,
    ShieldCheck,
    Radio,
    Recycle,
    Brain,
    MapPin,
    Database,
    Code2,
    ArrowRight,
    ShieldAlert,
    Building2,
} from "lucide-react";

import Robot from "../../../public/image/TabletRobot.png";

const heroStats = [
    { value: "8", label: "Core Service Lines" },
    { value: "12+", label: "Years Delivering" },
    { value: "24/7", label: "Client Support" },
];

const coreServices = [
    {
        title: "Technology Consulting",
        description: "Strategic roadmap development to align your tech stack with long-term business objectives.",
        icon: Briefcase,
        href: "/technology-consulting",
    },
    {
        title: "Cybersecurity Solutions",
        description: "Enterprise-grade protection frameworks including threat detection and response architectures.",
        icon: ShieldCheck,
        href: "/services",
    },
    {
        title: "Fiber & Telecommunications",
        description: "High-performance fiber infrastructure and unified communication services for high-demand environments.",
        icon: Radio,
        href: "/telecommunications-fibre",
    },
    {
        title: "E-waste Management",
        description: "Sustainable IT asset disposition and ethical recycling programs for modern corporate responsibility.",
        icon: Recycle,
        href: "/services",
    },
    {
        title: "AI Training & Consultation",
        description: "Empowering your workforce through hands-on AI literacy and deployment of custom LLM solutions.",
        icon: Brain,
        href: "/services",
    },
    {
        title: "Tracking Systems",
        description: "Real-time asset visibility and logistics management through advanced IoT sensor integration.",
        icon: MapPin,
        href: "/tracking-systems",
    },
    {
        title: "Database Services",
        description: "Scalable architecture, migration, and optimization for legacy and cloud-native databases.",
        icon: Database,
        href: "/services",
    },
    {
        title: "Web Development",
        description: "Custom scalable development utilizing high-performance frameworks and editorial UI design.",
        icon: Code2,
        href: "/web-development",
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* ========== HERO ENTRANCE ANIMATIONS ========== */}
            <style>{`
        @keyframes heroFadeUp {
          0%   { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeDown {
          0%   { opacity: 0; transform: translateY(-12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeRight {
          0%   { opacity: 0; transform: translateX(40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes heroScaleIn {
          0%   { opacity: 0; transform: scale(0.92); }
          100% { opacity: 1; transform: scale(1); }
        }

        .hero-anim-badge       { animation: heroFadeDown 0.7s ease-out 0.1s both; }
        .hero-anim-title-1     { animation: heroFadeUp   0.8s ease-out 0.25s both; }
        .hero-anim-title-2     { animation: heroFadeUp   0.8s ease-out 0.4s both; }
        .hero-anim-paragraph   { animation: heroFadeUp   0.8s ease-out 0.55s both; }
        .hero-anim-stat-1      { animation: heroFadeUp   0.7s ease-out 0.7s both; }
        .hero-anim-stat-2      { animation: heroFadeUp   0.7s ease-out 0.85s both; }
        .hero-anim-stat-3      { animation: heroFadeUp   0.7s ease-out 1s both; }
        .hero-anim-image       { animation: heroFadeRight 1s ease-out 0.3s both; }
        .hero-anim-image-mobile { animation: heroScaleIn  0.8s ease-out 0.5s both; }

        @media (prefers-reduced-motion: reduce) {
          .hero-anim-badge,
          .hero-anim-title-1,
          .hero-anim-title-2,
          .hero-anim-paragraph,
          .hero-anim-stat-1,
          .hero-anim-stat-2,
          .hero-anim-stat-3,
          .hero-anim-image,
          .hero-anim-image-mobile { animation: none; opacity: 1; transform: none; }
        }
      `}</style>

            {/* Hero Section */}
            <section className="relative flex min-h-[60vh] items-center overflow-visible bg-[linear-gradient(to_right,_#3D1A2E_0%,_#5B1A6B_40%,_#6B0AC9_100%)]">
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[#F7941D]/10 blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                        <div className="relative z-10">
                            <div className="hero-anim-badge inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#F7941D] animate-pulse" />
                                <span className="text-white/90 text-xs font-bold tracking-widest uppercase">
                  Our Professional Line
                </span>
                            </div>

                            <h1 className="font-black leading-[1.05] mb-6">
                <span className="hero-anim-title-1 block text-4xl sm:text-5xl lg:text-6xl text-[#F7941D]">
                  Engineered for
                </span>
                                <span className="hero-anim-title-2 block text-4xl sm:text-5xl lg:text-6xl text-white">
                  Momentum.
                </span>
                            </h1>

                            <p className="hero-anim-paragraph text-white/85 text-sm sm:text-base leading-relaxed max-w-md mb-8">
                                We don&#39;t just provide services; we architect the digital
                                future of your enterprise with engineered precision and kinetic
                                velocity.
                            </p>

                            {/* Trust stats bar */}
                            <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-md">
                                {heroStats.map((stat, i) => (
                                    <div
                                        key={stat.label}
                                        className={`border-l-2 border-[#F7941D]/70 pl-3 sm:pl-4 hero-anim-stat-${i + 1}`}
                                    >
                                        <p className="text-2xl sm:text-3xl font-black text-white leading-none">
                                            {stat.value}
                                        </p>
                                        <p className="text-[10px] sm:text-xs font-semibold text-white/70 uppercase tracking-wider mt-1.5">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Robot image — desktop */}
                        <div className="hero-anim-image pointer-events-none absolute bottom-[-120px] right-[5%] hidden h-[560px] w-[48%] lg:block z-20">
                            <Image
                                src={Robot}
                                alt="Professional services robot illustration"
                                fill
                                sizes="48vw"
                                className="object-contain object-bottom"
                                priority
                            />
                        </div>

                        {/* Robot image — mobile/tablet */}
                        <div className="hero-anim-image-mobile flex lg:hidden justify-center mt-8">
                            <div className="relative w-full max-w-xs sm:max-w-sm h-64 sm:h-80">
                                <Image
                                    src={Robot}
                                    alt="Professional services robot illustration"
                                    fill
                                    sizes="(max-width: 640px) 320px, 384px"
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Ecosystem Section */}
            <section className="bg-[#F5F0FF] pb-20 pt-32 sm:pt-44">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div className="mb-12 max-w-3xl">
                        <p className="text-xs font-extrabold uppercase tracking-widest text-[#6B3FA0] mb-3">
                            What We Offer
                        </p>
                        <h2 className="text-4xl md:text-5xl font-black text-[#1C2237] mb-4">
                            Core Ecosystem
                        </h2>
                        <div className="w-16 h-1 bg-[#F7941D] rounded-full mb-5" />
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            Specialized solutions designed to catalyze growth and secure
                            operational integrity across your entire digital landscape.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {coreServices.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <Link
                                    key={index}
                                    href={service.href}
                                    className="group relative bg-white hover:bg-gradient-to-br hover:from-[#6B3FA0] hover:to-[#8B5FC0] rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden block"
                                >
                                    <span className="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#F7941D] to-[#FF7A00] transition-all duration-500" />
                                    <span className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#F7941D]/0 group-hover:bg-white/10 blur-2xl transition-all duration-700" />

                                    <div className="relative z-10">
                                        <div className="mb-4 w-12 h-12 rounded-xl bg-[#F5F0FF] group-hover:bg-white/15 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                                            <Icon className="w-6 h-6 text-[#6B3FA0] group-hover:text-[#F7941D] transition-colors duration-300" strokeWidth={2} />
                                        </div>
                                        <h3 className="text-base font-bold text-slate-950 group-hover:text-white mb-2 transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-600 group-hover:text-white/90 text-sm leading-relaxed mb-4 transition-colors duration-300">
                                            {service.description}
                                        </p>
                                        <span className="inline-flex items-center gap-1.5 text-[#6B3FA0] group-hover:text-[#F7941D] font-bold text-sm transition-colors duration-300">
                      Learn More
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* The Methodology Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div className="text-center space-y-4 max-w-3xl mx-auto">
                        <p className="text-xs font-extrabold uppercase tracking-widest text-[#F7941D]">
                            How We Deliver
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950">
                            The Methodology
                        </h2>
                        <div className="w-16 h-1 bg-[#6B3FA0] rounded-full mx-auto" />
                        <p className="text-base sm:text-lg text-slate-600 pt-2">
                            Our four-stage process ensures every technical deployment is
                            rooted in business value.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 h-72 sm:h-80 lg:h-[400px] border-l-[6px] border-[#6B3FA0] hover:-translate-y-1">
                            <Image src="/image/Audit.jpg" alt="Audit methodology" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-[#6B3FA0]/30 mix-blend-multiply" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#3D1A2E]/95 via-[#6B3FA0]/40 to-transparent" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-[#6B3FA0]/65 transition-colors duration-500" />
                            <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                                <div>
                                    <span className="text-6xl font-black text-white drop-shadow-md mb-4 block">01</span>
                                    <h4 className="text-xl font-bold text-white mb-2">Audit</h4>
                                    <p className="text-white/90 text-sm leading-relaxed">Deep analysis of current infrastructure and pain points.</p>
                                </div>
                            </div>
                        </div>

                        <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 h-72 sm:h-80 lg:h-[400px] border-l-[6px] border-[#F7941D] hover:-translate-y-1">
                            <Image src="/image/IT Architect.jpg" alt="Architect methodology" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-[#F7941D]/20 mix-blend-multiply" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-[#F7941D]/40 to-transparent" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-[#F7941D]/65 transition-colors duration-500" />
                            <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                                <div>
                                    <span className="text-6xl font-black text-white drop-shadow-md mb-4 block">02</span>
                                    <h4 className="text-xl font-bold text-white mb-2">Architect</h4>
                                    <p className="text-white/90 text-sm leading-relaxed">Designing high momentum systems with zero friction.</p>
                                </div>
                            </div>
                        </div>

                        <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 h-72 sm:h-80 lg:h-[400px] border-l-[6px] border-[#8B3FFC] hover:-translate-y-1">
                            <Image src="/image/Deployment.jpg" alt="Deploy methodology" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-[#6B3FA0]/30 mix-blend-multiply" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E]/95 via-[#6B3FA0]/40 to-transparent" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-[#8B3FFC]/65 transition-colors duration-500" />
                            <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                                <div>
                                    <span className="text-6xl font-black text-white drop-shadow-md mb-4 block">03</span>
                                    <h4 className="text-xl font-bold text-white mb-2">Deploy</h4>
                                    <p className="text-white/90 text-sm leading-relaxed">Precision execution with minimal operational downtime.</p>
                                </div>
                            </div>
                        </div>

                        <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 h-72 sm:h-80 lg:h-[400px] border-l-[6px] border-[#F7941D] hover:-translate-y-1">
                            <Image src="/image/Optimize.jpg" alt="Optimize methodology" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-[#F7941D]/20 mix-blend-multiply" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-[#F7941D]/40 to-transparent" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-[#F7941D]/65 transition-colors duration-500" />
                            <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                                <div>
                                    <span className="text-6xl font-black text-white drop-shadow-md mb-4 block">04</span>
                                    <h4 className="text-xl font-bold text-white mb-2">Optimize</h4>
                                    <p className="text-white/90 text-sm leading-relaxed">Continuously refining systems for peak performance and cost efficiency.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Systems in Action Section */}
            <section className="bg-[#6B3FA0] py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#F7941D]/10 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-purple-300/10 blur-3xl pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <p className="text-xs font-extrabold uppercase tracking-widest text-[#F7941D] mb-3">
                            Proof of Impact
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
                            Systems in Action
                        </h2>
                        <div className="w-16 h-1 bg-[#F7941D] rounded-full mx-auto mb-5" />
                        <p className="text-base sm:text-lg text-white/85 font-medium">
                            Real-world impact across diverse industries, from
                            telecommunications giants to boutique tech startups.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="group rounded-2xl bg-[#8B3FFC] p-7 shadow-xl flex flex-col gap-4 relative mt-6 hover:-translate-y-1 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                            <span className="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-[#F7941D] transition-all duration-500" />
                            <div className="absolute -top-6 left-6 bg-[#6B3FA0] rounded-full p-3 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                                <ShieldAlert className="w-7 h-7 text-[#F7941D]" strokeWidth={2} />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-4">
                                Financial Sector Transformation
                            </h3>
                            <p className="text-white/90 text-sm sm:text-base font-medium leading-relaxed">
                                Implemented a multi-layered cybersecurity framework and tracking
                                system for a regional bank, reducing data vulnerability by 85%
                                while optimizing asset logistics.
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="bg-[#6B3FA0] text-white text-xs font-semibold rounded-full px-3 py-1">Cybersecurity</span>
                                <span className="bg-[#6B3FA0] text-white text-xs font-semibold rounded-full px-3 py-1">Tracking Systems</span>
                            </div>
                        </div>

                        <div className="group rounded-2xl bg-[#8B3FFC] p-7 shadow-xl flex flex-col gap-4 relative mt-6 hover:-translate-y-1 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                            <span className="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-[#F7941D] transition-all duration-500" />
                            <div className="absolute -top-6 left-6 bg-[#F7941D] rounded-full p-3 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                                <Building2 className="w-7 h-7 text-[#6B3FA0]" strokeWidth={2} />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-4">
                                Industrial Sustainable Scaling
                            </h3>
                            <p className="text-white/90 text-sm sm:text-base font-medium leading-relaxed">
                                Overhauled a manufacturing plant&#39;s E-waste lifecycle and
                                network backbone with fiber solutions, resulting in 40% lower
                                hardware waste and gigabit-speed operational monitoring.
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="bg-[#6B3FA0] text-white text-xs font-semibold rounded-full px-3 py-1">Fiber Tech</span>
                                <span className="bg-[#6B3FA0] text-white text-xs font-semibold rounded-full px-3 py-1">E-waste</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto rounded-3xl p-10 sm:p-12 lg:p-16 text-center relative overflow-hidden bg-[linear-gradient(135deg,_#3B1F6B_0%,_#6B3FA0_60%,_#F7941D_100%)] shadow-2xl">
                    <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />

                    <div className="relative z-10">
                        <p className="text-xs font-extrabold uppercase tracking-widest text-white/80 mb-3">
                            Start the Conversation
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                            Ready to Architect Your Future?
                        </h2>
                        <p className="text-white/85 text-sm sm:text-base mb-10 max-w-xl mx-auto leading-relaxed">
                            Get in touch with our specialist team for a comprehensive audit of
                            your current service needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto px-8 py-3.5 bg-[#F7941D] hover:bg-orange-600 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center">
                                Get A Consultation
                            </Link>
                            <Link href="/about" className="w-full sm:w-auto px-8 py-3.5 border-2 border-white/60 hover:border-white text-white font-bold rounded-lg transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5 text-center">
                                View Our Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
