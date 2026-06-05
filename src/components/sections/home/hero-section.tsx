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

    // Autoplay with pause-on-hover
    useEffect(() => {
        if (isPaused) return;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;
        if (prefersReducedMotion) return;

        const timer = setInterval(next, AUTOPLAY_INTERVAL);
        return () => clearInterval(timer);
    }, [next, isPaused]);

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [prev, next]);

    // Touch swipe
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
        <section
            className="relative w-full pb-12 bg-[linear-gradient(to_right,_#3D1A2E_0%,_#5B1A6B_40%,_#6B0AC9_100%)]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            aria-roledescription="carousel"
            aria-label="Featured services"
        >
            <div
                className="relative w-full overflow-hidden h-[68vh] min-h-[420px]"
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
                        {/* Background image */}
                        <Image
                            src={slide.src}
                            alt={slide.title}
                            fill
                            sizes="100vw"
                            className="object-cover object-center"
                            priority={i === 0}
                            loading={i === 0 ? "eager" : "lazy"}
                        />
                        <div className="absolute inset-0 bg-black/50" />

                        {/* Whole-area clickable link (sits under the text but above the image) */}
                        <Link
                            href={slide.href}
                            aria-label={`Learn more about ${slide.title}`}
                            className="absolute inset-0 z-10 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#F7941D] focus-visible:ring-inset"
                        />

                        {/* Slide text content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
                            <h1 className="text-white font-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-tight drop-shadow-2xl mb-4 leading-tight max-w-4xl">
                                {slide.title}
                            </h1>
                            <p className="text-white/90 text-sm sm:text-lg md:text-xl max-w-2xl drop-shadow-md leading-relaxed mb-6">
                                {slide.subtitle}
                            </p>

                            {/* Learn More Button - has pointer-events-auto to be clickable separately */}
                            <Link
                                href={slide.href}
                                className="group pointer-events-auto inline-flex items-center gap-2 bg-[#F7941D] hover:bg-[#e5830a] text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent text-sm sm:text-base shadow-lg relative z-20"
                            >
                                Learn More
                                <ArrowRight
                                    size={18}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>
                        </div>
                    </div>
                ))}

                {/* Prev/Next Buttons - z-30 so they sit above the link overlay */}
                <button
                    onClick={prev}
                    aria-label="Previous slide"
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white hover:text-white/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D] rounded-full p-1"
                >
                    <ChevronLeft className="w-10 h-10 drop-shadow-lg" strokeWidth={2.5} />
                </button>

                <button
                    onClick={next}
                    aria-label="Next slide"
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white hover:text-white/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D] rounded-full p-1"
                >
                    <ChevronRight className="w-10 h-10 drop-shadow-lg" strokeWidth={2.5} />
                </button>
            </div>

            {/* Dots */}
            <div
                className="flex items-center justify-center gap-2 pt-4"
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
                            i === current ? "bg-[#F7941D] w-4 h-4" : "bg-[#F7941D]/50 w-3 h-3"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}
