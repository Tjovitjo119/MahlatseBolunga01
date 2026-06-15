import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Web Development | Bolunga Systems",
    description:
        "Custom web development, platform engineering, performance optimisation, and scalable digital product delivery by Bolunga Systems.",
};

const heroStats = [
    { value: "100%", label: "Responsive" },
    { value: "SEO", label: "Ready" },
    { value: "Launch", label: "Support" },
];

const capabilities = [
    {
        title: "Corporate Websites",
        description:
            "Professional marketing websites built for speed, trust, conversion, and long-term maintainability.",
        icon: (
            <svg className="h-6 w-6 text-[#6B3FA0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4 5h16v14H4V5zM4 9h16" />
            </svg>
        ),
    },
    {
        title: "Web Applications",
        description:
            "Secure, scalable web platforms tailored around business workflows, dashboards, portals, and internal systems.",
        icon: (
            <svg className="h-6 w-6 text-[#6B3FA0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" />
            </svg>
        ),
    },
    {
        title: "CMS & Content Workflows",
        description:
            "Content structures that make publishing easier while protecting layout quality and brand consistency.",
        icon: (
            <svg className="h-6 w-6 text-[#6B3FA0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M6 4h9l3 3v13H6V4zM14 4v4h4M9 12h6M9 16h6" />
            </svg>
        ),
    },
    {
        title: "Performance & SEO Foundations",
        description:
            "Clean builds with strong technical SEO, metadata, responsive behaviour, and optimised asset loading.",
        icon: (
            <svg className="h-6 w-6 text-[#6B3FA0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 19a7 7 0 1 0-7-7M12 19l4-4M12 19l-4-4M12 9v4l3 2" />
            </svg>
        ),
    },
];

const processSteps = [
    {
        number: "01",
        title: "Discover",
        description:
            "We define the business goal, audience needs, content requirements, and success metrics before development starts.",
    },
    {
        number: "02",
        title: "Design",
        description:
            "Layouts, components, page hierarchy, and content flow are structured for clarity and professional presentation.",
    },
    {
        number: "03",
        title: "Develop",
        description:
            "We build responsive, maintainable front-end experiences using scalable patterns and clean implementation.",
    },
    {
        number: "04",
        title: "Optimise",
        description:
            "The final pass focuses on speed, accessibility, SEO basics, browser testing, and launch readiness.",
    },
];

const qualityItems = [
    "Responsive layouts for mobile, tablet, laptop, and desktop",
    "Reusable components for consistent future page delivery",
    "Clear metadata, semantic structure, and search-friendly page foundations",
    "Image optimisation and safe asset handling",
    "QA checks for links, CTAs, spacing, overflow, and visual consistency",
    "Handover-ready structure for future maintenance",
];

