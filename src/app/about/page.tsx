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

export const metadata = {
  title: "About Us - Bolunga Systems",
  description:
      "Bolunga Systems - Digital Architects Pioneering Evolution in the South African ICT landscape.",
};

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
  {
    name: "Siphokazi Simandla",
    role: "Managing Director",
    image: "/image/SP.png",
  },
  {
    name: "Itumeleng Mabea",
    role: "Human Resource Manager",
    image: "/image/IP.png",
  },
  {
    name: "Rotshidzwa Chester Mavhungu",
    role: "Fullstack Developer",
    image: "/image/ChesterPP.png",
  },
  {
    name: "Kwathi Mashao",
    role: "E-Waste Coordinator/Administrator",
    image: "/image/KP.png",
  },
  {
    name: "Mbali Maseko",
    role: "PricedWell Administrator",
    image: "/image/MM.png",
  },
  {
    name: "Masabata Masilo",
    role: "Office Administrator/Project Manager",
    image: "/image/MPP.png",
  },
  {
    name: "Duduzile Cokoto",
    role: "Business Consultation Manager",
    image: "/image/DPP.png",
  },
  {
    name: "Daniel Madileng",
    role: "Head of Occupational Health and Safety/Field Agent Manager",
    image: "/image/DanielM.png",
  },
  {
    name: "Aphiwe",
    role: "Cybersecurity Specialist",
    image: "/image/Aphiwe.jpeg",
  },
];

