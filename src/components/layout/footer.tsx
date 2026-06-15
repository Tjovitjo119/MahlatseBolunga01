"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

import { siteConfig } from "@/constants/site";
import { Container } from "../ui/container";
import { Button } from "../ui/button";

const socialLinks = [
  { href: siteConfig.social.facebook, label: "Facebook", Icon: Facebook },
  { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: siteConfig.social.instagram, label: "Instagram", Icon: Instagram },
  { href: siteConfig.social.twitter, label: "X (Twitter)", Icon: Twitter },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 4000);
    }, 1000);
  };

  return (
    <footer className="text-white pt-16 pb-8 bg-[linear-gradient(135deg,_#1C2237_0%,_#3B1F6B_55%,_#6B3FA0_100%)]">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Column 1: Logo + Tagline + Socials */}
          <div className="text-center md:text-left">
            <div className="mb-6 flex justify-center md:justify-start">
              <div className="relative w-[140px] sm:w-[180px] h-12 sm:h-14">
                <Image
                  src="/image/BolungaLogo_NoBackground.png"
                  alt="Bolunga Systems Logo"
                  fill
                  sizes="(max-width: 640px) 140px, 180px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-xs mx-auto md:mx-0">
              Engineering reliable momentum for the world&apos;s most ambitious
              organizations.
            </p>
            <div className="flex gap-3 justify-center md:justify-start flex-wrap">
              {socialLinks.map(({ href, label, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-[#F7941D] p-2.5 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-[#F7941D] transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-white/70 hover:text-[#F7941D] transition-colors text-sm"
                >
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {siteConfig.services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-white/70 hover:text-[#F7941D] transition-colors text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin size={18} className="text-[#F7941D] shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm leading-relaxed text-left">
                  {siteConfig.address.line1},<br />
                  {siteConfig.address.line2}
                </span>
              </li>
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <Mail size={18} className="text-[#F7941D] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-white/70 hover:text-[#F7941D] transition-colors text-sm text-left break-all"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <Phone size={18} className="text-[#F7941D] shrink-0 mt-0.5" />
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="text-white/70 hover:text-[#F7941D] transition-colors text-sm text-left"
                >
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">
              Newsletter
            </h4>
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              Get tech insights delivered to your inbox.
            </p>

            {status === "success" ? (
              <div className="flex items-center gap-2 bg-green-500/20 border border-green-500/40 rounded-lg px-4 py-3 text-sm text-green-100">
                <CheckCircle2 size={18} className="shrink-0" />
                <span>Thanks for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  aria-label="Email address"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm placeholder-white/50 focus:outline-none focus:border-[#F7941D] focus:bg-white/15 transition-all"
                  required
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                  loading={status === "loading"}
                  loadingText="Sending..."
                  className="w-full"
                >
                  Subscribe
                  <Send
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Button>

                {status === "error" && (
                  <p className="text-red-300 text-xs mt-2">
                    Please enter a valid email.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-white/60 hover:text-[#F7941D] transition-colors text-xs sm:text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/60 hover:text-[#F7941D] transition-colors text-xs sm:text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