export default function WebDevelopmentPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative flex min-h-[64vh] items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/image/html-programming-advanced-technology-web-concept.jpg"
                        alt="Web development code and digital interface"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                </div>

                <div className="absolute inset-0 z-10 pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#160817_0%,rgba(61,26,46,0.92)_32%,rgba(91,26,107,0.78)_62%,rgba(107,10,201,0.62)_100%)]" />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-[#F7941D]/10 blur-3xl" />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                        <div className="max-w-2xl">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#F7941D] animate-pulse" />
                                <span className="text-xs font-bold uppercase tracking-widest text-white/90">
                  Custom Platform Engineering
                </span>
                            </div>

                            <h1 className="mb-6 font-black leading-[1.05]">
                <span className="block text-4xl sm:text-5xl lg:text-6xl text-[#F7941D]">
                  Web Development
                </span>
                                <span className="block text-4xl sm:text-5xl lg:text-6xl text-white">
                  Built for Growth
                </span>
                            </h1>

                            <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-md mb-8">
                                Bolunga Systems builds fast, secure, and scalable websites and
                                web platforms that help organisations present professionally,
                                convert clearly, and operate with confidence.
                            </p>

                            {/* Trust stats bar */}
                            <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-md">
                                {heroStats.map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="border-l-2 border-[#F7941D]/70 pl-3 sm:pl-4"
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
                    </div>
                </div>
            </section>

            {/* Capabilities Section */}
            <section className="bg-[#F4F7FB] py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 max-w-3xl">
                        <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-[#F7941D]">
                            What We Build
                        </p>
                        <h2 className="text-4xl font-black leading-tight text-[#1C2237] md:text-5xl">
                            Digital platforms that look professional and work properly.
                        </h2>
                        <p className="mt-5 text-base leading-relaxed text-slate-600">
                            From marketing websites to operational web applications, our
                            development approach focuses on reliability, usability, and
                            long-term maintainability.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {capabilities.map((item) => (
                            <div
                                key={item.title}
                                className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E6F1FB] transition group-hover:bg-[#F7941D]/15">
                                    {item.icon}
                                </div>
                                <h3 className="mb-3 text-lg font-black text-[#1C2237]">
                                    {item.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-slate-600">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Development Approach Section */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                        <div>
                            <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-[#6B3FA0]">
                                Our Development Approach
                            </p>
                            <h2 className="text-4xl font-black leading-tight text-[#1C2237] md:text-5xl">
                                Structured delivery from idea to launch.
                            </h2>
                            <p className="mt-5 text-base leading-relaxed text-slate-600">
                                We do not treat websites as once-off visuals only. We structure
                                pages, components, content, metadata, and QA checks so the final
                                product is easier to maintain and safer to improve.
                            </p>

                            <div className="mt-8 rounded-3xl bg-[#1E2B39] p-8 text-white">
                                <h3 className="mb-3 text-2xl font-black">
                                    Built with professional standards
                                </h3>
                                <p className="text-sm leading-relaxed text-white/80">
                                    Every build should support clear navigation, strong page
                                    hierarchy, fast loading, accessible content, and a clean path
                                    to conversion.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-5">
                            {processSteps.map((step) => (
                                <div
                                    key={step.number}
                                    className="flex gap-5 rounded-2xl bg-[#F4F7FB] p-6 shadow-sm"
                                >
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#6B3FA0] text-xl font-black text-white">
                                        {step.number}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-black text-[#1C2237]">
                                            {step.title}
                                        </h3>
                                        <p className="mt-1 text-sm leading-relaxed text-slate-600">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Assurance Section */}
            <section className="bg-[#F1F6FB] py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_rgba(15,23,42,0.10)]">
                        <div className="grid lg:grid-cols-2">
                            <div className="p-8 sm:p-10 lg:p-14">
                                <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-[#F7941D]">
                                    Quality Checklist
                                </p>
                                <h2 className="text-3xl font-black leading-tight text-[#1C2237] md:text-4xl">
                                    We polish for performance, clarity, and consistency.
                                </h2>
                                <p className="mt-5 text-sm leading-relaxed text-slate-600">
                                    A professional web build is not only about a beautiful hero
                                    section. The page must hold together across devices, routes,
                                    CTAs, content blocks, and future updates.
                                </p>

                                <ul className="mt-8 space-y-4">
                                    {qualityItems.map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F7941D] text-sm font-black text-white">
                        ✓
                      </span>
                                            <span className="text-sm font-semibold leading-relaxed text-[#1C2237]">
                        {item}
                      </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="relative min-h-[320px] lg:min-h-full">
                                <Image
                                    src="/image/html-programming-advanced-technology-web-concept.jpg"
                                    alt="Professional web development workspace"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-[linear-gradient(to_top,#3D1A2E_0%,rgba(107,63,160,0.45)_55%,rgba(247,148,29,0.15)_100%)]" />
                                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-5 shadow-xl backdrop-blur">
                                    <p className="text-xs font-extrabold uppercase tracking-widest text-[#6B3FA0]">
                                        Launch Ready
                                    </p>
                                    <p className="mt-2 text-lg font-black text-[#1C2237]">
                                        From design polish to production confidence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies / Deliverables Section */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-[#6B3FA0]">
                            Delivery Areas
                        </p>
                        <h2 className="text-4xl font-black text-[#1C2237] md:text-5xl">
                            Web solutions for modern organisations.
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="rounded-3xl bg-[#E6F1FB] p-8">
                            <h3 className="mb-3 text-2xl font-black text-[#1C2237]">
                                Front-End Development
                            </h3>
                            <p className="text-sm leading-relaxed text-slate-600">
                                Responsive interfaces, reusable sections, strong visual
                                hierarchy, and consistent component behaviour across pages.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-[#E9D7F7] p-8">
                            <h3 className="mb-3 text-2xl font-black text-[#1C2237]">
                                Website Modernisation
                            </h3>
                            <p className="text-sm leading-relaxed text-slate-600">
                                Improving outdated websites with better layouts, clearer
                                content, stronger CTAs, and safer technical foundations.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-[#FFF2E1] p-8">
                            <h3 className="mb-3 text-2xl font-black text-[#1C2237]">
                                Support &amp; Maintenance
                            </h3>
                            <p className="text-sm leading-relaxed text-slate-600">
                                Ongoing fixes, content support, plugin review, QA checks,
                                backup awareness, and controlled release discipline.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#A35DF5] py-20">
                <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
                    <p className="mb-4 text-sm font-extrabold uppercase tracking-widest text-white/80">
                        Ready for a stronger digital presence?
                    </p>

                    <h2 className="max-w-4xl text-4xl font-black leading-[1.05] text-white md:text-6xl">
                        Let&apos;s build a website that looks professional and performs.
                    </h2>

                    <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-white/90 md:text-lg">
                        Whether you need a refined company website, a scalable platform, or
                        a full rebuild, Bolunga Systems can help turn your digital presence
                        into a reliable business asset.
                    </p>

                    <div className="mt-12 flex w-full flex-col gap-5 sm:w-auto sm:flex-row">
                        <Link
                            href="/contact"
                            className="rounded-lg bg-[#F7941D] px-8 py-4 text-base font-extrabold text-[#1C2237] transition hover:-translate-y-0.5 hover:opacity-95 md:text-lg"
                        >
                            Schedule a Consultation
                        </Link>

                        <Link
                            href="/services"
                            className="rounded-lg bg-[#1F2937] px-8 py-4 text-base font-extrabold text-white transition hover:-translate-y-0.5 hover:opacity-95 md:text-lg"
                        >
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}