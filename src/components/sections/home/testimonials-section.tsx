"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/home";

const AUTOPLAY_INTERVAL = 6000;

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const activeTestimonial = testimonials[current];

  return (
    <Section background="white" id="testimonials">
      <SectionHeading
        eyebrow="Testimonials"
        title="What Our Clients Say"
        description="Real feedback from organisations we've partnered with across Africa."
      />

      <div
        className="relative max-w-4xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Decorative background quote icon */}
        <Quote
          className="absolute -top-8 -left-4 sm:-left-8 w-24 h-24 sm:w-32 sm:h-32 text-[#6B3FA0]/10"
          strokeWidth={1}
        />

        {/* Testimonial card */}
        <div className="relative bg-gradient-to-br from-[#F0F3FC] to-white rounded-3xl p-8 sm:p-12 md:p-14 shadow-xl border border-slate-100">
          {/* Star Rating */}
          <div className="flex items-center justify-center gap-1 mb-6">
            {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 sm:w-6 sm:h-6 fill-[#F7941D] text-[#F7941D]"
              />
            ))}
          </div>

          {/* Quote */}
          <blockquote
            key={current}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 leading-relaxed text-center font-medium italic mb-8 min-h-[120px] sm:min-h-[140px] animate-fade-in"
          >
            &ldquo;{activeTestimonial.quote}&rdquo;
          </blockquote>

          {/* Author info */}
          <div className="text-center">
            {/* Avatar circle with initials */}
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#6B3FA0] to-[#F7941D] flex items-center justify-center text-white text-xl font-black shadow-lg">
              {activeTestimonial.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <p className="text-base sm:text-lg font-bold text-[#1C2237]">
              {activeTestimonial.author}
            </p>
            <p className="text-sm text-[#6B3FA0] font-semibold">
              {activeTestimonial.position}
            </p>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              {activeTestimonial.company}
            </p>
          </div>
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="group w-11 h-11 rounded-full bg-white border-2 border-slate-200 hover:border-[#F7941D] hover:bg-[#F7941D] text-slate-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2" role="tablist">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-selected={i === current}
                role="tab"
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-[#F7941D] w-8 h-2.5"
                    : "bg-slate-300 hover:bg-slate-400 w-2.5 h-2.5"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="group w-11 h-11 rounded-full bg-white border-2 border-slate-200 hover:border-[#F7941D] hover:bg-[#F7941D] text-slate-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-110"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to   { opacity: 1; transform: translateY(0);   }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out;
                }
            `}</style>
    </Section>
  );
}
