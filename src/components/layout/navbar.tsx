"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Instagram, Twitter, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

import { siteConfig } from "@/constants/site";
import { MobileNav } from "../navigation/mobile-nav";
import { NavLink } from "../navigation/nav-link";
import { Container } from "../ui/container";

const socialLinks = [
    { href: siteConfig.social.facebook, label: "Follow us on Facebook", Icon: Facebook },
    { href: siteConfig.social.linkedin, label: "Follow us on LinkedIn", Icon: Linkedin },
    { href: siteConfig.social.instagram, label: "Follow us on Instagram", Icon: Instagram },
    { href: siteConfig.social.twitter, label: "Follow us on X (Twitter)", Icon: Twitter },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
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

                {/* CENTER — Navigation */}
                <nav
                    className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2"
                    aria-label="Main navigation"
                >
                    {siteConfig.navigation.map((item) => (
                        <NavLink key={item.href} href={item.href} label={item.label} />
                    ))}
                </nav>

                {/* Center nav for medium screens (md but not lg) — not absolute, inline */}
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

                    {/* Request Quote — premium rounded gradient */}
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

                    {/* Subtle divider */}
                    <div className="h-8 w-px bg-white/20" />

                    {/* Social icons — circular with refined hover */}
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
    );
}
