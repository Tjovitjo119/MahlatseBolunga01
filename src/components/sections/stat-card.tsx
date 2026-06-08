"use client";

import { useEffect, useRef, useState } from "react";

type StatCardProps = {
    stat: string;
    label: string;
    description: string;
};

function useCountUp(target: number, duration: number = 2000, shouldStart: boolean = false) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!shouldStart) return;

        let startTime: number | null = null;
        const startValue = 0;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Ease out cubic for smooth deceleration
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * (target - startValue) + startValue);

            setCount(current);

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                setCount(target);
            }
        };

        requestAnimationFrame(step);
    }, [shouldStart, target, duration]);

    return count;
}

function parseStatParts(stat: string): { number: number; prefix: string; suffix: string } {
    // Extract prefix (non-numeric at start), number, suffix (non-numeric at end)
    const match = stat.match(/^([^0-9]*)([0-9,]+)([^0-9]*)$/);
    if (!match) return { number: 0, prefix: "", suffix: stat };

    const number = parseInt(match[2].replace(/,/g, ""), 10);
    return {
        prefix: match[1],
        number,
        suffix: match[3],
    };
}

export function StatCard({ stat, label, description }: StatCardProps) {
    const [hasStarted, setHasStarted] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const { number, prefix, suffix } = parseStatParts(stat);
    const count = useCountUp(number, 2000, hasStarted);

    useEffect(() => {
        const node = cardRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasStarted) {
                        setHasStarted(true);
                    }
                });
            },
            {
                threshold: 0.3,
            }
        );

        observer.observe(node);

        return () => {
            observer.unobserve(node);
        };
    }, [hasStarted]);

    const displayNumber = hasStarted ? count.toLocaleString() : "0";

    return (
        <div
            ref={cardRef}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 sm:p-8 text-center group hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-default"
        >
            <p className="text-4xl sm:text-5xl md:text-6xl font-black text-[#F7941D] mb-2 leading-none group-hover:scale-110 transition-transform duration-300">
                {prefix}{displayNumber}{suffix}
            </p>
            <p className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                {label}
            </p>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                {description}
            </p>
        </div>
    );
}
