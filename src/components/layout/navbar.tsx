"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import { useState, useEffect } from "react";

import { siteConfig } from "@/constants/site";
import { MobileNav } from "../navigation/mobile-nav";
import { NavLink } from "../navigation/nav-link";
import { Container } from "../ui/container";
import { Button } from "../ui/button";

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
            className={`sticky top-0 z-40 transition-all duration-300 ${
                scrolled
                    ? "shadow-2xl backdrop-blur-md bg-[linear-gradient(to_right,rgba(61,26,46,0.95)_0%,rgba(91,26,107,0.95)_40%,rgba(107,10,201,0.95)_100%)]"
                    : "bg-[linear-gradient(to_right,_#3D1A2E_0%,_#5B1A6B_40%,_#6B0AC9_100%)]"
            }`}
        >
            <Container className="flex h-20 items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    aria-label="Bolunga Systems - Go to Homepage"
                    className="flex items-center transition-transform duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm"
                >
                    <div className="relative w-36 h-14 mx-auto md:mx-0 mix-blend-screen">
                        <Image
                            src="/image/bf7c1a562f1d8a6d86b517a9412b1a5ce8a2d7d6.png"
                            alt="Bolunga Systems"
                            fill
                            sizes="144px"
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Center Navigation */}
                <nav
                    className="hidden items-center gap-8 md:flex"
                    aria-label="Main navigation"
                >
                    {siteConfig.navigation.map((item) => (
                        <NavLink key={item.href} href={item.href} label={item.label} />
                    ))}
                </nav>

                {/* Right Side - CTA + Socials */}
                <div className="hidden items-center gap-6 md:flex">
                    <Button href="/contact" variant="primary" size="sm" arrow>
                        Request Quote
                    </Button>

                    <div className="flex items-center gap-3">
                        {socialLinks.map(({ href, label, Icon }) => (
                            <Link
                                key={label}
                                href={href}
                                aria-label={label}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-[#F7941D] p-2 rounded-full text-white transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D]"
                            >
                                <Icon size={16} />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Mobile Navigation */}
                <MobileNav />
            </Container>
        </header>
    );
}