export default function AboutPage() {
  return (
      <>
        <main>
          {/* Hero */}
          <section
              className="relative min-h-[60vh] flex items-center overflow-hidden bg-[linear-gradient(to_right,_#3D1A2E_0%,_#5B1A6B_40%,_#6B0AC9_100%)]"
          >
            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              {/* Text content */}
              <div className="lg:w-[55%] w-full">
                <div className="inline-flex items-center border border-white/50 rounded-md px-4 py-1.5 mb-6">
                <span className="text-white text-xs font-bold tracking-widest uppercase">
                  Digital Architects
                </span>
                </div>
                <h1 className="font-black leading-tight mb-6">
                <span className="block text-4xl sm:text-5xl lg:text-7xl text-white">
                  Pioneering
                </span>
                  <span className="block text-4xl sm:text-5xl lg:text-7xl text-[#F7941D]">
                  Evolution.
                </span>
                </h1>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-lg">
                  Bolunga Systems isn&#39;t just an ICT provider; we are the
                  kinetic energy behind digital transformation, engineering
                  reliability into the core of your telecommunications
                  infrastructure.
                </p>
              </div>

              {/* Robot image — mobile/tablet: inline below text */}
              <div className="flex lg:hidden justify-center mt-8">
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
              <div className="hidden lg:block absolute bottom-8 left-[45%] z-10 bg-[#D4E4F7] rounded-xl px-6 py-4 shadow-lg w-max">
                <p className="text-[#6B3FA0] text-xs font-semibold uppercase tracking-widest mb-1">
                  Our Footprint
                </p>
                <p className="text-[#1C2237] font-bold text-base leading-snug">
                  Leading the ICT &amp; Telecom Revolution
                </p>
              </div>

              {/* Robot image — desktop only */}
              <div className="hidden lg:block absolute bottom-0 right-0 w-[40%] h-full pointer-events-none">
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
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C2237] mb-3">
                  The Bolunga Narrative
                </h2>
                <div className="w-16 h-1 bg-[#F7941D] rounded-full" />
              </div>
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="flex justify-center lg:justify-start">
                  <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square">
                    <Image
                        src="/image/BlackRobot.png"
                        alt="Bolunga Systems Team Member"
                        fill
                        className="object-cover rounded-2xl"
                        sizes="(max-width: 768px) 100vw, 384px"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 leading-relaxed mb-5">
                    Founded on the principle of technical precision, Bolunga
                    Systems has emerged as a high-end digital architect in the
                    South African ICT landscape. We bridge the gap between
                    traditional reliability and future-ready innovation.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Our journey is defined by a relentless pursuit of excellence
                    in cybersecurity, telecommunications, and sustainable E-waste
                    management. We don&#39;t just solve problems; we engineer
                    systems that catalyze growth.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Consulting Process */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6B3FA0]">
                  Our Consulting Process
                </h2>
                <p className="text-gray-500 mt-3 max-w-2xl text-sm sm:text-base">
                  Our consultancy services are becoming more important and thought
                  provoking everyday. From Bolunga&#39;s viewpoint of management,
                  our process can be defined or explained in such a way that it
                  would help our clients reach their desired goals.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {consultingProcess.map((step, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-[#F5F0FF] rounded-xl flex items-center justify-center group-hover:bg-[#6B3FA0] transition-colors duration-300 shrink-0">
                          <step.Icon className="w-5 h-5 text-[#6B3FA0] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <span className="text-3xl font-black text-gray-100 leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                      </div>
                      <h3 className="font-bold text-[#1C2237] text-base mb-2">
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

          {/* Mission */}
          <section className="py-16 bg-[#EEF2F7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Two mission cards side by side */}
              <div className="grid sm:grid-cols-2 gap-6 mb-20">
                {/* Card 1 — orange rocket icon (Our Vision - Orange hover) */}
                <div className="group bg-white hover:bg-[#F7941D] rounded-2xl p-8 shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300">
                  <div className="w-10 h-10 mb-4">
                    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
                      <path
                          d="M12 2C12 2 7 6 7 12C7 15.31 8.69 18.22 11.27 19.94L12 20.5L12.73 19.94C15.31 18.22 17 15.31 17 12C17 6 12 2 12 2Z"
                          className="fill-[#F7941D] group-hover:fill-white transition-colors duration-300"
                      />
                      <circle
                          cx="12"
                          cy="12"
                          r="2"
                          className="fill-white group-hover:fill-[#F7941D] transition-colors duration-300"
                      />
                      <path
                          d="M8 20L6 22M16 20L18 22"
                          className="stroke-[#F7941D] group-hover:stroke-white transition-colors duration-300"
                          strokeWidth="2"
                          strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#1C2237] group-hover:text-white text-lg mb-3 transition-colors duration-300">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 group-hover:text-white text-sm leading-relaxed italic transition-colors duration-300">
                    &#39;To be Africa&#39;s most trusted enterprise technology
                    partner — recognised for delivery excellence, innovation, and
                    lasting client relationships across every market we
                    serve.&#39;
                  </p>
                </div>

                {/* Card 2 — purple eye icon (Our Mission - Purple hover) */}
                <div className="group bg-white hover:bg-[#6B3FA0] rounded-2xl p-8 shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300">
                  <div className="w-10 h-10 mb-4">
                    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
                      <path
                          d="M12 5C7 5 2.73 8.11 1 12.5C2.73 16.89 7 20 12 20C17 20 21.27 16.89 23 12.5C21.27 8.11 17 5 12 5Z"
                          className="fill-[#6B3FA0] group-hover:fill-white transition-colors duration-300"
                      />
                      <circle
                          cx="12"
                          cy="12.5"
                          r="3.5"
                          className="fill-white group-hover:fill-[#6B3FA0] transition-colors duration-300"
                      />
                      <circle
                          cx="12"
                          cy="12.5"
                          r="1.5"
                          className="fill-[#6B3FA0] group-hover:fill-white transition-colors duration-300"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#1C2237] group-hover:text-white text-lg mb-3 transition-colors duration-300">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 group-hover:text-white text-sm leading-relaxed italic transition-colors duration-300">
                    &#39;To deliver reliable, secure, and scalable ICT and
                    telecommunications solutions that empower South African
                    enterprises to grow, compete, and lead in their respective
                    industries.&#39;
                  </p>
                </div>
              </div>

              {/* OUR DNA — watermark heading + 4 cards */}
              <div className="relative">
                {/* Watermark text — absolutely behind cards */}
                <div
                    className="absolute inset-0 flex items-center pointer-events-none z-0"
                >
                  <h2
                      className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-widest select-none text-[rgba(176,198,220,0.7)] -mt-[17%]"
                  >
                    OUR DNA
                  </h2>
                </div>

                {/* 4 DNA cards — on top of watermark */}
                <div
                    className="relative grid grid-cols-2 lg:grid-cols-4 gap-5 py-8 z-10"
                >
                  {/* Integrity */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                    <div className="w-9 h-9 mb-3">
                      <svg viewBox="0 0 24 24" fill="none" className="w-9 h-9">
                        <path
                            d="M12 2L3 7V12C3 16.55 7.08 20.74 12 22C16.92 20.74 21 16.55 21 12V7L12 2Z"
                            fill="#6B3FA0"
                        />
                        <path
                            d="M9 12L11 14L15 10"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h4 className="font-bold text-[#1C2237] text-sm mb-2">
                      Integrity
                    </h4>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      Upholding the highest moral and professional standards in
                      every interaction.
                    </p>
                  </div>

                  {/* Determination */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                    <div className="w-9 h-9 mb-3">
                      <svg viewBox="0 0 24 24" fill="none" className="w-9 h-9">
                        <path
                            d="M13 2L4.09 12.26C3.75 12.67 4.04 13.27 4.57 13.27H11L10.5 21.5L19.91 11.24C20.25 10.83 19.96 10.23 19.43 10.23H13L13 2Z"
                            fill="#F7941D"
                        />
                      </svg>
                    </div>
                    <h4 className="font-bold text-[#1C2237] text-sm mb-2">
                      Determination
                    </h4>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      The grit to solve complex technical challenges where others
                      see dead ends.
                    </p>
                  </div>

                  {/* Service Excellence */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                    <div className="w-9 h-9 mb-3">
                      <svg viewBox="0 0 24 24" fill="none" className="w-9 h-9">
                        <path
                            d="M12 2L14.85 8.5L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L9.15 8.5L12 2Z"
                            fill="#6B3FA0"
                        />
                      </svg>
                    </div>
                    <h4 className="font-bold text-[#1C2237] text-sm mb-2">
                      Service Excellence
                    </h4>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      Exceeding expectations through technical mastery and
                      proactive support.
                    </p>
                  </div>

                  {/* Continuous Learning */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                    <div className="w-9 h-9 mb-3">
                      <svg viewBox="0 0 24 24" fill="none" className="w-9 h-9">
                        <path
                            d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3ZM5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z"
                            fill="#F7941D"
                        />
                      </svg>
                    </div>
                    <h4 className="font-bold text-[#1C2237] text-sm mb-2">
                      Continuous Learning
                    </h4>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      Staying at the kinetic edge of the ever-evolving technology
                      landscape.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-16 bg-[#B0BEC5]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C2237] mb-2">
                The Digital Architects
              </h2>
              <p className="text-gray-500 mb-10 max-w-xl mx-auto text-sm sm:text-base">
                Our team brings together decades of collective experience in
                telecommunications, cybersecurity, and enterprise infrastructure.
              </p>
              <TeamSlider members={teamMembers} />
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 px-4">
            <div
                className="max-w-5xl mx-auto rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden bg-[linear-gradient(135deg,_#3B1F6B_0%,_#6B3FA0_60%,_#F7941D_100%)]"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
                Ready to Engineer Your Future?
              </h2>
              <p className="text-white/80 text-sm sm:text-base mb-8 max-w-xl mx-auto">
                Join the ranks of leading enterprises who have chosen Bolunga
                Systems as their architectural partner for ICT excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                    href="/contact"
                    className="bg-[#F7941D] hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-lg transition-all duration-300 shadow-lg"
                >
                  Get A Consultation
                </Link>
                <Link
                    href="/services"
                    className="border-2 border-white/60 hover:border-white text-white font-bold px-8 py-3.5 rounded-lg transition-all duration-300 hover:bg-white/10"
                >
                  View Our Portfolio
                </Link>
              </div>
            </div>
          </section>
        </main>
      </>
  );
}
