"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  User,
  Briefcase,
  FileText,
  X,
  Download,
} from "lucide-react";

import { Container } from "@/components/ui/container";

// ============================================================
// CONFIG
// ============================================================
const WHATSAPP_NUMBER = "27613914186"; // +27 61 391 4186
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const EMAIL = "info@bolunga.co.za";
const PHONE = "+27 11 207 3904";
const PHONE_RAW = "+27112073904";
const ADDRESS = "Unit 5 Platinum Close, Midrand, South Africa";
const HOURS = "Monday - Friday: 8:00 AM - 4:00 PM (SAST)";
const STORAGE_KEY = "bolunga-contact-submissions";

// ============================================================
// TYPES
// ============================================================
type FormData = {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

type Submission = FormData & {
  id: string;
  reference: string;
  submittedAt: number;
};

// ============================================================
// SERVICE OPTIONS
// ============================================================
const serviceOptions = [
  "Technology Consulting",
  "Cybersecurity",
  "Telecommunications & Fibre",
  "AI Training & Consultation",
  "Database Management",
  "E-Waste Management",
  "Other / Not Sure",
];

// ============================================================
// FAQ DATA
// ============================================================
const faqs = [
  {
    question: "How quickly will you respond to my enquiry?",
    answer:
      "We aim to respond to all enquiries within 24 hours during business days (Monday-Friday, 8 AM - 4 PM SAST). For urgent matters, we recommend using WhatsApp for faster response.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes! We provide complimentary initial consultations to understand your needs and discuss how we can help. Simply fill in the form or chat with us on WhatsApp.",
  },
  {
    question: "What information should I include in my enquiry?",
    answer:
      "Share as much detail as possible: project scope, timeline, current challenges, and what success looks like. The more we know, the better we can tailor our response.",
  },
  {
    question: "Do you work with clients outside South Africa?",
    answer:
      "Absolutely. We operate across 9 African countries and serve both local and international clients. Distance is not a barrier to delivering exceptional service.",
  },
  {
    question: "What happens after I submit a quote request?",
    answer:
      "Our team reviews your requirements, then a solutions consultant will reach out within 24 hours to schedule a discovery call. After that, we'll send a detailed proposal tailored to your needs.",
  },
];

// ============================================================
// VALIDATION
// ============================================================
function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = "Please enter your full name";
  }
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Please enter a valid email address";
  }
  if (!data.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^\+?\d[\d\s\-()]{8,15}$/.test(data.phone.trim())) {
    errors.phone = "Please enter a valid phone number";
  }
  if (!data.message.trim() || data.message.trim().length < 10) {
    errors.message = "Please describe your project (at least 10 characters)";
  }
  return errors;
}

function generateReference(): string {
  const ts = Date.now().toString(36).toUpperCase().slice(-5);
  const rand = Math.random().toString(36).toUpperCase().slice(2, 5);
  return `CTC-${ts}${rand}`;
}

