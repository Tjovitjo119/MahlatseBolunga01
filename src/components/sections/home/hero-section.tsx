"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

import { heroSlides } from "@/data/home";

const AUTOPLAY_INTERVAL = 5000;
const SWIPE_THRESHOLD = 50;

export function HeroSection() {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    const prev = useCallback(() => {
        setCurrent((c) => (c === 0 ? heroSlides.length - 1 : c - 1));
    }, []);

    const next = useCallback(() => {
        setCurrent((c) => (c === heroSlides.length - 1 ? 0 : c + 1));
    }, []);

    useEffect(() => {
        if (isPaused) return;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;
        if (prefersReducedMotion) return;

        const timer = setInterval(next, AUTOPLAY_INTERVAL);
        return () => clearInterval(timer);
    }, [next, isPaused]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [prev, next]);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current === null || touchEndX.current === null) return;

        const distance = touchStartX.current - touchEndX.current;
        if (Math.abs(distance) > SWIPE_THRESHOLD) {
            if (distance > 0) next();
            else prev();
        }

        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <>
            <style>{`
                @keyframes heroFadeUp {
                    0%   { opacity: 0; transform: translateY(30px); }
                    100% { opacity: 1; transform: translateY(0);    }
                }
                @keyframes heroFadeUpDelay {
                    0%   { opacity: 0; transform: translateY(20px); }
                    60%  { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0);    }
                }
                @keyframes heroSlowZoom {
                    0%   { transform: scale(1);    }
                    100% { transform: scale(1.06); }
                }
                .hero-fade-up    { animation: heroFadeUp 0.9s ease-out both; }
                .hero-fade-delay { animation: heroFadeUpDelay 1.4s ease-out both; }
                .hero-slow-zoom  { animation: heroSlowZoom 10s ease-out forwards; }
                @media (prefers-reduced-motion: reduce) {
                    .hero-fade-up,
                    .hero-fade-delay,
                    .hero-slow-zoom { animation: none; }
                }
            `}</style>

            <section
                className="relative w-full bg-[linear-gradient(to_right,_#3D1A2E_0%,_#5B1A6B_40%,_#6B0AC9_100%)]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                aria-roledescription="carousel"
                aria-label="Featured services"
            >
                <div
                    className="relative w-full overflow-hidden h-[85vh] sm:h-[78vh] min-h-[500px] sm:min-h-[560px]"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {heroSlides.map((slide, i) => (
                        <div
                            key={i}
                            className={`absolute inset-0 transition-opacity duration-700 ${
                                i === current ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                            aria-hidden={i !== current}
                            role="group"
                            aria-roledescription="slide"
                            aria-label={`Slide ${i + 1} of ${heroSlides.length}`}
                        >
                            <div className="absolute inset-0 overflow-hidden">
                                <div className={i === current ? "hero-slow-zoom absolute inset-0" : "absolute inset-0"}>
                                    <Image
                                        src={slide.src}
                                        alt={slide.title}
                                        fill
                                        sizes="100vw"
                                        className="object-cover object-center"
                                        priority={i === 0}
                                        loading={i === 0 ? "eager" : "lazy"}
                                    />
                                </div>
                            </div>

                            {/* Darker overlay on mobile for better text contrast */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/75 sm:from-black/40 sm:via-black/55 sm:to-black/70" />

                            {/* Slide text + buttons */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 sm:px-4 pb-20 sm:pb-16">
                                {i === current && (
                                    <>
                                        <h1 className="hero-fade-up text-white font-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-tight drop-shadow-2xl mb-3 sm:mb-4 leading-[1.1] max-w-4xl">
                                            {slide.title}
                                        </h1>
                                        <p className="hero-fade-up text-white/90 text-sm sm:text-lg md:text-xl max-w-2xl drop-shadow-md leading-relaxed mb-6 sm:mb-8 px-2">
                                            {slide.subtitle}
                                        </p>

                                        <div className="hero-fade-delay flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full max-w-xs sm:max-w-none">

                                            <Link
                                                href={slide.serviceHref}
                                                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden bg-gradient-to-r from-[#F7941D] to-[#FF7A00] text-white font-bold px-6 sm:px-10 py-3.5 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_-5px_rgba(247,148,29,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white text-sm sm:text-base shadow-[0_6px_25px_-5px_rgba(247,148,29,0.5)] w-full sm:w-auto"
                                            >
                                                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                                <span className="relative z-10">Explore Services</span>
                                                <ArrowRight
                                                    size={18}
                                                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                                                />
                                            </Link>

                                            <Link
                                                href={slide.contactHref}
                                                className="group relative inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/60 hover:border-white hover:bg-white text-white hover:text-[#1C2237] font-bold px-6 sm:px-10 py-3.5 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_-5px_rgba(255,255,255,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D] text-sm sm:text-base w-full sm:w-auto"
                                            >
                                                Get In Touch
                                                <ArrowRight
                                                    size={18}
                                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                                />
                                            </Link>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}

                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/70 to-transparent z-20 pointer-events-none" />

                    <div
                        className="absolute bottom-5 left-0 right-0 flex items-center justify-center gap-2 z-30"
                        role="tablist"
                        aria-label="Slide navigation"
                    >
                        {heroSlides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                aria-selected={i === current}
                                role="tab"
                                className={`rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D] ${
                                    i === current ? "bg-[#F7941D] w-4 h-4" : "bg-white/60 hover:bg-white w-3 h-3"
                                }`}
                            />
                        ))}
                    </div>

                    {/* Prev/Next — hidden on small mobile, visible on sm+ */}
                    <button
                        onClick={prev}
                        aria-label="Previous slide"
                        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white hover:text-white/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D] rounded-full p-1 bg-black/20 hover:bg-black/40 items-center justify-center"
                    >
                        <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-lg" strokeWidth={2.5} />
                    </button>

                    <button
                        onClick={next}
                        aria-label="Next slide"
                        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white hover:text-white/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D] rounded-full p-1 bg-black/20 hover:bg-black/40 items-center justify-center"
                    >
                        <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-lg" strokeWidth={2.5} />
                    </button>
                </div>
            </section>
        </>
    );
}
