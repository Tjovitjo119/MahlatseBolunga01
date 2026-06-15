import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Tracking Systems | Bolunga Systems",
    description: "Real-time tracking and IoT-based asset visibility solutions.",
};

const heroStats = [
    { value: "99.9%", label: "Coverage" },
    { value: "5sec", label: "GPS Refresh" },
    { value: "24/7", label: "Helpdesk" },
];

export default function TrackingSystemsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative flex min-h-[64vh] items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/image/cyberpunk-location-tracking-mobile-device.jpg"
                        alt="Real-time location tracking interface"
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
                  What We Do:
                </span>
                                <span className="block text-4xl sm:text-5xl lg:text-6xl text-white">
                  Advanced Tracking
                </span>
                            </h1>

                            <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-md mb-8">
                                Bolunga Systems architects high-performance satellite tracking
                                solutions and integrated IoT ecosystems. We transform raw
                                telemetry into actionable intelligence, securing assets across
                                land and orbit with military-grade precision.
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

            {/* Core Tracking Architecture Section */}
            <section className="py-20 bg-[#F1F6FB]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-black text-[#1C2237] text-center mb-6">
                        Core Tracking Architecture
                    </h2>
                    <div className="flex items-center justify-center mb-10">
                        <div className="w-16 h-1 bg-[#6B3FA0] rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-[#E6F1FB] rounded-2xl p-8 shadow-sm">
                            <div className="w-10 h-10 rounded-md bg-white flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-[#6B3FA0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 13l2-5h13l2 5v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#1C2237] mb-3">
                                Vehicle Tracking &amp; Fleet Management
                            </h3>
                            <p className="text-sm text-[#475569] mb-4">
                                Real-time geolocation coupled with deep engine diagnostics for
                                comprehensive fleet oversight.
                            </p>
                            <ul className="text-sm text-[#6B3FA0] space-y-2">
                                <li>Live Pathing</li>
                                <li>Driver Behavior</li>
                            </ul>
                        </div>

                        <div className="bg-[#E6F1FB] rounded-2xl p-8 shadow-sm">
                            <div className="w-10 h-10 rounded-md bg-white flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-[#6B3FA0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 11l9-7 9 7v8a1 1 0 0 1-1 1h-4v-6H8v6H4a1 1 0 0 1-1-1v-8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#1C2237] mb-3">
                                RFID Asset Tracking &amp; Inventory
                            </h3>
                            <p className="text-sm text-[#475569] mb-4">
                                Intelligent warehousing solutions utilizing RFID and NFC to
                                automate inventory visibility.
                            </p>
                            <ul className="text-sm text-[#6B3FA0] space-y-2">
                                <li>Contactless Scanning</li>
                                <li>Automated Ledger</li>
                            </ul>
                        </div>

                        <div className="bg-[#E6F1FB] rounded-2xl p-8 shadow-sm">
                            <div className="w-10 h-10 rounded-md bg-white flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-[#6B3FA0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#1C2237] mb-3">
                                IoT Solutions (LPG Monitoring)
                            </h3>
                            <p className="text-sm text-[#475569] mb-4">
                                Specialized sensors for hazardous materials and critical
                                infrastructure level monitoring.
                            </p>
                            <ul className="text-sm text-[#6B3FA0] space-y-2">
                                <li>Remote Level Checks</li>
                                <li>Leak Detection</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fleet Management Capabilities Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-black text-[#1C2237] mb-8">
                        Fleet Management <span className="text-[#6B3FA0]">Capabilities</span>
                    </h2>

                    <div className="grid lg:grid-cols-3 gap-6">
                        <div className="space-y-6 lg:col-span-2">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-[#E6F1FB] rounded-2xl p-6">
                                    <h3 className="text-lg font-bold text-[#1C2237] mb-2">
                                        Location Monitoring
                                    </h3>
                                    <p className="text-sm text-[#475569] mb-3">
                                        Precise GPS coordinates refreshed every 5 seconds for
                                        absolute clarity.
                                    </p>
                                </div>

                                <div className="bg-[#E6F1FB] rounded-2xl p-6">
                                    <h3 className="text-lg font-bold text-[#1C2237] mb-2">
                                        Speed and Status
                                    </h3>
                                    <p className="text-sm text-[#475569] mb-3">
                                        Real-time alerts for idling, speeding, and unauthorized
                                        vehicle movement.
                                    </p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-[#E6F1FB] rounded-2xl p-6">
                                    <h3 className="text-lg font-bold text-[#1C2237] mb-2">
                                        Temperature Control
                                    </h3>
                                    <p className="text-sm text-[#475569] mb-3">
                                        Crucial for cold-chain logistics, ensuring cargo stays
                                        within safe bounds.
                                    </p>
                                </div>

                                <div className="bg-[#E6F1FB] rounded-2xl p-6">
                                    <h3 className="text-lg font-bold text-[#1C2237] mb-2">
                                        Fuel Consumption
                                    </h3>
                                    <p className="text-sm text-[#475569] mb-3">
                                        Advanced telemetry to monitor fuel levels and prevent
                                        drainage/theft.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <aside className="space-y-6">
                            <div className="bg-[#E6F1FB] rounded-2xl p-6">
                                <h4 className="text-lg font-bold text-[#1C2237] mb-4">Resources</h4>
                                <ul className="space-y-3">
                                    <li className="bg-white rounded-md px-4 py-2 flex items-center justify-between text-sm">
                                        Tracking Privacy Policy <span className="text-[#6B3FA0]">⤓</span>
                                    </li>
                                    <li className="bg-white rounded-md px-4 py-2 flex items-center justify-between text-sm">
                                        Terms of Service <span className="text-[#6B3FA0]">⤓</span>
                                    </li>
                                    <li className="bg-white rounded-md px-4 py-2 flex items-center justify-between text-sm">
                                        SLA Documentation <span className="text-[#6B3FA0]">⤓</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-[#E9D7F7] rounded-2xl p-6">
                                <h4 className="text-xl font-bold text-[#6B3FA0] mb-3">
                                    Smart IoT Monitoring
                                </h4>
                                <ul className="text-sm font-bold text-[#1C2237] space-y-2">
                                    <li>Parking Sensor Systems</li>
                                    <li>Temperature &amp; Humidity</li>
                                    <li>Waste Bin Level Sensors</li>
                                    <li>LPG Tank Monitoring</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* After-Sales Support Services Section */}
            <section className="py-20 bg-[#F1F6FB]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-8 md:p-12 lg:p-16">
                        <div className="lg:flex lg:items-center lg:gap-12">
                            <div className="lg:flex-1">
                                <p className="text-sm text-[#6B3FA0] font-semibold mb-3">
                                    End-to-End Commitment
                                </p>
                                <h2 className="text-4xl sm:text-5xl font-black text-[#1C2237] leading-tight mb-6">
                                    After-Sales
                                    <br />
                                    Support Services
                                </h2>
                                <p className="text-sm text-[#475569] font-semibold max-w-xl mb-8">
                                    Deployment is just the beginning. Our dedicated technical team
                                    provides 24/7 monitoring, on-site maintenance, and iterative
                                    software updates to ensure your tracking ecosystem remains at
                                    the cutting edge.
                                </p>

                                <div className="flex gap-8 mt-6">
                                    <div>
                                        <div className="text-2xl font-extrabold text-[#6B3FA0]">24/7</div>
                                        <div className="text-sm text-[#475569]">Live Helpdesk</div>
                                    </div>

                                    <div>
                                        <div className="text-2xl font-extrabold text-[#6B3FA0]">4hr</div>
                                        <div className="text-sm text-[#475569]">On-site Response</div>
                                    </div>

                                    <div>
                                        <div className="text-2xl font-extrabold text-[#6B3FA0]">Life</div>
                                        <div className="text-sm text-[#475569]">Firmware Updates</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 lg:mt-0 lg:w-1/3 lg:shrink-0">
                                <div className="w-full h-56 md:h-64 lg:h-56 relative rounded-2xl overflow-hidden">
                                    <Image
                                        src="/image/Stars.jpg"
                                        alt="Stars"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-[#1E2B39] rounded-3xl p-12 md:p-20 flex flex-col items-center text-center">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                            Ready to secure your assets?
                        </h2>
                        <p className="text-sm md:text-base text-white/80 max-w-2xl mb-8">
                            Contact our technical consultants today for a bespoke assessment
                            of your tracking and IoT requirements.
                        </p>

                        <a
                            href="tel:+27844448181"
                            className="inline-block bg-[#F7941D] text-[#1C2237] font-extrabold px-8 py-3 rounded-lg text-lg md:text-xl shadow-lg hover:opacity-95 transition"
                        >
                            +27 84 444 8181
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}