// ============================================================
// MAIN COMPONENT
// ============================================================
export function ContactPageContent() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    serviceType: serviceOptions[0],
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submittedRef, setSubmittedRef] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showAdmin, setShowAdmin] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  // Load submissions
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setSubmissions(JSON.parse(saved));
    } catch {
      // ignore
    }
  }, []);

  // Admin shortcut Ctrl+Shift+C
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "C") {
        e.preventDefault();
        try {
          const saved = localStorage.getItem(STORAGE_KEY);
          setSubmissions(saved ? JSON.parse(saved) : []);
        } catch {
          setSubmissions([]);
        }
        setShowAdmin(true);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // ============ FORM HANDLERS ============
  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((d) => ({ ...d, [field]: value }));
    if (errors[field]) {
      setErrors((e) => ({ ...e, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Save to localStorage
    const reference = generateReference();
    const submission: Submission = {
      ...formData,
      id: `${Date.now()}`,
      reference,
      submittedAt: Date.now(),
    };

    try {
      const existing = localStorage.getItem(STORAGE_KEY);
      const all = existing ? JSON.parse(existing) : [];
      all.push(submission);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
      setSubmissions(all);
    } catch {
      // ignore
    }

    // TODO: When EmailJS is set up, send email here:
    // emailjs.send(SERVICE_ID, TEMPLATE_ID, {
    //     from_name: formData.name,
    //     from_email: formData.email,
    //     from_phone: formData.phone,
    //     service_type: formData.serviceType,
    //     message: formData.message,
    //     reference,
    //     submitted_at: new Date().toLocaleString(),
    // }, PUBLIC_KEY);

    setSubmittedRef(reference);
    setSubmitted(true);

    // Auto-reset after 8 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: serviceOptions[0],
        message: "",
      });
    }, 8000);
  };

  const handleSendViaWhatsApp = () => {
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const message = `*New Quote Request from Bolunga Website*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service:* ${formData.serviceType}

*Project Description:*
${formData.message}`;

    const url = `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const exportSubmissions = () => {
    if (submissions.length === 0) {
      alert("No submissions to export.");
      return;
    }
    const headers = [
      "Reference",
      "Name",
      "Email",
      "Phone",
      "Service",
      "Message",
      "Submitted",
    ];
    const rows = submissions.map((s) => [
      s.reference,
      s.name,
      s.email,
      s.phone,
      s.serviceType,
      s.message.replace(/[\r\n,]/g, " "),
      new Date(s.submittedAt).toISOString(),
    ]);
    const csv = [headers, ...rows]
      .map((r) => r.map((c) => `"${c}"`).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `bolunga-contact-${Date.now()}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const clearSubmissions = () => {
    if (!confirm("Delete ALL contact submissions? This cannot be undone."))
      return;
    localStorage.removeItem(STORAGE_KEY);
    setSubmissions([]);
  };

  return (
    <>
      <style>{`
                @keyframes contactFloat {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33%      { transform: translate(30px, -20px) scale(1.1); }
                    66%      { transform: translate(-20px, 20px) scale(0.95); }
                }
                @keyframes contactFadeUp {
                    0%   { opacity: 0; transform: translateY(30px); }
                    100% { opacity: 1; transform: translateY(0);    }
                }
                @keyframes contactPulse {
                    0%, 100% { opacity: 0.4; }
                    50%      { opacity: 0.8; }
                }
                @keyframes contactSuccessPop {
                    0%   { opacity: 0; transform: scale(0.8); }
                    50%  { transform: scale(1.05); }
                    100% { opacity: 1; transform: scale(1); }
                }
                .ct-orb-1   { animation: contactFloat 14s ease-in-out infinite; }
                .ct-orb-2   { animation: contactFloat 18s ease-in-out infinite reverse; }
                .ct-fade-up { animation: contactFadeUp 0.8s ease-out both; }
                .ct-pulse   { animation: contactPulse 4s ease-in-out infinite; }
                .ct-success { animation: contactSuccessPop 0.5s ease-out; }
                @media (prefers-reduced-motion: reduce) {
                    .ct-orb-1, .ct-orb-2, .ct-fade-up, .ct-pulse, .ct-success { animation: none; }
                }
            `}</style>

      {/* ============ ADMIN PANEL ============ */}
      {showAdmin && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowAdmin(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#3D1A2E] to-[#6B0AC9] text-white">
              <div>
                <h2 className="text-xl font-bold">
                  📋 Contact Form Submissions
                </h2>
                <p className="text-xs text-white/70 mt-0.5">
                  Total: {submissions.length}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={exportSubmissions}
                  className="bg-[#F7941D] hover:bg-[#FF7A00] px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-1.5"
                >
                  <Download size={14} /> Export CSV
                </button>
                <button
                  onClick={clearSubmissions}
                  className="bg-red-500 hover:bg-red-600 px-3 py-1.5 rounded-lg text-sm font-semibold"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setShowAdmin(false)}
                  className="hover:bg-white/10 rounded-lg p-1.5"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="overflow-auto flex-1 p-4">
              {submissions.length === 0 ? (
                <p className="text-center text-slate-500 py-12">
                  No submissions yet.
                </p>
              ) : (
                <div className="space-y-3">
                  {[...submissions].reverse().map((s) => (
                    <div
                      key={s.id}
                      className="border border-slate-200 rounded-xl p-4 hover:shadow-md transition"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-mono text-slate-500">
                          {s.reference}
                        </span>
                        <span className="text-xs text-slate-400">
                          {new Date(s.submittedAt).toLocaleString()}
                        </span>
                      </div>
                      <p className="font-bold text-slate-800">{s.name}</p>
                      <p className="text-sm text-slate-600">
                        📧 {s.email} · 📞 {s.phone}
                      </p>
                      <p className="text-sm text-slate-600 mt-1">
                        <span className="font-semibold">Service:</span>{" "}
                        {s.serviceType}
                      </p>
                      <p className="text-sm text-slate-700 mt-2 bg-slate-50 p-2 rounded italic">
                        &ldquo;{s.message}&rdquo;
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ============ HERO SECTION ============ */}
      <section className="relative w-full overflow-hidden bg-[linear-gradient(135deg,_#3D1A2E_0%,_#5B1A6B_50%,_#6B0AC9_100%)] min-h-[70vh] flex items-center">
        {/* Decorative orbs */}
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#F7941D]/25 blur-3xl ct-orb-1 pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[28rem] h-[28rem] rounded-full bg-[#6B0AC9]/40 blur-3xl ct-orb-2 pointer-events-none" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating dots */}
        <div className="absolute top-32 right-20 w-3 h-3 rounded-full bg-[#F7941D] ct-pulse hidden sm:block" />
        <div
          className="absolute bottom-28 left-32 w-2 h-2 rounded-full bg-white/70 ct-pulse hidden sm:block"
          style={{ animationDelay: "1s" }}
        />

        <Container>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center py-16 sm:py-20">
            {/* Text content */}
            <div>
              <div className="ct-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                <Sparkles className="w-4 h-4 text-[#F7941D]" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white">
                  Connect With Us
                </span>
              </div>

              <h1
                className="ct-fade-up font-black leading-[1.1] mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-2xl"
                style={{ animationDelay: "0.1s" }}
              >
                Let&apos;s Engineer Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7941D] to-[#FFB668]">
                  Digital Future
                </span>
              </h1>

              <p
                className="ct-fade-up text-base sm:text-lg md:text-xl text-white/85 leading-relaxed max-w-xl mb-8"
                style={{ animationDelay: "0.25s" }}
              >
                Whether you need technical consulting or robust
                telecommunications, our team is ready to catalyse your growth.
                Let&apos;s build something great together.
              </p>

              {/* Quick action buttons */}
              <div
                className="ct-fade-up flex flex-wrap gap-3"
                style={{ animationDelay: "0.4s" }}
              >
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold px-5 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_-5px_rgba(37,211,102,0.6)] text-sm sm:text-base"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#contact-form"
                  className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/60 hover:border-white hover:bg-white text-white hover:text-[#1C2237] font-bold px-5 py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                >
                  Request a Quote
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

            {/* Robot image */}
            <div className="relative hidden lg:block">
              <div className="relative w-full h-[500px]">
                <Image
                  src="/image/9e4ab48a03bae88a5cf27af8c7b12b098f117458.png"
                  alt="Bolunga Systems Digital Innovation"
                  fill
                  sizes="50vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============ QUICK CONTACT CARDS ============ */}
      <section className="bg-white py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              {
                icon: MessageCircle,
                title: "WhatsApp",
                value: "+27 61 391 4186",
                action: WHATSAPP_LINK,
                color: "from-[#25D366] to-[#1ebe5a]",
                external: true,
              },
              {
                icon: Mail,
                title: "Email",
                value: EMAIL,
                action: `mailto:${EMAIL}`,
                color: "from-[#F7941D] to-[#FF7A00]",
                external: false,
              },
              {
                icon: Phone,
                title: "Call Us",
                value: PHONE,
                action: `tel:${PHONE_RAW}`,
                color: "from-[#6B3FA0] to-[#8B5FC0]",
                external: false,
              },
              {
                icon: MapPin,
                title: "Visit",
                value: "Midrand, SA",
                action: "#location",
                color: "from-[#F7941D] to-[#FF7A00]",
                external: false,
              },
            ].map(
              ({ icon: Icon, title, value, action, color, external }, i) => (
                <a
                  key={i}
                  href={action}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group relative bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  <div
                    className={`absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${color} transition-all duration-700`}
                  />
                  <div
                    className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-all duration-700 group-hover:scale-150`}
                  />

                  <div className="relative">
                    <div
                      className={`inline-flex w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${color} items-center justify-center mb-4 shadow-md group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}
                    >
                      <Icon
                        className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                        strokeWidth={2}
                      />
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">
                      {title}
                    </p>
                    <p className="text-sm sm:text-base font-bold text-[#1C2237] break-all">
                      {value}
                    </p>
                  </div>
                </a>
              ),
            )}
          </div>
        </Container>
      </section>

      {/* ============ FORM + INFO SECTION ============ */}
      <section
        id="contact-form"
        className="bg-slate-50 py-16 sm:py-20 md:py-24"
      >
        <Container>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
            {/* LEFT — Form (3 cols) */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-slate-100">
                {!submitted ? (
                  <>
                    <div className="mb-8">
                      <p className="text-xs font-bold uppercase tracking-widest text-[#F7941D] mb-2">
                        Get Started
                      </p>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1C2237] leading-tight mb-3">
                        Request a Precise Quote
                      </h2>
                      <p className="text-sm sm:text-base text-slate-600">
                        Fill in the details below and our team will respond
                        within 24 hours.
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      noValidate
                    >
                      {/* Name + Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          icon={<User size={16} />}
                          label="Full Name"
                          required
                          error={errors.name}
                        >
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) =>
                              handleChange("name", e.target.value)
                            }
                            placeholder="John Doe"
                            className={inputClass(errors.name)}
                          />
                        </FormField>

                        <FormField
                          icon={<Mail size={16} />}
                          label="Work Email"
                          required
                          error={errors.email}
                        >
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              handleChange("email", e.target.value)
                            }
                            placeholder="you@company.com"
                            className={inputClass(errors.email)}
                          />
                        </FormField>
                      </div>

                      {/* Phone + Service */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          icon={<Phone size={16} />}
                          label="Phone"
                          required
                          error={errors.phone}
                        >
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              handleChange("phone", e.target.value)
                            }
                            placeholder="+27 11 234 5678"
                            className={inputClass(errors.phone)}
                          />
                        </FormField>

                        <FormField
                          icon={<Briefcase size={16} />}
                          label="Service Type"
                        >
                          <select
                            value={formData.serviceType}
                            onChange={(e) =>
                              handleChange("serviceType", e.target.value)
                            }
                            className={`${inputClass()} appearance-none cursor-pointer pr-10 bg-no-repeat bg-right`}
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B3FA0' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                              backgroundPosition: "right 1rem center",
                            }}
                          >
                            {serviceOptions.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </FormField>
                      </div>

                      {/* Message */}
                      <FormField
                        icon={<FileText size={16} />}
                        label="Project Description"
                        required
                        error={errors.message}
                      >
                        <textarea
                          value={formData.message}
                          onChange={(e) =>
                            handleChange("message", e.target.value)
                          }
                          rows={5}
                          placeholder="Tell us about your project, goals, and timeline..."
                          className={`${inputClass(errors.message)} resize-none`}
                        />
                      </FormField>

                      {/* Submit buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <button
                          type="submit"
                          className="group flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#F7941D] to-[#FF7A00] text-white font-bold px-6 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_40px_-5px_rgba(247,148,29,0.6)] shadow-[0_6px_25px_-5px_rgba(247,148,29,0.4)] relative overflow-hidden"
                        >
                          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                          <span className="relative z-10 inline-flex items-center gap-2">
                            <Send size={16} />
                            Submit Request
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={handleSendViaWhatsApp}
                          className="group flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold px-6 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_40px_-5px_rgba(37,211,102,0.5)]"
                        >
                          <MessageCircle size={16} />
                          Send via WhatsApp
                        </button>
                      </div>

                      <p className="text-xs text-slate-400 text-center pt-1">
                        By submitting, you agree to our privacy policy. We never
                        share your data.
                      </p>
                    </form>
                  </>
                ) : (
                  /* SUCCESS STATE */
                  <div className="ct-success text-center py-12">
                    <div className="inline-flex w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 items-center justify-center mb-6 shadow-2xl shadow-green-500/40">
                      <CheckCircle2
                        className="w-12 h-12 text-white"
                        strokeWidth={2}
                      />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#1C2237] mb-3">
                      Message Received! 🎉
                    </h3>
                    <p className="text-base text-slate-600 max-w-md mx-auto mb-2">
                      Thank you for reaching out. Our team will get back to you
                      within 24 hours.
                    </p>
                    <div className="inline-block mt-4 px-5 py-2 bg-slate-100 rounded-full">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Reference:{" "}
                        <span className="text-[#6B3FA0] font-mono">
                          {submittedRef}
                        </span>
                      </p>
                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold px-6 py-3 rounded-full transition-all hover:scale-105"
                      >
                        <MessageCircle size={16} />
                        Continue on WhatsApp
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT — Contact Info (2 cols) */}
            <div className="lg:col-span-2 space-y-5">
              {/* Office Info Card */}
              <div className="bg-gradient-to-br from-[#3D1A2E] via-[#5B1A6B] to-[#6B0AC9] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
                {/* Decorative orb */}
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#F7941D]/20 blur-3xl pointer-events-none" />

                <div className="relative">
                  <h3 className="text-xl sm:text-2xl font-black mb-6 flex items-center gap-2">
                    <Sparkles size={20} className="text-[#F7941D]" />
                    Get In Touch
                  </h3>

                  <div className="space-y-5">
                    <ContactInfoItem
                      icon={<MapPin size={18} />}
                      label="Visit Our Office"
                      value={ADDRESS}
                    />
                    <ContactInfoItem
                      icon={<Mail size={18} />}
                      label="Email Us"
                      value={EMAIL}
                      href={`mailto:${EMAIL}`}
                    />
                    <ContactInfoItem
                      icon={<Phone size={18} />}
                      label="Call Us"
                      value={PHONE}
                      href={`tel:${PHONE_RAW}`}
                    />
                    <ContactInfoItem
                      icon={<Clock size={18} />}
                      label="Office Hours"
                      value={HOURS}
                    />
                  </div>
                </div>
              </div>

              {/* Map */}
              <div
                id="location"
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.5063244659513!2d28.131!3d-25.998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMidrand%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1700000000000"
                  width="100%"
                  height="280"
                  className="border-0"
                  title="Bolunga Systems Office Location"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============ FAQ SECTION ============ */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <p className="text-xs font-bold uppercase tracking-widest text-[#F7941D] mb-3">
                Frequently Asked
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1C2237] leading-tight mb-4">
                Common Questions
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                Quick answers to questions visitors often ask.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-base sm:text-lg text-[#1C2237] flex-1">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#6B3FA0] shrink-0 transition-transform duration-300 ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                      strokeWidth={2.5}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openFaq === i ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm text-slate-500 mb-4">
                Didn&apos;t find what you were looking for?
              </p>
              <Link
                href="#contact-form"
                className="inline-flex items-center gap-2 text-[#F7941D] hover:text-[#FF7A00] font-bold transition-colors"
              >
                Send us a message
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ============ WHATSAPP BANNER ============ */}
      <section className="bg-slate-50 pb-16 sm:pb-20">
        <Container>
          <div className="relative bg-gradient-to-br from-[#25D366] to-[#1ebe5a] rounded-3xl p-8 sm:p-10 md:p-12 overflow-hidden shadow-xl">
            {/* Decorative orbs */}
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/10 blur-3xl pointer-events-none" />

            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm mb-3">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Online Now
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2">
                  Need a faster response?
                </h3>
                <p className="text-white/90 text-sm sm:text-base">
                  Chat directly with our solutions architects on WhatsApp.
                </p>
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#25D366] font-black px-7 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg whitespace-nowrap"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Now</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

// ============================================================
// HELPER COMPONENTS
// ============================================================

function inputClass(error?: string): string {
  const base =
    "w-full px-4 py-3 bg-slate-50 border-2 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white transition-all duration-300";
  if (error) {
    return `${base} border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100`;
  }
  return `${base} border-slate-200 focus:border-[#F7941D] focus:ring-2 focus:ring-[#F7941D]/20`;
}

function FormField({
  icon,
  label,
  required,
  error,
  children,
}: {
  icon?: React.ReactNode;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="flex items-center gap-2 text-sm font-bold text-[#1C2237] mb-2">
        {icon && <span className="text-[#6B3FA0]">{icon}</span>}
        {label}
        {required && <span className="text-[#F7941D]">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1.5">
          <AlertCircle size={12} />
          {error}
        </p>
      )}
    </div>
  );
}

function ContactInfoItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="shrink-0 w-10 h-10 rounded-xl bg-white/15 group-hover:bg-[#F7941D] flex items-center justify-center transition-all duration-300 text-white">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs text-white/60 uppercase tracking-wider font-semibold mb-0.5">
          {label}
        </p>
        <p className="text-sm sm:text-base text-white font-semibold break-words">
          {value}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className="group flex items-start gap-3 cursor-pointer">
        {content}
      </a>
    );
  }

  return <div className="flex items-start gap-3">{content}</div>;
}
