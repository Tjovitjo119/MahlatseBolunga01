"use client";

import { Menu, X, Facebook, Linkedin, Instagram, Twitter, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

import { siteConfig } from "@/constants/site";

import { NavLink } from "./nav-link";
import { Button } from "../ui/button";

const socialLinks = [
    { href: siteConfig.social.facebook, label: "Facebook", Icon: Facebook },
    { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: siteConfig.social.instagram, label: "Instagram", Icon: Instagram },
    { href: siteConfig.social.twitter, label: "X (Twitter)", Icon: Twitter },
];

export function MobileNav({ className }: { className?: string }) {
    const [open, setOpen] = useState(false);

    // Lock body scroll when menu is open
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

    return (
        <div className={`md:hidden ${className ?? ""}`}>
            {/* Hamburger/Close Button */}
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
                    <>
                        {/* Dark Backdrop - tap to close */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setOpen(false)}
                            className="fixed inset-0 top-20 z-30 bg-black/60 backdrop-blur-sm"
                            aria-hidden="true"
                        />

                        {/* Mobile Menu Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25 }}
                            className="fixed left-0 right-0 top-20 z-40 shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto bg-[linear-gradient(135deg,_#3D1A2E_0%,_#5B1A6B_50%,_#6B0AC9_100%)]"
                        >
                            <div className="p-6 space-y-6">
                                {/* Navigation Links */}
                                <nav
                                    className="flex flex-col gap-1"
                                    aria-label="Mobile navigation"
                                >
                                    {siteConfig.navigation.map((item) => (
                                        <div
                                            key={item.href}
                                            className="border-b border-white/10 last:border-b-0"
                                        >
                                            <div className="py-3">
                                                <NavLink
                                                    href={item.href}
                                                    label={item.label}
                                                    onClick={() => setOpen(false)}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </nav>

                                {/* Request Quote CTA */}
                                <Button
                                    href="/contact"
                                    variant="primary"
                                    size="md"
                                    arrow
                                    className="w-full"
                                    onClick={() => setOpen(false)}
                                >
                                    Request Quote
                                </Button>

                                {/* Quick Call Link */}
                                <a
                                    href={`tel:${siteConfig.phoneRaw}`}
                                    className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 rounded-md transition-all duration-300"
                                >
                                    <Phone size={18} className="text-[#F7941D]" />
                                    <span>{siteConfig.phone}</span>
                                </a>

                                {/* Social Icons */}
                                <div className="pt-4 border-t border-white/10">
                                    <p className="text-white/60 text-xs text-center uppercase tracking-widest mb-4">
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
                                                className="bg-white/10 hover:bg-[#F7941D] p-3 rounded-full text-white transition-all duration-300 hover:scale-110"
                                            >
                                                <Icon size={18} />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
