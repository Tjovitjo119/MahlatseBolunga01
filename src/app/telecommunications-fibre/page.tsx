import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Telecommunications & Fibre | Bolunga Systems",
    description: "High-performance fibre and telecommunications solutions.",
};

const heroStats = [
    { value: "99.9%", label: "Uptime" },
    { value: "Tier-1", label: "Partners" },
    { value: "24/7", label: "Monitoring" },
];

const imperatives = [
    {
        number: "01",
        title: "Reliable network infrastructure",
        description:
            "We build with redundancy as a standard, ensuring that your backbone is resilient against physical and digital interruptions.",
    },
    {
        number: "02",
        title: "Scalable connectivity",
        description:
            "Architecture that grows with you. Our solutions allow for seamless bandwidth expansion without hardware overhauls.",
    },
    {
        number: "03",
        title: "Customer relationships",
        description:
            "Beyond technical delivery, we act as consultants and partners, aligning our growth with your operational success.",
    },
    {
        number: "04",
        title: "Customized solutions",
        description:
            "Avoiding the 'one size fits all' trap. We engineer pathways specific to your geographical and data constraints.",
    },
    {
        number: "05",
        title: "Cutting-edge technology",
        description:
            "Integration of the latest G-PON and XGS-PON technologies to future-proof your digital estate.",
    },
];

