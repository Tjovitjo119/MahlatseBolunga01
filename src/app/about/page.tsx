"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Search,
    ClipboardList,
    Lightbulb,
    Wrench,
    BarChart2,
    RefreshCw,
} from "lucide-react";
import TeamSlider from "./TeamSlider";

const consultingProcess = [
    {
        Icon: Search,
        title: "Discovery & Assessment",
        description:
            "We begin by deeply understanding your current infrastructure, pain points, and strategic objectives.",
    },
    {
        Icon: ClipboardList,
        title: "Strategy & Planning",
        description:
            "Our experts craft a tailored roadmap aligned with your business goals and technical requirements.",
    },
    {
        Icon: Lightbulb,
        title: "Solution Design",
        description:
            "We architect bespoke solutions that balance innovation with reliability and long-term scalability.",
    },
    {
        Icon: Wrench,
        title: "Implementation",
        description:
            "Precision-driven deployment with minimal disruption, following industry best practices throughout.",
    },
    {
        Icon: BarChart2,
        title: "Monitoring & Optimisation",
        description:
            "Continuous performance tracking and fine-tuning to ensure your systems operate at peak efficiency.",
    },
    {
        Icon: RefreshCw,
        title: "Ongoing Support",
        description:
            "Dedicated post-deployment support and iterative improvements to keep you ahead of the curve.",
    },
];

const teamMembers = [
    { name: "Siphokazi Simandla", role: "Managing Director", image: "/image/SP.png" },
    { name: "Itumeleng Mabea", role: "Human Resource Manager", image: "/image/IP.png" },
    { name: "Rotshidzwa Chester Mavhungu", role: "Fullstack Developer", image: "/image/ChesterPP.png" },
    { name: "Kwathi Mashao", role: "E-Waste Coordinator/Administrator", image: "/image/KP.png" },
    { name: "Mbali Maseko", role: "PricedWell Administrator", image: "/image/MM.png" },
    { name: "Masabata Masilo", role: "Office Administrator/Project Manager", image: "/image/MPP.png" },
    { name: "Duduzile Cokoto", role: "Business Consultation Manager", image: "/image/DPP.png" },
    { name: "Daniel Madileng", role: "Head of Occupational Health and Safety/Field Agent Manager", image: "/image/DanielM.png" },
    { name: "Aphiwe", role: "Cybersecurity Specialist", image: "/image/Aphiwe.jpeg" },
];

const heroStats = [
    { value: "12+", label: "Years Experience" },
    { value: "100%", label: "Client Focused" },
    { value: "24/7", label: "Support Promise" },
];

