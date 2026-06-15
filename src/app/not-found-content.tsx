"use client";

import Link from "next/link";
import { Home, Mail, ArrowRight, Search } from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function NotFoundContent() {
  return (
    <>
      <style>{`
                @keyframes notFoundFloat {
                    0%, 100% { transform: translateY(0); }
                    50%      { transform: translateY(-15px); }
                }
                @keyframes notFoundPulse {
                    0%, 100% { transform: scale(1);    opacity: 1;   }
                    50%      { transform: scale(1.05); opacity: 0.9; }
                }
                @keyframes notFoundFadeUp {
                    0%   { opacity: 0; transform: translateY(30px); }
                    100% { opacity: 1; transform: translateY(0);    }
                }
                @keyframes notFoundOrbFloat {
                    0%, 100% { transform: translate(0, 0)   scale(1);   }
                    33%      { transform: translate(30px, -20px) scale(1.1); }
                    66%      { transform: translate(-20px, 20px) scale(0.95); }
                }
                @keyframes notFoundGlow {
                    0%, 100% { opacity: 0.4; }
                    50%      { opacity: 0.7; }
                }
                @keyframes notFoundShake {
                    0%, 100% { transform: rotate(0deg);  }
                    25%      { transform: rotate(-2deg); }
                    75%      { transform: rotate(2deg);  }
                }
                .nf-float   { animation: notFoundFloat 4s ease-in-out infinite; }
                .nf-pulse   { animation: notFoundPulse 3s ease-in-out infinite; }
                .nf-fade-up { animation: notFoundFadeUp 0.8s ease-out both; }
                .nf-orb-1   { animation: notFoundOrbFloat 12s ease-in-out infinite; }
                .nf-orb-2   { animation: notFoundOrbFloat 16s ease-in-out infinite reverse; }
                .nf-orb-3   { animation: notFoundOrbFloat 14s ease-in-out infinite; }
                .nf-glow    { animation: notFoundGlow 4s ease-in-out infinite; }
                .nf-shake   { animation: notFoundShake 6s ease-in-out infinite; }
                @media (prefers-reduced-motion: reduce) {
                    .nf-float, .nf-pulse, .nf-fade-up,
                    .nf-orb-1, .nf-orb-2, .nf-orb-3,
                    .nf-glow, .nf-shake { animation: none; }
                }
            `}</style>

      <section className="relative min-h-[calc(100vh-160px)] w-full overflow-hidden bg-[linear-gradient(135deg,_#3D1A2E_0%,_#5B1A6B_40%,_#6B0AC9_100%)] flex items-center justify-center px-4 py-16 sm:py-20">
        {/* Decorative animated background orbs */}
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#F7941D]/20 blur-3xl nf-orb-1 pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#6B0AC9]/30 blur-3xl nf-orb-2 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#8B5FC0]/15 blur-3xl nf-orb-3 pointer-events-none" />

        {/* Decorative grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Floating decorative dots */}
        <div className="absolute top-20 right-32 w-3 h-3 rounded-full bg-[#F7941D] nf-float opacity-60 hidden sm:block" />
        <div className="absolute bottom-32 left-20 w-2 h-2 rounded-full bg-white nf-pulse opacity-50 hidden sm:block" />
        <div
          className="absolute top-1/3 right-20 w-4 h-4 rounded-full bg-[#F7941D]/70 nf-float opacity-70 hidden md:block"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-white nf-pulse opacity-60 hidden md:block"
          style={{ animationDelay: "2s" }}
        />

        {/* Main Content */}
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          {/* 404 Number with premium styling */}
          <div className="relative mb-6 sm:mb-8 nf-fade-up">
            {/* Glow behind 404 */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-[#F7941D]/30 blur-3xl nf-glow" />
            </div>

            {/* The 404 itself */}
            <h1 className="relative text-[110px] sm:text-[180px] md:text-[220px] lg:text-[260px] font-black leading-none tracking-tighter">
              <span className="text-white drop-shadow-2xl">4</span>
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#F7941D] to-[#FF7A00] nf-pulse drop-shadow-2xl">
                0
              </span>
              <span className="text-white drop-shadow-2xl nf-shake inline-block">
                4
              </span>
            </h1>
          </div>

          {/* Title */}
          <h2
            className="nf-fade-up text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight drop-shadow-lg"
            style={{ animationDelay: "0.2s" }}
          >
            Page Not Found
          </h2>

          {/* Description */}
          <p
            className="nf-fade-up text-base sm:text-lg md:text-xl text-white/85 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed"
            style={{ animationDelay: "0.35s" }}
          >
            Oops! The page you&apos;re looking for doesn&apos;t exist or has
            been moved. Let&apos;s get you back on track.
          </p>

          {/* Action Buttons — premium style */}
          <div
            className="nf-fade-up flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-12 sm:mb-14"
            style={{ animationDelay: "0.5s" }}
          >
            {/* Back to Home — premium orange gradient */}
            <Link
              href="/"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden bg-gradient-to-r from-[#F7941D] to-[#FF7A00] text-white font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_-5px_rgba(247,148,29,0.7)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white text-sm sm:text-base shadow-[0_6px_25px_-5px_rgba(247,148,29,0.5)] w-full sm:w-auto"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <Home size={18} className="relative z-10" />
              <span className="relative z-10">Back to Home</span>
              <ArrowRight
                size={16}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            {/* Contact Support — glass style */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/60 hover:border-white hover:bg-white text-white hover:text-[#1C2237] font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_-5px_rgba(255,255,255,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D] text-sm sm:text-base w-full sm:w-auto"
            >
              <Mail size={18} />
              <span>Contact Support</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Quick Links Section */}
          <div className="nf-fade-up" style={{ animationDelay: "0.7s" }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-white/30" />
              <p className="text-white/70 text-xs sm:text-sm uppercase tracking-widest font-semibold flex items-center gap-2">
                <Search size={14} className="text-[#F7941D]" />
                Try These Pages
              </p>
              <div className="h-px w-12 bg-white/30" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-[#F7941D] backdrop-blur-sm border border-white/20 hover:border-[#F7941D] text-white text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_15px_-3px_rgba(247,148,29,0.5)]"
                >
                  {link.label}
                  <ArrowRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
