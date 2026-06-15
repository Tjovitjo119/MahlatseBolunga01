import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Technology Consulting | Bolunga Systems",
    description:
        "Technology consulting and strategic roadmap services from Bolunga Systems.",
};

const heroStats = [
    { value: "12+", label: "Years Advisory" },
    { value: "100+", label: "Clients Served" },
    { value: "24/7", label: "Support" },
];

export default function TechnologyConsultingPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative flex min-h-[64vh] items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/image/people-working-office.jpg"
                        alt="People working in office"
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
                  Elite Partnership
                </span>
                            </div>

                            <h1 className="mb-6 font-black leading-[1.05]">
                <span className="block text-4xl sm:text-5xl lg:text-6xl text-[#F7941D]">
                  Technology
                </span>
                                <span className="block text-4xl sm:text-5xl lg:text-6xl text-white">
                  Consultants
                </span>
                            </h1>

                            <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-md mb-8">
                                Since the founding of the firm, every consultant at Bolunga has
                                been striving to provide consulting services that make us a
                                &ldquo;Real Partner&rdquo; for our clients.
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

            {/* Our Scope of Work Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative mb-8">
                        <h2 className="text-3xl font-black text-[#1C2237]">
                            Our Scope of Work
                        </h2>
                        <div className="absolute left-1/2 -translate-x-1/2 text-sm font-bold text-[#F7941D]">
                            8 KEY SECTORS
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                        {[
                            {
                                label: "Telecommunication",
                                icon: (
                                    <svg className="w-6 h-6 text-[#6B3FA0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 20c4.418 0 8-3.582 8-8M4 12c0 4.418 3.582 8 8 8" />
                                        <circle cx="12" cy="12" r="2" strokeWidth="1.5" />
                                    </svg>
                                ),
                            },
                            {
                                label: "Transportation",
                                icon: (
                                    <svg className="w-6 h-6 text-[#6B3FA0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 13l2-5h13l2 5v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5z" />
                                    </svg>
                                ),
                            },
                            {
                                label: "Real Estate",
                                icon: (
                                    <svg className="w-6 h-6 text-[#6B3FA0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 11l9-7 9 7v8a1 1 0 0 1-1 1h-4v-6H8v6H4a1 1 0 0 1-1-1v-8z" />
                                    </svg>
                                ),
                            },
                            {
                                label: "Medical",
                                icon: (
                                    <svg className="w-6 h-6 text-[#6B3FA0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 7v10M7 12h10" />
                                    </svg>
                                ),
                            },
                            {
                                label: "Private",
                                icon: (
                                    <svg className="w-6 h-6 text-[#6B3FA0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3zM6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                                    </svg>
                                ),
                            },
                            {
                                label: "Public",
                                icon: (
                                    <svg className="w-6 h-6 text-[#6B3FA0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 2l7 5v6c0 5-3 9-7 9s-7-4-7-9V7l7-5z" />
                                    </svg>
                                ),
                            },
                            {
                                label: "Education",
                                icon: (
                                    <svg className="w-6 h-6 text-[#6B3FA0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 2l8 4-8 4-8-4 8-4zM4 10v6a8 8 0 0 0 16 0v-6" />
                                    </svg>
                                ),
                            },
                            {
                                label: "Retail",
                                icon: (
                                    <svg className="w-6 h-6 text-[#6B3FA0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M6 7v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" />
                                    </svg>
                                ),
                            },
                        ].map((s) => (
                            <div
                                key={s.label}
                                className="bg-[#F1F6FB] rounded-xl p-4 text-center flex flex-col items-center gap-3"
                            >
                                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-md shadow-sm">
                                    {s.icon}
                                </div>
                                <div className="text-sm font-semibold text-[#1C2237]">
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-[#6B3FA0] rounded-3xl overflow-hidden">
                        <div className="grid md:grid-cols-2">
                            <div className="p-10 md:p-16 text-white">
                                <h3 className="text-3xl font-black mb-6">Things to Consider</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-[#F7941D] flex items-center justify-center text-sm font-bold">
                                            ✓
                                        </div>
                                        <div>
                                            <div className="font-semibold">Business Consulting</div>
                                            <div className="text-sm">
                                                Identifying gaps and defining the kinetic trajectory of
                                                your organization&#39;s digital evolution.
                                            </div>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-[#F7941D] flex items-center justify-center text-sm font-bold">
                                            ✓
                                        </div>
                                        <div>
                                            <div className="font-semibold">
                                                Enterprise Applications
                                            </div>
                                            <div className="text-sm">
                                                Deploying robust software backbones that scale with your
                                                global ambitions.
                                            </div>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-[#F7941D] flex items-center justify-center text-sm font-bold">
                                            ✓
                                        </div>
                                        <div>
                                            <div className="font-semibold">Outsourced Management</div>
                                            <div className="text-sm">
                                                Leveraging our experts to manage your IT overhead while
                                                you focus on core innovations.
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative">
                                <Image
                                    src="/image/T1.jpg"
                                    alt="T1"
                                    className="w-full h-full object-cover rounded-tr-3xl rounded-br-3xl"
                                    width={900}
                                    height={600}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Life Cycle Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-black text-center text-[#1C2237] mb-10">
                        The Life Cycle
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                        <div className="relative bg-[#E6F1FB] rounded-2xl p-8 overflow-hidden">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded-sm bg-[#6B3FA0] flex items-center justify-center" />
                                <h4 className="text-lg font-bold text-[#6B3FA0]">
                                    Before Commencement
                                </h4>
                            </div>

                            <div className="relative pl-8">
                                <div className="absolute left--2 top-6 bottom-6 w-px bg-[#C7D6F0]" aria-hidden />
                                <ul className="space-y-8">
                                    <li className="relative pl-6">
                                        <span className="absolute left-0 top-2.5 w-3 h-3 rounded-full bg-[#6B3FA0] -translate-x-1/2" />
                                        <div className="font-semibold text-[#1C2237]">Investigate</div>
                                        <div className="text-sm text-slate-700">
                                            Thorough audit of existing infrastructure and technical debt.
                                        </div>
                                    </li>
                                    <li className="relative pl-6">
                                        <span className="absolute left-0 top-2.5 w-3 h-3 rounded-full bg-[#6B3FA0] -translate-x-1/2" />
                                        <div className="font-semibold text-[#1C2237]">Assemble</div>
                                        <div className="text-sm text-slate-700">
                                            Coordinating specialized talent across diverse technical domains.
                                        </div>
                                    </li>
                                    <li className="relative pl-6">
                                        <span className="absolute left-0 top-2.5 w-3 h-3 rounded-full bg-[#6B3FA0] -translate-x-1/2" />
                                        <div className="font-semibold text-[#1C2237]">Implement</div>
                                        <div className="text-sm text-slate-700">
                                            Iterative development cycles using Agile methodologies.
                                        </div>
                                    </li>
                                    <li className="relative pl-6">
                                        <span className="absolute left-0 top-2.5 w-3 h-3 rounded-full bg-[#6B3FA0] -translate-x-1/2" />
                                        <div className="font-semibold text-[#1C2237]">Train</div>
                                        <div className="text-sm text-slate-700">
                                            Upskilling internal teams for platform ownership and autonomy.
                                        </div>
                                    </li>
                                    <li className="relative pl-6">
                                        <span className="absolute left-0 top-2.5 w-3 h-3 rounded-full bg-[#6B3FA0] -translate-x-1/2" />
                                        <div className="font-semibold text-[#1C2237]">Launch</div>
                                        <div className="text-sm text-slate-700">
                                            Managed rollout with zero-downtime cutover strategies.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="relative bg-[#EFEFEF] rounded-2xl p-8 overflow-hidden">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded-sm bg-[#7A4B00] flex items-center justify-center" />
                                <h4 className="text-lg font-bold text-[#7A4B00]">After Project</h4>
                            </div>

                            <div className="relative pl-8">
                                <div className="absolute left--2 top-6 bottom-6 w-px bg-[#E5D8C9]" />
                                <ul className="space-y-8">
                                    <li className="relative pl-6">
                                        <span className="absolute left-0 top-2.5 w-3 h-3 rounded-full bg-[#7A4B00] -translate-x-1/2" />
                                        <div className="font-semibold text-[#1C2237]">Control</div>
                                        <div className="text-sm text-slate-700">
                                            Continuous monitoring and automated performance optimization.
                                        </div>
                                    </li>
                                    <li className="relative pl-6">
                                        <span className="absolute left-0 top-2.5 w-3 h-3 rounded-full bg-[#7A4B00] -translate-x-1/2" />
                                        <div className="font-semibold text-[#1C2237]">Phases</div>
                                        <div className="text-sm text-slate-700">
                                            Scheduled upgrades and roadmap alignment for future growth.
                                        </div>
                                    </li>
                                    <li className="relative pl-6">
                                        <span className="absolute left-0 top-2.5 w-3 h-3 rounded-full bg-[#7A4B00] -translate-x-1/2" />
                                        <div className="font-semibold text-[#1C2237]">Communication</div>
                                        <div className="text-sm text-slate-700">
                                            Regular strategic reviews and KPI reporting with stakeholders.
                                        </div>
                                    </li>
                                    <li className="relative pl-6">
                                        <span className="absolute left-0 top-2.5 w-3 h-3 rounded-full bg-[#7A4B00] -translate-x-1/2" />
                                        <div className="font-semibold text-[#1C2237]">Transition</div>
                                        <div className="text-sm text-slate-700">
                                            Full handover of documentation and administrative controls.
                                        </div>
                                    </li>
                                    <li className="relative pl-6">
                                        <span className="absolute left-0 top-2.5 w-3 h-3 rounded-full bg-[#7A4B00] -translate-x-1/2" />
                                        <div className="font-semibold text-[#1C2237]">Support</div>
                                        <div className="text-sm text-slate-700">
                                            Dedicated 24/7 post-launch maintenance and helpdesk services.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#E6F1FB] rounded-3xl p-12 text-center">
                        <h3 className="text-2xl font-black mb-4">
                            Looking for a suitable partner?
                        </h3>
                        <p className="text-sm text-slate-700 max-w-2xl mx-auto mb-6">
                            Our consultants are ready to architect your next digital
                            milestone. Reach out to discuss your complex integration needs
                            today.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <a
                                href="tel:+278444448181"
                                className="px-5 py-2 rounded-full bg-[#6B3FA0] text-white font-semibold"
                            >
                                +27 84 444 8181
                            </a>
                            <button className="px-5 py-2 rounded-full bg-white text-[#6B3FA0] font-semibold border border-[#6B3FA0]">
                                Request Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
