// src/app/about/TeamSlider.tsx
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface TeamSliderProps {
  members: TeamMember[];
}

export default function TeamSlider({ members }: TeamSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const delta = direction === "left" ? -200 : 200;
      sliderRef.current.scrollBy({ left: delta, behavior: "smooth" });
    }
  };

  return (
    <div className="relative py-4">
      {/* Left navigation */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center shadow-md z-20"
        aria-label="Scroll left"
      >
        <ChevronLeft size={20} />
      </button>
      {/* Right navigation */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center shadow-md z-20"
        aria-label="Scroll right"
      >
        <ChevronRight size={20} />
      </button>
      {/* Slider container */}
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto hide-scrollbar px-12"
      >
        {members.map((member, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group w-56 flex-none"
          >
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="224px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3B1F6B]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-3 sm:p-4">
              <p className="font-bold text-[#1C2237] text-sm">{member.name}</p>
              <p className="text-gray-500 text-xs mt-0.5">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