export default function TelecommunicationsFibrePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative flex min-h-[64vh] items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/image/engineer-data-center-implementing-advanced-ai-systems.jpg"
                        alt="Engineer working on enterprise fibre infrastructure"
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
                  Precision Infrastructure
                </span>
                            </div>

                            <h1 className="mb-6 font-black leading-[1.05]">
                <span className="block text-4xl sm:text-5xl lg:text-6xl text-[#F7941D]">
                  Enterprise Fibre
                </span>
                                <span className="block text-4xl sm:text-5xl lg:text-6xl text-white">
                  &amp; Connectivity
                </span>
                            </h1>

                            <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-md mb-8">
                                Bolunga Systems delivers high-performance fibre rollouts and
                                unified communications. We engineer reliable, scalable
                                connectivity that keeps your enterprise moving at full speed.
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

            {/* Enterprise Fibre Ecosystem Section */}
            <section className="py-20 bg-[#F4F7FB]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-black text-[#1C2237] mb-4">
                        Enterprise Fibre Ecosystem
                    </h2>
                    <div className="w-14 h-1 bg-[#F7941D] rounded-full mb-8" />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-[#E6F1FB] rounded-2xl p-6">
                            <div className="w-10 h-10 rounded-md bg-white flex items-center justify-center mb-4">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                                    <rect x="3" y="3" width="18" height="18" rx="3" stroke="#6B3FA0" strokeWidth="1.5" />
                                    <path d="M7 12h10" stroke="#6B3FA0" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-[#1C2237] mb-2">Fibre Reselling</h3>
                            <p className="text-sm text-[#475569]">
                                Leverage our tier-1 partnerships to access premium bandwidth at competitive enterprise rates.
                            </p>
                        </div>

                        <div className="bg-[#E6F1FB] rounded-2xl p-6">
                            <div className="w-10 h-10 rounded-md bg-white flex items-center justify-center mb-4">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 7h16M4 12h16M4 17h16" stroke="#6B3FA0" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-[#1C2237] mb-2">Installation Services</h3>
                            <p className="text-sm text-[#475569]">
                                Precision-engineered physical layer deployment, from trenching to terminal termination.
                            </p>
                        </div>

                        <div className="bg-[#E6F1FB] rounded-2xl p-6">
                            <div className="w-10 h-10 rounded-md bg-white flex items-center justify-center mb-4">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="5" stroke="#6B3FA0" strokeWidth="1.5" />
                                    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="#6B3FA0" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-[#1C2237] mb-2">Maintenance &amp; Support</h3>
                            <p className="text-sm text-[#475569]">
                                24/7 proactive monitoring and rapid-response technical teams ensuring zero downtime.
                            </p>
                        </div>

                        <div className="bg-[#E6F1FB] rounded-2xl p-6">
                            <div className="w-10 h-10 rounded-md bg-white flex items-center justify-center mb-4">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="#6B3FA0" strokeWidth="1.5" />
                                    <path d="M8 8h8v8H8z" stroke="#6B3FA0" strokeWidth="1" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-[#1C2237] mb-2">Custom Fibre Solutions</h3>
                            <p className="text-sm text-[#475569]">
                                Bespoke dark fibre and WAN architectures designed for specialized organizational needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Imperatives Section */}
            <section className="bg-[#f5f5f7] py-20">
                <div className="mx-auto max-w-7xl px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_0.9fr]">
                        <div>
                            <h2 className="mb-10 text-[52px] font-black leading-none tracking-tight">
                                <span className="text-[#23293d]">Strategic </span>
                                <span className="text-[#6b3fa0]">Imperatives</span>
                            </h2>

                            <div className="space-y-16">
                                {imperatives.map((item) => (
                                    <div
                                        key={item.number}
                                        className="flex max-w-[650px] items-center rounded-xl bg-[#e9e9f3] px-6 py-4"
                                    >
                                        <div className="mr-8 text-[52px] font-black leading-none text-[#b8b8c9]">
                                            {item.number}
                                        </div>

                                        <div>
                                            <h3 className="text-[15px] font-extrabold text-[#23293d]">
                                                {item.title}
                                            </h3>

                                            <p className="mt-1 max-w-[420px] text-[12px] leading-relaxed text-[#3d465d]">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-full max-w-[320px] rounded-[28px] bg-[#64379d] p-8 text-white">
                                <h3 className="text-[32px] font-extrabold">Direct Access</h3>

                                <p className="mt-4 text-sm leading-relaxed text-white/90">
                                    Speak directly with a Senior Network Architect for a
                                    comprehensive infrastructure audit.
                                </p>

                                <div className="mt-10 text-[25px] font-black tracking-wide">
                                    +27 84 444 8181
                                </div>
                            </div>

                            <div className="mt-6 w-full max-w-[320px] rounded-[24px] bg-[#dfe4f3] p-6">
                                <h3 className="mb-5 text-[28px] font-extrabold text-[#23293d]">
                                    Technical Resources
                                </h3>

                                <div className="space-y-4">
                                    <button className="flex w-full items-center justify-between rounded-lg bg-white px-4 py-3 text-sm font-semibold text-[#23293d] shadow-sm">
                                        Fibre Capability Report 2024
                                        <span>↓</span>
                                    </button>

                                    <button className="flex w-full items-center justify-between rounded-lg bg-white px-4 py-3 text-sm font-semibold text-[#23293d] shadow-sm">
                                        Installation SLA Tiers
                                        <span>📄</span>
                                    </button>

                                    <button className="flex w-full items-center justify-between rounded-lg bg-white px-4 py-3 text-sm font-semibold text-[#23293d] shadow-sm">
                                        Network Design Case Study
                                        <span>↗</span>
                                    </button>
                                </div>
                            </div>

                            <div className="mt-8 overflow-hidden rounded-[32px]">
                                <Image
                                    src="/image/Servers.jpg"
                                    alt="Server Infrastructure"
                                    width={700}
                                    height={500}
                                    className="h-auto w-full object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#A35DF5] py-24">
                <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
                    <h2 className="max-w-3xl text-5xl font-black leading-[1.05] text-white md:text-6xl">
                        Ready to upgrade your
                        <br />
                        infrastructure?
                    </h2>

                    <p className="mt-6 max-w-3xl text-lg font-medium text-white/90">
                        Join the leaders in high-speed connectivity and future-proof your
                        organization today.
                    </p>

                    <div className="mt-14 flex flex-col gap-5 sm:flex-row">
                        <button className="rounded-lg bg-[#6E3D08] px-10 py-4 text-xl font-extrabold text-white transition hover:opacity-95">
                            Schedule a Consultation
                        </button>

                        <button className="rounded-lg bg-[#1F2937] px-10 py-4 text-xl font-extrabold text-white transition hover:opacity-95">
                            View All Services
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
