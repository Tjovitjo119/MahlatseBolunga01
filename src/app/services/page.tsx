import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Robot from "../../../public/image/TabletRobot.png";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Bolunga Systems services for enterprise and product engineering.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center overflow-visible bg-[linear-gradient(to_right,_#3D1A2E_0%,_#5B1A6B_40%,_#6B0AC9_100%)]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            {/* Left: text */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/30 rounded-full px-4 py-1.5 mb-6">
                <span className="text-white/90 text-xs font-bold tracking-widest uppercase">
                  Our Professional Line
                </span>
              </div>
              <h1 className="font-black leading-tight mb-6">
                <span className="block text-4xl sm:text-5xl lg:text-6xl text-[#F7941D]">
                  Engineered for
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl text-white">
                  Momentum.
                </span>
              </h1>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-md">
                We don&#39;t just provide services; we architect the digital
                future of your enterprise with engineered precision and kinetic
                velocity.
              </p>
            </div>

            {/* Robot image — desktop: right side, overflows down */}
            <div className="pointer-events-none absolute bottom-[-120px] right-[5%] hidden h-[560px] w-[48%] lg:block z-20">
              <Image
                src={Robot}
                alt="Professional services robot illustration"
                fill
                sizes="48vw"
                className="object-contain object-bottom"
                priority
              />
            </div>

            {/* Robot image — mobile/tablet: inline below text */}
            <div className="flex lg:hidden justify-center mt-8">
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

      {/* Core Expertise Section */}
      <section className="bg-[#F5F0FF] pb-20 pt-32 sm:pt-44">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-[#1C2237] mb-3">
              Core Ecosystem
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              Specialized solutions designed to catalyze growth and secure
              operational integrity
              <br />
              across your entire digital landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Technology Consulting",
                description:
                  "Strategic roadmap development to align your tech stack with long-term business objectives.",
              },
              {
                title: "Cybersecurity Solutions",
                description:
                  "Enterprise-grade protection frameworks including threat detection and response architectures.",
              },
              {
                title: "Fiber & Telecommunications",
                description:
                  "High-performance fiber infrastructure and unified communication services for high-demand environments.",
              },
              {
                title: "E-waste Management",
                description:
                  "Sustainable IT asset disposition and ethical recycling programs for modern corporate responsibility.",
              },
              {
                title: "AI Training & Consultation",
                description:
                  "Empowering your workforce through hands-on AI literacy and deployment of custom LLM solutions.",
              },
              {
                title: "Tracking Systems",
                description:
                  "Real-time asset visibility and logistics management through advanced IoT sensor integration.",
              },
              {
                title: "Database Services",
                description:
                  "Scalable architecture, migration, and optimization for legacy and cloud-native databases.",
              },
              {
                title: "Web Development",
                description:
                  "Custom scalable development utilizing high-performance frameworks and editorial UI design.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white hover:bg-[#D0D7E8] rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4">
                  <svg
                    className="w-8 h-8 text-[#6B3FA0] group-hover:text-[#F7941D] transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="7" cy="7" r="2.5" />
                    <circle cx="17" cy="17" r="2.5" />
                    <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" />
                    <circle cx="7" cy="17" r="2.5" />
                    <circle cx="17" cy="7" r="2.5" />
                    <line x1="8.5" y1="15.5" x2="15.5" y2="8.5" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-slate-950 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 group-hover:text-slate-800 text-sm leading-relaxed mb-4 transition-colors duration-300">
                  {service.description}
                </p>
                <Link
                  href="#"
                  className="text-[#6B3FA0] group-hover:text-[#F7941D] font-bold text-sm transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Methodology Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950">
              The Methodology
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Our four-stage process ensures every technical deployment is
              rooted in business value.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1 - Audit (Purple - 01) */}
            <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-72 sm:h-80 lg:h-[400px] border-l-[6px] border-[#6B3FA0]">
              <Image
                src="/image/Audit.jpg"
                alt="Audit methodology"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#6B3FA0]/30 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D1A2E]/90 via-[#6B3FA0]/40 to-transparent" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-[#6B3FA0]/60 transition-colors duration-500" />
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <div>
                  <span className="text-6xl font-black text-white drop-shadow-md mb-4 block">
                    01
                  </span>
                  <h4 className="text-xl font-bold text-white mb-2">Audit</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Deep analysis of current infrastructure and pain points.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Architect (Orange - 02) */}
            <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-72 sm:h-80 lg:h-[400px] border-l-[6px] border-[#F7941D]">
              <Image
                src="/image/IT Architect.jpg"
                alt="Architect methodology"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#F7941D]/20 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-[#F7941D]/40 to-transparent" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-[#F7941D]/60 transition-colors duration-500" />
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <div>
                  <span className="text-6xl font-black text-white drop-shadow-md mb-4 block">
                    02
                  </span>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Architect
                  </h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Designing high momentum systems with zero friction.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Deploy (Purple - 03) */}
            <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-72 sm:h-80 lg:h-[400px] border-l-[6px] border-[#8B3FFC]">
              <Image
                src="/image/Deployment.jpg"
                alt="Deploy methodology"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#6B3FA0]/30 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E]/90 via-[#6B3FA0]/40 to-transparent" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-[#8B3FFC]/60 transition-colors duration-500" />
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <div>
                  <span className="text-6xl font-black text-white drop-shadow-md mb-4 block">
                    03
                  </span>
                  <h4 className="text-xl font-bold text-white mb-2">Deploy</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Precision execution with minimal operational downtime.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 - Optimize (Orange - 04) */}
            <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-72 sm:h-80 lg:h-[400px] border-l-[6px] border-[#F7941D]">
              <Image
                src="/image/Optimize.jpg"
                alt="Optimize methodology"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#F7941D]/20 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-[#F7941D]/40 to-transparent" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-[#F7941D]/60 transition-colors duration-500" />
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <div>
                  <span className="text-6xl font-black text-white drop-shadow-md mb-4 block">
                    04
                  </span>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Optimize
                  </h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Continuously refining systems for peak performance and cost
                    efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Systems in Action Section */}
      <section className="bg-[#6B3FA0] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              Systems in Action
            </h2>
            <p className="text-base sm:text-lg text-white/80 font-medium">
              Real-world impact across diverse industries, from
              telecommunications giants to boutique tech startups.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="rounded-2xl bg-[#8B3FFC] p-7 shadow-xl flex flex-col gap-4 relative mt-6">
              <div className="absolute -top-6 left-6 bg-[#6B3FA0] rounded-full p-2">
                <svg
                  className="w-7 h-7 text-[#F7941D]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 17v2h6v-2H3zm0-5v2h12v-2H3zm0-5v2h18V7H3zm16.59 7.41L21 12l-4-4-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.59z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-4">
                Financial Sector Transformation
              </h3>
              <p className="text-white/90 text-sm sm:text-base font-medium">
                Implemented a multi-layered cybersecurity framework and tracking
                system for a regional bank, reducing data vulnerability by 85%
                while optimizing asset logistics.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-[#6B3FA0] text-white text-xs font-semibold rounded-full px-3 py-1">
                  Cybersecurity
                </span>
                <span className="bg-[#6B3FA0] text-white text-xs font-semibold rounded-full px-3 py-1">
                  Tracking Systems
                </span>
              </div>
            </div>
            <div className="rounded-2xl bg-[#8B3FFC] p-7 shadow-xl flex flex-col gap-4 relative mt-6">
              <div className="absolute -top-6 left-6 bg-[#F7941D] rounded-full p-2">
                <svg
                  className="w-7 h-7 text-[#6B3FA0]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.285 6.709l-3-3A.996.996 0 0 0 16 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V8a.997.997 0 0 0-.293-.707zM17 5.414L18.586 7H17V5.414zM19 19H5V5h10v4h4v10z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-4">
                Industrial Sustainable Scaling
              </h3>
              <p className="text-white/90 text-sm sm:text-base font-medium">
                Overhauled a manufacturing plant&#39;s E-waste lifecycle and
                network backbone with fiber solutions, resulting in 40% lower
                hardware waste and gigabit-speed operational monitoring.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-[#6B3FA0] text-white text-xs font-semibold rounded-full px-3 py-1">
                  Fiber Tech
                </span>
                <span className="bg-[#6B3FA0] text-white text-xs font-semibold rounded-full px-3 py-1">
                  E-waste
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-3xl bg-[#E0D9FF] p-8 text-center sm:p-12 lg:p-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 mb-6">
              Ready to Architect Your Future?
            </h2>
            <p className="text-base sm:text-lg text-slate-700 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              Get in touch with our specialist team for a comprehensive audit of
              your current service needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3 bg-[#6B3FA0] hover:bg-[#5a2f80] text-white font-bold rounded-lg transition-colors duration-300 text-center"
              >
                Get A Consultation
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto px-8 py-3 bg-white hover:bg-slate-100 text-[#6B3FA0] font-bold rounded-lg border-2 border-[#6B3FA0] transition-colors duration-300 text-center"
              >
                View Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
