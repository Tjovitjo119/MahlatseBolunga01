import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Bolunga Systems to discuss your next project.",
};

export default function ContactPage() {
  return (
    <>
      <section
        className="relative flex min-h-[70vh] items-center overflow-hidden bg-[linear-gradient(to_right,_#3D1A2E_0%,_#5B1A6B_40%,_#6B0AC9_100%)]"
      >
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Text content */}
          <div className="lg:w-[50%]">
            <div className="inline-flex items-center border border-white/50 rounded-md px-4 py-1.5 mb-6">
              <span className="text-white text-xs font-bold tracking-widest uppercase">
                CONNECT WITH US
              </span>
            </div>
            <h1 className="font-black leading-tight mb-6">
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-white">
                Let&#39;s Engineer Your
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl">
                <span className="text-[#F7941D]">Digital </span>
                <span className="text-white">Future</span>
              </span>
            </h1>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-lg">
              Whether you need technical consulting or robust
              telecommunications, our team is ready to catalyze your growth.
            </p>
          </div>

          {/* Robot hand image — right half, top-anchored, overflows bottom */}
          <div
            className="pointer-events-none absolute hidden h-[190%] w-[80%] top-[-48%] left-[37%] right-[-2%] z-10 lg:block"
          >
            <div className="relative w-full h-full">
              <Image
                src="/image/9e4ab48a03bae88a5cf27af8c7b12b098f117458.png"
                alt="Bolunga Systems Digital Innovation"
                fill
                sizes="(max-width: 1024px) 0vw, 60vw"
                className="object-contain object-top"
                priority
              />
            </div>
          </div>

          {/* Mobile image */}
          <div className="flex lg:hidden justify-center mt-8">
            <div
              className="relative w-full max-w-xs aspect-[4/3] sm:max-w-sm"
            >
              <Image
                src="/image/9e4ab48a03bae88a5cf27af8c7b12b098f117458.png"
                alt="Bolunga Systems Digital Innovation"
                fill
                sizes="(max-width: 640px) 320px, 384px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information - Left */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#6B3FA0] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1C2237] mb-1">
                    Our Headquarters
                  </h4>
                  <p className="text-gray-600">
                    Unit 5 Platinum Close, Midrand South Africa
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#6B3FA0] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1C2237] mb-1">
                    Email Us
                  </h4>
                  <p className="text-gray-600">info@bolunga.co.za</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#6B3FA0] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1C2237] mb-1">
                    Call Support
                  </h4>
                  <p className="text-gray-600">+27 11 207 3904</p>
                </div>
              </div>
              {/* Google Maps Embed */}
              <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.1234567890123!2d27.983333!3d-26.1075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a00000000000%3A0x123456789abcdef!2sUnit%205%20Platinum%20Close%2C%20Midrand%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1700000000000"
                  width="100%"
                  height="300"
                  className="border-0"
                  title="Bolunga Systems headquarters map"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Request a Precise Quote Form - Right */}
            <div className="relative bg-gray-50 rounded-2xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-[#1C2237] mb-6">
                Request a Precise Quote
              </h3>
              <form className="space-y-4">
                {/* First row: Full Name and Work Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      title="Full Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B3FA0] focus:border-transparent bg-[#E0E7FF] text-gray-700"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      title="Work Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B3FA0] focus:border-transparent bg-[#E0E7FF] text-gray-700"
                      placeholder="Enter your work email"
                    />
                  </div>
                </div>

                {/* Second row: Service Type and Approx. Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Service Type
                    </label>
                    <select
                      title="Service Type"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B3FA0] focus:border-transparent bg-[#E0E7FF] text-gray-700"
                    >
                      <option>Technical Consulting</option>
                      <option>Cybersecurity</option>
                      <option>Telecommunications</option>
                      <option>AI Solutions</option>
                      <option>E-Waste</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">
                      Approx. Budget (ZAR)
                    </label>
                    <input
                      type="text"
                      title="Approximate Budget in ZAR"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B3FA0] focus:border-transparent bg-[#E0E7FF] text-gray-700"
                      placeholder="Enter your approximate budget"
                    />
                  </div>
                </div>

                {/* Full width: Project Scope & Description */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    Project Scope &amp; Description
                  </label>
                  <textarea
                    rows={4}
                    title="Project Scope and Description"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B3FA0] focus:border-transparent resize-none bg-[#E0E7FF] text-gray-700"
                    placeholder="Briefly describe your project scope"
                  />
                </div>

                {/* Full width: Attachment (RFP/Brief) */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    Attachment (RFP/Brief)
                  </label>
                  <div className="w-full h-20 border border-gray-300 rounded-lg bg-[#E0E7FF]" />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#6B3FA0] hover:bg-[#5a2f80] text-white font-bold italic py-3 px-6 rounded-lg transition-colors text-base"
                >
                  Request a Precise Quote
                </button>
              </form>

              {/* WhatsApp chat bubble — bottom-right corner on desktop, inline on mobile */}
              <div className="hidden sm:flex justify-end mt-6">
                <div className="w-16 h-16 border-2 border-dashed border-[#6B3FA0] rounded-xl p-1">
                  <div className="relative w-full h-full">
                    <Image
                      src="/image/WhatsAppChat.png"
                      alt="WhatsApp Chat"
                      fill
                      sizes="64px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex sm:hidden justify-end mt-4">
                <div className="w-14 h-14 border-2 border-dashed border-[#6B3FA0] rounded-xl p-1">
                  <div className="relative w-full h-full">
                    <Image
                      src="/image/WhatsAppChat.png"
                      alt="WhatsApp Chat"
                      fill
                      sizes="56px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WhatsApp Banner */}
      <section className="pb-16 bg-white">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 rounded-xl bg-[#FAF0E6] px-8 py-5 sm:flex-row">
            <div>
              <p className="font-bold text-[#1C2237] text-sm md:text-base">
                Need a faster response?
              </p>
              <p className="text-gray-500 text-xs md:text-sm mt-0.5">
                Chat directly with our solutions architects.
              </p>
            </div>
            <a
              href="https://wa.me/27112073904"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1ebe5a] text-white font-black text-xs tracking-widest uppercase px-6 py-3 rounded-md transition-colors whitespace-nowrap"
            >
              WHATSAPP NOW
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
