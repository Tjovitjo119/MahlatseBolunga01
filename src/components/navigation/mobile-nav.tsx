"use client";

import Link from "next/link";
import Image from "next/image";
import {
    Menu,
    X,
    Facebook,
    Linkedin,
    Instagram,
    Twitter,
    Phone,
    ArrowRight,
    ChevronDown,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/constants/site";

import { NavLink } from "./nav-link";

const socialLinks = [
    { href: siteConfig.social.facebook, label: "Facebook", Icon: Facebook },
    { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: siteConfig.social.instagram, label: "Instagram", Icon: Instagram },
    { href: siteConfig.social.twitter, label: "X (Twitter)", Icon: Twitter },
];

// Services dropdown items (same as desktop)
const servicesDropdown = [
    { title: "Technology Consulting",       href: "/technology-consulting" },
    { title: "Telecommunications & Fibre",  href: "/telecommunications-fibre" },
    { title: "Tracking Systems",            href: "/tracking-systems" },
    { title: "Web Development",             href: "/web-development" },
    { title: "Cybersecurity",               href: "/services#cybersecurity" },
    { title: "AI Training & Consultation",  href: "/services#ai-training" },
    { title: "Database Management",         href: "/services#database" },
    { title: "E-Waste Management",          href: "/services#e-waste" },
];

// Routes that should highlight Services
const serviceRoutes = [
    "/services",
    "/technology-consulting",
    "/telecommunications-fibre",
    "/tracking-systems",
    "/web-development",
];

export function MobileNav({ className }: { className?: string }) {
    const [open, setOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const pathname = usePathname();

    // Lock body scroll when menu open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    // Close everything when route changes
    useEffect(() => {
        setOpen(false);
        setServicesOpen(false);
    }, [pathname]);

    // Auto-open services dropdown if currently on a service route
    useEffect(() => {
        if (open && serviceRoutes.some((r) => pathname === r || pathname?.startsWith(`${r}/`))) {
            setServicesOpen(true);
        }
    }, [open, pathname]);

    const isServicesActive = serviceRoutes.some(
        (route) => pathname === route || pathname?.startsWith(`${route}/`),
    );

    const handleClose = () => {
        setOpen(false);
        setServicesOpen(false);
    };

    return (
        <div className={`md:hidden ${className ?? ""}`}>
            {/* Hamburger Button */}
            <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((state) => !state)}
                className="relative z-50 p-2 text-white hover:text-[#F7941D] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D] rounded-md"
            >
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[60] bg-[linear-gradient(135deg,_#3D1A2E_0%,_#5B1A6B_50%,_#6B0AC9_100%)] overflow-y-auto"
                    >
                        {/* Decorative orbs */}
                        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#F7941D]/15 blur-3xl pointer-events-none" />
                        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#6B0AC9]/30 blur-3xl pointer-events-none" />

                        {/* Top bar with logo + close */}
                        <div className="relative flex items-center justify-between px-5 h-20">
                            <Link
                                href="/"
                                onClick={handleClose}
                                aria-label="Bolunga Systems - Go to Homepage"
                                className="flex items-center"
                            >
                                <div className="relative w-32 h-12 mix-blend-screen">
                                    <Image
                                        src="/image/bf7c1a562f1d8a6d86b517a9412b1a5ce8a2d7d6.png"
                                        alt="Bolunga Systems"
                                        fill
                                        sizes="128px"
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </Link>

                            <button
                                type="button"
                                aria-label="Close menu"
                                onClick={handleClose}
                                className="p-2 text-white hover:text-[#F7941D] hover:bg-white/10 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D]"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Main Menu Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="relative flex flex-col min-h-[calc(100vh-5rem)] px-6 pt-4 pb-8"
                        >
                            {/* Navigation Links */}
                            <nav
                                className="flex flex-col items-stretch gap-1 mb-8"
                                aria-label="Mobile navigation"
                            >
                                {siteConfig.navigation.map((item, i) => {
                                    // Render Services with expandable dropdown
                                    if (item.label.toLowerCase() === "services") {
                                        return (
                                            <motion.div
                                                key={item.href}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.15 + i * 0.06 }}
                                                className="w-full"
                                            >
                                                {/* Services toggle button */}
                                                <button
                                                    type="button"
                                                    onClick={() => setServicesOpen((s) => !s)}
                                                    aria-expanded={servicesOpen}
                                                    aria-controls="mobile-services-dropdown"
                                                    className={`group flex w-full items-center justify-between py-3 px-2 text-lg font-semibold transition-colors duration-300 rounded-lg ${
                                                        isServicesActive
                                                            ? "text-[#F7941D]"
                                                            : "text-white hover:text-[#F7941D]"
                                                    }`}
                                                >
                                                    <span>Services</span>
                                                    <ChevronDown
                                                        className={`h-4 w-4 transition-transform duration-300 ${
                                                            servicesOpen ? "rotate-180" : ""
                                                        }`}
                                                        strokeWidth={2.5}
                                                    />
                                                </button>

                                                {/* Roll-down sub-menu */}
                                                <AnimatePresence initial={false}>
                                                    {servicesOpen && (
                                                        <motion.div
                                                            id="mobile-services-dropdown"
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="ml-4 mt-1 mb-2 pl-4 border-l-2 border-[#F7941D]/40 flex flex-col">
                                                                {/* View All Services link */}
                                                                <motion.div
                                                                    initial={{ opacity: 0, x: -10 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: 0.05 }}
                                                                >
                                                                    <Link
                                                                        href="/services"
                                                                        onClick={handleClose}
                                                                        className="flex items-center justify-between py-2.5 text-sm font-bold text-[#F7941D] hover:text-white transition-colors duration-200"
                                                                    >
                                                                        <span>View All Services</span>
                                                                        <ArrowRight size={14} />
                                                                    </Link>
                                                                </motion.div>

                                                                {/* Divider */}
                                                                <div className="h-px bg-white/10 my-1" />

                                                                {/* Sub-page links */}
                                                                {servicesDropdown.map((sub, idx) => {
                                                                    const isActive =
                                                                        pathname === sub.href ||
                                                                        pathname?.startsWith(`${sub.href}/`);
                                                                    return (
                                                                        <motion.div
                                                                            key={sub.href}
                                                                            initial={{ opacity: 0, x: -10 }}
                                                                            animate={{ opacity: 1, x: 0 }}
                                                                            transition={{ delay: 0.08 + idx * 0.04 }}
                                                                        >
                                                                            <Link
                                                                                href={sub.href}
                                                                                onClick={handleClose}
                                                                                className={`block py-2.5 text-base font-medium transition-colors duration-200 ${
                                                                                    isActive
                                                                                        ? "text-[#F7941D]"
                                                                                        : "text-white/80 hover:text-white"
                                                                                }`}
                                                                            >
                                                                                {sub.title}
                                                                            </Link>
                                                                        </motion.div>
                                                                    );
                                                                })}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </motion.div>
                                        );
                                    }

                                    // Regular nav links (Home, About, Contact)
                                    return (
                                        <motion.div
                                            key={item.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.15 + i * 0.06 }}
                                            className="w-full"
                                        >
                                            <div className="py-3 px-2 text-lg font-semibold">
                                                <NavLink
                                                    href={item.href}
                                                    label={item.label}
                                                    onClick={handleClose}
                                                />
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </nav>

                            {/* Request Quote — premium pill */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.45 }}
                                className="px-2 mb-5"
                            >
                                <Link
                                    href="/contact"
                                    onClick={handleClose}
                                    className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden bg-gradient-to-r from-[#F7941D] to-[#FF7A00] text-white font-bold px-6 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_-5px_rgba(247,148,29,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white text-base shadow-[0_4px_15px_-3px_rgba(247,148,29,0.4)]"
                                >
                                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                    <span className="relative z-10">Request Quote</span>
                                    <ArrowRight
                                        size={18}
                                        className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </Link>
                            </motion.div>

                            {/* Quick Call Link */}
                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.55 }}
                                href={`tel:${siteConfig.phoneRaw}`}
                                className="mx-2 flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-semibold py-4 rounded-full transition-all duration-300 mb-8"
                            >
                                <Phone size={18} className="text-[#F7941D]" />
                                <span>{siteConfig.phone}</span>
                            </motion.a>

                            {/* Social Icons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.65 }}
                                className="mt-auto pt-6 border-t border-white/15"
                            >
                                <p className="text-white/60 text-xs text-center uppercase tracking-widest mb-4 font-semibold">
                                    Follow Us
                                </p>
                                <div className="flex items-center justify-center gap-3">
                                    {socialLinks.map(({ href, label, Icon }) => (
                                        <a
                                            key={label}
                                            href={href}
                                            aria-label={label}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#F7941D] text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_15px_-3px_rgba(247,148,29,0.6)]"
                                        >
                                            <Icon size={18} className="transition-transform duration-300 group-hover:scale-110" />
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
