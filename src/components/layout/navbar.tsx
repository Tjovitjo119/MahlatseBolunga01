"use client";

import Link from "next/link";
import Image from "next/image";
import {
    Facebook,
    Linkedin,
    Instagram,
    Twitter,
    ArrowRight,
    ChevronDown,
    Briefcase,
    ShieldCheck,
    Radio,
    Brain,
    Database,
    Recycle,
    Sparkles,
    MapPin,
    Code2,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/constants/site";
import { MobileNav } from "../navigation/mobile-nav";
import { NavLink } from "../navigation/nav-link";
import { Container } from "../ui/container";
import { cn } from "@/lib/utils";

const socialLinks = [
    { href: siteConfig.social.facebook, label: "Follow us on Facebook", Icon: Facebook },
    { href: siteConfig.social.linkedin, label: "Follow us on LinkedIn", Icon: Linkedin },
    { href: siteConfig.social.instagram, label: "Follow us on Instagram", Icon: Instagram },
    { href: siteConfig.social.twitter, label: "Follow us on X (Twitter)", Icon: Twitter },
];

// Services dropdown items — direct routes for built pages, anchors for pending ones
const servicesDropdown = [
    {
        title: "Technology Consulting",
        description: "Strategic roadmapping & advisory",
        href: "/technology-consulting",
        icon: Briefcase,
        gradient: "from-[#6B3FA0] to-[#8B5FC0]",
    },
    {
        title: "Telecommunications & Fibre",
        description: "High-speed connectivity solutions",
        href: "/telecommunications-fibre",
        icon: Radio,
        gradient: "from-[#F7941D] to-[#FF7A00]",
    },
    {
        title: "Tracking Systems",
        description: "Real-time asset & fleet visibility",
        href: "/tracking-systems",
        icon: MapPin,
        gradient: "from-[#6B3FA0] to-[#8B5FC0]",
    },
    {
        title: "Web Development",
        description: "Scalable platforms & custom builds",
        href: "/web-development",
        icon: Code2,
        gradient: "from-[#F7941D] to-[#FF7A00]",
    },
    {
        title: "Cybersecurity",
        description: "Threat intelligence & defense",
        href: "/services#cybersecurity",
        icon: ShieldCheck,
        gradient: "from-[#6B3FA0] to-[#8B5FC0]",
    },
    {
        title: "AI Training & Consultation",
        description: "Empower your workforce with AI",
        href: "/services#ai-training",
        icon: Brain,
        gradient: "from-[#F7941D] to-[#FF7A00]",
    },
    {
        title: "Database Management",
        description: "Enterprise data infrastructure",
        href: "/services#database",
        icon: Database,
        gradient: "from-[#6B3FA0] to-[#8B5FC0]",
    },
    {
        title: "E-Waste Management",
        description: "Sustainable disposal & recycling",
        href: "/services#e-waste",
        icon: Recycle,
        gradient: "from-[#F7941D] to-[#FF7A00]",
    },
];

// Routes that should highlight the "Services" nav item
const serviceRoutes = [
    "/services",
    "/technology-consulting",
    "/telecommunications-fibre",
    "/tracking-systems",
    "/web-development",
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setServicesOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Close dropdown on route change
    useEffect(() => {
        setServicesOpen(false);
    }, [pathname]);

    // Close dropdown on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setServicesOpen(false);
        };
        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, []);

    const isServicesActive = serviceRoutes.some(
        (route) => pathname === route || pathname?.startsWith(`${route}/`),
    );

    return (
        <>
            <style>{`
                @keyframes dropdownFadeIn {
                    0%   { opacity: 0; transform: translateY(-10px) scale(0.98); }
                    100% { opacity: 1; transform: translateY(0)     scale(1);    }
                }
                @keyframes dropdownItemSlide {
                    0%   { opacity: 0; transform: translateX(-10px); }
                    100% { opacity: 1; transform: translateX(0);     }
                }
                .dropdown-anim {
                    animation: dropdownFadeIn 0.25s ease-out;
                    transform-origin: top center;
                }
                .dropdown-item-anim {
                    animation: dropdownItemSlide 0.3s ease-out both;
                }
                @media (prefers-reduced-motion: reduce) {
                    .dropdown-anim, .dropdown-item-anim { animation: none; }
                }
            `}</style>

            <header
                className={`sticky top-0 z-40 transition-all duration-500 ${
                    scrolled
                        ? "shadow-2xl backdrop-blur-xl bg-[linear-gradient(to_right,rgba(61,26,46,0.92)_0%,rgba(91,26,107,0.92)_40%,rgba(107,10,201,0.92)_100%)]"
                        : "bg-[linear-gradient(to_right,_#3D1A2E_0%,_#5B1A6B_40%,_#6B0AC9_100%)]"
                }`}
            >
                <Container className="flex h-20 items-center justify-between gap-4">

                    {/* LEFT — Logo */}
                    <Link
                        href="/"
                        aria-label="Bolunga Systems - Go to Homepage"
                        className="group flex items-center transition-transform duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm shrink-0"
                    >
                        <div className="relative w-40 h-16 mix-blend-screen transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(247,148,29,0.5)]">
                            <Image
                                src="/image/bf7c1a562f1d8a6d86b517a9412b1a5ce8a2d7d6.png"
                                alt="Bolunga Systems"
                                fill
                                sizes="160px"
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* CENTER — Navigation (Large screens — absolute centered) */}
                    <nav
                        className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2"
                        aria-label="Main navigation"
                    >
                        {siteConfig.navigation.map((item) => {
                            // Render Services with dropdown
                            if (item.label.toLowerCase() === "services") {
                                return (
                                    <div
                                        key={item.href}
                                        ref={dropdownRef}
                                        className="relative"
                                        onMouseEnter={() => setServicesOpen(true)}
                                        onMouseLeave={() => setServicesOpen(false)}
                                    >
                                        {/* Services is now a real Link → /services. Hover opens dropdown. */}
                                        <Link
                                            href="/services"
                                            aria-haspopup="true"
                                            aria-expanded={servicesOpen}
                                            onFocus={() => setServicesOpen(true)}
                                            className={cn(
                                                "group relative flex items-center gap-1 text-sm font-semibold transition-all duration-300 pb-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm",
                                                isServicesActive ? "text-[#F7941D]" : "text-white hover:text-[#F7941D]",
                                            )}
                                        >
                                            {item.label}
                                            <ChevronDown
                                                size={14}
                                                className={cn(
                                                    "transition-transform duration-300",
                                                    servicesOpen && "rotate-180",
                                                )}
                                                strokeWidth={2.5}
                                            />
                                            <span
                                                className={cn(
                                                    "absolute bottom-0 left-0 h-0.5 bg-[#F7941D] transition-all duration-300",
                                                    isServicesActive ? "w-full" : "w-0 group-hover:w-full",
                                                )}
                                            />
                                        </Link>

                                        {/* ============ ELITE DROPDOWN MENU ============ */}
                                        {servicesOpen && (
                                            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 z-50">
                                                <div className="dropdown-anim relative">
                                                    {/* Arrow pointer */}
                                                    <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 bg-white rotate-45 border-l border-t border-slate-100 shadow-sm" />

                                                    {/* Dropdown card */}
                                                    <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden w-[760px] max-w-[92vw]">

                                                        {/* Premium header bar */}
                                                        <div className="bg-gradient-to-r from-[#3D1A2E] via-[#5B1A6B] to-[#6B0AC9] px-6 py-4 flex items-center justify-between">
                                                            <div className="flex items-center gap-2">
                                                                <Sparkles size={16} className="text-[#F7941D]" />
                                                                <span className="text-xs font-bold uppercase tracking-widest text-white">
                                                                    Our Services
                                                                </span>
                                                            </div>
                                                            <Link
                                                                href="/services"
                                                                className="group inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#F7941D] transition-colors"
                                                            >
                                                                View All
                                                                <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                                                            </Link>
                                                        </div>

                                                        {/* Grid of services */}
                                                        <div className="grid grid-cols-2 gap-1 p-3">
                                                            {servicesDropdown.map((service, i) => {
                                                                const Icon = service.icon;
                                                                return (
                                                                    <Link
                                                                        key={service.href}
                                                                        href={service.href}
                                                                        className="dropdown-item-anim group flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all duration-300 relative overflow-hidden"
                                                                        style={{ animationDelay: `${i * 0.05}s` }}
                                                                    >
                                                                        {/* Hover accent bar */}
                                                                        <div className={cn(
                                                                            "absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-3/4 bg-gradient-to-b rounded-r-full transition-all duration-500",
                                                                            service.gradient,
                                                                        )} />

                                                                        {/* Icon */}
                                                                        <div className={cn(
                                                                            "shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br flex items-center justify-center shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-6",
                                                                            service.gradient,
                                                                        )}>
                                                                            <Icon size={20} className="text-white" strokeWidth={2} />
                                                                        </div>

                                                                        {/* Text */}
                                                                        <div className="min-w-0 flex-1">
                                                                            <h4 className="text-sm font-bold text-[#1C2237] group-hover:text-[#6B3FA0] transition-colors duration-300 leading-tight mb-0.5">
                                                                                {service.title}
                                                                            </h4>
                                                                            <p className="text-xs text-slate-500 leading-snug">
                                                                                {service.description}
                                                                            </p>
                                                                        </div>

                                                                        {/* Arrow on hover */}
                                                                        <ArrowRight
                                                                            size={14}
                                                                            className="shrink-0 text-slate-300 group-hover:text-[#F7941D] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 mt-1"
                                                                            strokeWidth={2.5}
                                                                        />
                                                                    </Link>
                                                                );
                                                            })}
                                                        </div>

                                                        {/* Premium footer CTA */}
                                                        <div className="bg-gradient-to-r from-slate-50 to-slate-100/50 px-6 py-4 border-t border-slate-100 flex items-center justify-between">
                                                            <div>
                                                                <p className="text-xs font-bold text-[#1C2237]">
                                                                    Need a custom solution?
                                                                </p>
                                                                <p className="text-[10px] text-slate-500 mt-0.5">
                                                                    Our experts are ready to help
                                                                </p>
                                                            </div>
                                                            <Link
                                                                href="/contact"
                                                                className="group inline-flex items-center gap-1.5 bg-gradient-to-r from-[#F7941D] to-[#FF7A00] text-white text-xs font-bold px-4 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
                                                            >
                                                                Get a Quote
                                                                <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            // Regular nav link
                            return <NavLink key={item.href} href={item.href} label={item.label} />;
                        })}
                    </nav>

                    {/* CENTER — Navigation (Medium screens — inline) */}
                    <nav
                        className="hidden md:flex lg:hidden items-center gap-6 flex-1 justify-center"
                        aria-label="Main navigation tablet"
                    >
                        {siteConfig.navigation.map((item) => (
                            <NavLink key={item.href} href={item.href} label={item.label} />
                        ))}
                    </nav>

                    {/* RIGHT — CTA + Socials */}
                    <div className="hidden md:flex items-center gap-5 shrink-0">

                        {/* Request Quote button */}
                        <Link
                            href="/contact"
                            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden bg-gradient-to-r from-[#F7941D] to-[#FF7A00] text-white font-bold px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_-5px_rgba(247,148,29,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white text-sm shadow-[0_4px_15px_-3px_rgba(247,148,29,0.4)]"
                        >
                            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                            <span className="relative z-10">Request Quote</span>
                            <ArrowRight
                                size={16}
                                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>

                        {/* Divider */}
                        <div className="h-8 w-px bg-white/20" />

                        {/* Social icons */}
                        <div className="flex items-center gap-2">
                            {socialLinks.map(({ href, label, Icon }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-[#F7941D] hover:scale-110 hover:shadow-[0_4px_15px_-3px_rgba(247,148,29,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D]"
                                >
                                    <Icon size={15} className="transition-transform duration-300 group-hover:scale-110" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <MobileNav />
                </Container>

                {/* Premium bottom accent line when scrolled */}
                <div
                    className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F7941D] to-transparent transition-opacity duration-500 ${
                        scrolled ? "opacity-100" : "opacity-0"
                    }`}
                />
            </header>
        </>
    );
}
