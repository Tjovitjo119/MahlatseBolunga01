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
            const delta = direction === "left" ? -240 : 240;
            sliderRef.current.scrollBy({ left: delta, behavior: "smooth" });
        }
    };

    return (
        <div className="relative py-4">
            {/* Left navigation */}
            <button
                onClick={() => scroll("left")}
                className="absolute left-0 sm:-left-2 top-1/2 -translate-y-1/2 bg-white hover:bg-[#F7941D] text-[#1C2237] hover:text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-xl z-20 transition-all duration-300 hover:scale-110"
                aria-label="Scroll left"
            >
                <ChevronLeft size={20} />
            </button>

            {/* Right navigation */}
            <button
                onClick={() => scroll("right")}
                className="absolute right-0 sm:-right-2 top-1/2 -translate-y-1/2 bg-white hover:bg-[#F7941D] text-[#1C2237] hover:text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-xl z-20 transition-all duration-300 hover:scale-110"
                aria-label="Scroll right"
            >
                <ChevronRight size={20} />
            </button>

            {/* Slider container */}
            <div
                ref={sliderRef}
                className="flex gap-5 overflow-x-auto hide-scrollbar px-12 py-2 scroll-smooth snap-x snap-mandatory"
            >
                {members.map((member, i) => (
                    <div
                        key={i}
                        className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 w-56 flex-none snap-start hover:-translate-y-1.5"
                    >
                        {/* Image area */}
                        <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                sizes="224px"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                priority
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#3B1F6B]/90 via-[#3B1F6B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Bottom-left accent bar on hover */}
                            <span className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-[#F7941D] transition-all duration-500" />
                        </div>

                        {/* Text area */}
                        <div className="p-4 text-left">
                            <p className="font-bold text-[#1C2237] text-sm leading-snug group-hover:text-[#6B3FA0] transition-colors duration-300 min-h-[2.5rem]">
                                {member.name}
                            </p>
                            <p className="text-gray-500 text-xs mt-1.5 leading-snug min-h-[2rem]">
                                {member.role}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