export default function AboutPage() {
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
        @keyframes heroFadeIn {
          0%   { opacity: 0; }
          100% { opacity: 1; }
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
        .hero-anim-card        { animation: heroScaleIn  0.7s ease-out 1.15s both; }

        @media (prefers-reduced-motion: reduce) {
          .hero-anim-badge,
          .hero-anim-title-1,
          .hero-anim-title-2,
          .hero-anim-paragraph,
          .hero-anim-stat-1,
          .hero-anim-stat-2,
          .hero-anim-stat-3,
          .hero-anim-image,
          .hero-anim-card { animation: none; opacity: 1; transform: none; }
        }
      `}</style>

            <main>
                {/* Hero */}
                <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[linear-gradient(to_right,_#3D1A2E_0%,_#5B1A6B_40%,_#6B0AC9_100%)]">
                    <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-[#F7941D]/10 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-purple-500/15 blur-3xl pointer-events-none" />

                    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        {/* Text content */}
                        <div className="lg:w-[55%] w-full">
                            <div className="hero-anim-badge inline-flex items-center gap-2 border border-white/40 bg-white/5 backdrop-blur-sm rounded-md px-4 py-1.5 mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#F7941D] animate-pulse" />
                                <span className="text-white text-xs font-bold tracking-widest uppercase">
                  Digital Architects
                </span>
                            </div>

                            <h1 className="font-black leading-[1.05] mb-6">
                <span className="hero-anim-title-1 block text-4xl sm:text-5xl lg:text-7xl text-white">
                  Pioneering
                </span>
                                <span className="hero-anim-title-2 block text-4xl sm:text-5xl lg:text-7xl text-[#F7941D]">
                  Evolution.
                </span>
                            </h1>

                            <p className="hero-anim-paragraph text-white/85 text-sm sm:text-base leading-relaxed max-w-lg mb-8">
                                Bolunga Systems isn&#39;t just an ICT provider; we are the
                                kinetic energy behind digital transformation, engineering
                                reliability into the core of your telecommunications
                                infrastructure.
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

                        {/* Robot image — mobile/tablet: inline below text */}
                        <div className="hero-anim-image flex lg:hidden justify-center mt-8">
                            <div className="relative w-full max-w-xs sm:max-w-sm h-64 sm:h-80">
                                <Image
                                    src="/image/ChatGPT Image May 11, 2026, 02_34_24 AM.png"
                                    alt="Bolunga Systems Digital Innovation"
                                    fill
                                    sizes="(max-width: 640px) 320px, 384px"
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Footprint card — desktop only */}
                        <div className="hero-anim-card hidden lg:block absolute bottom-8 left-[45%] z-10 bg-[#D4E4F7] rounded-xl px-6 py-4 shadow-xl w-max border border-white/40">
                            <p className="text-[#6B3FA0] text-xs font-semibold uppercase tracking-widest mb-1">
                                Our Footprint
                            </p>
                            <p className="text-[#1C2237] font-bold text-base leading-snug">
                                Leading the ICT &amp; Telecom Revolution
                            </p>
                        </div>

                        {/* Robot image — desktop only */}
                        <div className="hero-anim-image hidden lg:block absolute bottom-0 right-0 w-[40%] h-full pointer-events-none">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/image/ChatGPT Image May 11, 2026, 02_34_24 AM.png"
                                    alt="Bolunga Systems Digital Innovation"
                                    fill
                                    className="object-contain object-bottom"
                                    sizes="(max-width: 768px) 100vw, 384px"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bolunga Narrative */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-12">
                            <p className="text-xs font-extrabold uppercase tracking-widest text-[#F7941D] mb-3">
                                Our Story
                            </p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1C2237] mb-4">
                                The Bolunga Narrative
                            </h2>
                            <div className="w-16 h-1 bg-[#F7941D] rounded-full" />
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="flex justify-center lg:justify-start">
                                <div className="relative w-full max-w-md aspect-square group">
                                    <div className="absolute -inset-3 bg-gradient-to-br from-[#6B3FA0]/15 to-[#F7941D]/15 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                                    <div className="absolute -inset-2 border-2 border-dashed border-[#6B3FA0]/20 rounded-2xl" />
                                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                                        <Image
                                            src="/image/BlackRobot.png"
                                            alt="Bolunga Systems Team Member"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 448px"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                    Founded on the principle of technical precision, Bolunga
                                    Systems has emerged as a high-end digital architect in the
                                    South African ICT landscape. We bridge the gap between
                                    traditional reliability and future-ready innovation.
                                </p>
                                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                    Our journey is defined by a relentless pursuit of excellence
                                    in cybersecurity, telecommunications, and sustainable E-waste
                                    management. We don&#39;t just solve problems; we engineer
                                    systems that catalyze growth.
                                </p>

                                <div className="relative mt-8 pl-6 border-l-4 border-[#F7941D] bg-gradient-to-r from-[#F7941D]/5 to-transparent py-4 pr-4 rounded-r-lg">
                                    <p className="text-[#1C2237] text-sm sm:text-base font-semibold italic leading-relaxed">
                                        &ldquo;Goodness will prevail.&rdquo; — our guiding promise
                                        to every client, partner, and stakeholder we serve.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Consulting Process */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-12 max-w-3xl">
                            <p className="text-xs font-extrabold uppercase tracking-widest text-[#6B3FA0] mb-3">
                                How We Work
                            </p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1C2237] mb-4">
                                Our Consulting Process
                            </h2>
                            <div className="w-16 h-1 bg-[#6B3FA0] rounded-full mb-5" />
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                Our consultancy services are becoming more important and thought
                                provoking everyday. From Bolunga&#39;s viewpoint of management,
                                our process can be defined or explained in such a way that it
                                would help our clients reach their desired goals.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {consultingProcess.map((step, i) => (
                                <div
                                    key={i}
                                    className="group relative bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                                >
                                    <span className="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#6B3FA0] to-[#F7941D] transition-all duration-500" />

                                    <div className="flex items-center justify-between mb-5">
                                        <div className="w-12 h-12 bg-[#F5F0FF] rounded-xl flex items-center justify-center group-hover:bg-[#6B3FA0] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shrink-0">
                                            <step.Icon className="w-5 h-5 text-[#6B3FA0] group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <span className="text-4xl font-black text-gray-100 group-hover:text-[#F7941D]/20 leading-none transition-colors duration-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                                    </div>
                                    <h3 className="font-bold text-[#1C2237] text-base sm:text-lg mb-2 group-hover:text-[#6B3FA0] transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mission / Vision / DNA */}
                <section className="py-20 bg-[#EEF2F7]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid sm:grid-cols-2 gap-6 mb-24">
                            <div className="group bg-white hover:bg-[#F7941D] rounded-2xl p-8 shadow-sm hover:shadow-2xl border border-gray-100 hover:-translate-y-1 transition-all duration-500">
                                <div className="w-12 h-12 mb-5 rounded-xl bg-[#F7941D]/10 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-300">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
                                        <path
                                            d="M12 2C12 2 7 6 7 12C7 15.31 8.69 18.22 11.27 19.94L12 20.5L12.73 19.94C15.31 18.22 17 15.31 17 12C17 6 12 2 12 2Z"
                                            className="fill-[#F7941D] group-hover:fill-white transition-colors duration-300"
                                        />
                                        <circle cx="12" cy="12" r="2" className="fill-white group-hover:fill-[#F7941D] transition-colors duration-300" />
                                        <path d="M8 20L6 22M16 20L18 22" className="stroke-[#F7941D] group-hover:stroke-white transition-colors duration-300" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <p className="text-xs font-extrabold uppercase tracking-widest text-[#F7941D] group-hover:text-white/80 mb-2 transition-colors duration-300">
                                    Where We&apos;re Going
                                </p>
                                <h3 className="font-black text-[#1C2237] group-hover:text-white text-xl sm:text-2xl mb-4 transition-colors duration-300">
                                    Our Vision
                                </h3>
                                <p className="text-gray-600 group-hover:text-white text-sm sm:text-base leading-relaxed italic transition-colors duration-300">
                                    &#39;To be Africa&#39;s most trusted enterprise technology
                                    partner — recognised for delivery excellence, innovation, and
                                    lasting client relationships across every market we
                                    serve.&#39;
                                </p>
                            </div>

                            <div className="group bg-white hover:bg-[#6B3FA0] rounded-2xl p-8 shadow-sm hover:shadow-2xl border border-gray-100 hover:-translate-y-1 transition-all duration-500">
                                <div className="w-12 h-12 mb-5 rounded-xl bg-[#6B3FA0]/10 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-300">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
                                        <path
                                            d="M12 5C7 5 2.73 8.11 1 12.5C2.73 16.89 7 20 12 20C17 20 21.27 16.89 23 12.5C21.27 8.11 17 5 12 5Z"
                                            className="fill-[#6B3FA0] group-hover:fill-white transition-colors duration-300"
                                        />
                                        <circle cx="12" cy="12.5" r="3.5" className="fill-white group-hover:fill-[#6B3FA0] transition-colors duration-300" />
                                        <circle cx="12" cy="12.5" r="1.5" className="fill-[#6B3FA0] group-hover:fill-white transition-colors duration-300" />
                                    </svg>
                                </div>
                                <p className="text-xs font-extrabold uppercase tracking-widest text-[#6B3FA0] group-hover:text-white/80 mb-2 transition-colors duration-300">
                                    Why We&apos;re Here
                                </p>
                                <h3 className="font-black text-[#1C2237] group-hover:text-white text-xl sm:text-2xl mb-4 transition-colors duration-300">
                                    Our Mission
                                </h3>
                                <p className="text-gray-600 group-hover:text-white text-sm sm:text-base leading-relaxed italic transition-colors duration-300">
                                    &#39;To deliver reliable, secure, and scalable ICT and
                                    telecommunications solutions that empower South African
                                    enterprises to grow, compete, and lead in their respective
                                    industries.&#39;
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-start justify-center pointer-events-none z-0 -top-12">
                                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-widest select-none text-[rgba(176,198,220,0.55)] whitespace-nowrap">
                                    OUR DNA
                                </h2>
                            </div>

                            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-5 pt-16 z-10">
                                <div className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className="w-10 h-10 mb-4 rounded-xl bg-[#6B3FA0]/10 group-hover:bg-[#6B3FA0]/20 flex items-center justify-center transition-colors duration-300">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                                            <path d="M12 2L3 7V12C3 16.55 7.08 20.74 12 22C16.92 20.74 21 16.55 21 12V7L12 2Z" fill="#6B3FA0" />
                                            <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold text-[#1C2237] text-base mb-2">Integrity</h4>
                                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                                        Upholding the highest moral and professional standards in
                                        every interaction.
                                    </p>
                                </div>

                                <div className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className="w-10 h-10 mb-4 rounded-xl bg-[#F7941D]/10 group-hover:bg-[#F7941D]/20 flex items-center justify-center transition-colors duration-300">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                                            <path d="M13 2L4.09 12.26C3.75 12.67 4.04 13.27 4.57 13.27H11L10.5 21.5L19.91 11.24C20.25 10.83 19.96 10.23 19.43 10.23H13L13 2Z" fill="#F7941D" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold text-[#1C2237] text-base mb-2">Determination</h4>
                                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                                        The grit to solve complex technical challenges where others
                                        see dead ends.
                                    </p>
                                </div>

                                <div className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className="w-10 h-10 mb-4 rounded-xl bg-[#6B3FA0]/10 group-hover:bg-[#6B3FA0]/20 flex items-center justify-center transition-colors duration-300">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                                            <path d="M12 2L14.85 8.5L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L9.15 8.5L12 2Z" fill="#6B3FA0" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold text-[#1C2237] text-base mb-2">Service Excellence</h4>
                                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                                        Exceeding expectations through technical mastery and
                                        proactive support.
                                    </p>
                                </div>

                                <div className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className="w-10 h-10 mb-4 rounded-xl bg-[#F7941D]/10 group-hover:bg-[#F7941D]/20 flex items-center justify-center transition-colors duration-300">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                                            <path d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3ZM5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill="#F7941D" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold text-[#1C2237] text-base mb-2">Continuous Learning</h4>
                                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                                        Staying at the kinetic edge of the ever-evolving technology
                                        landscape.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20 bg-gradient-to-b from-[#B0BEC5] to-[#9AAAB4]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <p className="text-xs font-extrabold uppercase tracking-widest text-[#1C2237]/70 mb-3">
                            Meet the Team
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1C2237] mb-3">
                            The Digital Architects
                        </h2>
                        <div className="w-16 h-1 bg-[#F7941D] rounded-full mx-auto mb-5" />
                        <p className="text-gray-700 mb-12 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                            Our team brings together decades of collective experience in
                            telecommunications, cybersecurity, and enterprise infrastructure.
                        </p>
                        <TeamSlider members={teamMembers} />
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 px-4">
                    <div className="max-w-5xl mx-auto rounded-3xl p-10 sm:p-12 lg:p-16 text-center relative overflow-hidden bg-[linear-gradient(135deg,_#3B1F6B_0%,_#6B3FA0_60%,_#F7941D_100%)] shadow-2xl">
                        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />

                        <div className="relative z-10">
                            <p className="text-xs font-extrabold uppercase tracking-widest text-white/80 mb-3">
                                Let&apos;s Build Together
                            </p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                                Ready to Engineer Your Future?
                            </h2>
                            <p className="text-white/85 text-sm sm:text-base mb-10 max-w-xl mx-auto leading-relaxed">
                                Join the ranks of leading enterprises who have chosen Bolunga
                                Systems as their architectural partner for ICT excellence.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="bg-[#F7941D] hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                >
                                    Get A Consultation
                                </Link>
                                <Link
                                    href="/services"
                                    className="border-2 border-white/60 hover:border-white text-white font-bold px-8 py-3.5 rounded-lg transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5"
                                >
                                    View Our Portfolio
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
