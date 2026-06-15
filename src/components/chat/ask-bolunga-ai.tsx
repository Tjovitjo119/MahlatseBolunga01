"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
    Send,
    X,
    MessageCircle,
    Sparkles,
    ExternalLink,
    Trash2,
    User,
    Download,
} from "lucide-react";

const WHATSAPP_NUMBER = "27613194196";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const STORAGE_KEY = "bolunga-ai-chat";
const LEADS_KEY = "bolunga-ai-leads";

// ============================================================
// TYPES
// ============================================================
type MessageType = "text" | "options" | "form-step";

type Message = {
    id: string;
    from: "me" | "bot";
    text: string;
    timestamp: number;
    type?: MessageType;
    options?: string[];
};

type FlowMode = "chat" | "lead-capture" | "meeting" | "quote-wizard";

type LeadStep = "name" | "email" | "phone" | "service" | "message" | "done";

type Lead = {
    id: string;
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    type: "lead" | "meeting" | "quote";
    reference: string;
    submittedAt: number;
};

// ============================================================
// QUICK REPLIES
// ============================================================
const INITIAL_QUICK_REPLIES = [
    "What services do you offer?",
    "I want a quote",
    "Book a meeting",
    "Contact information",
];

const CONTEXTUAL_REPLIES: Record<string, string[]> = {
    services: [
        "Tell me about Cybersecurity",
        "Tell me about AI Training",
        "I want a quote",
    ],
    pricing: ["Get a custom quote", "Book a meeting", "Talk to a human"],
    contact: ["Book a meeting", "Chat on WhatsApp", "What are your hours?"],
    default: ["Tell me more", "Get a quote", "Talk to a human"],
};

// ============================================================
// VALIDATION
// ============================================================
function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
    const cleaned = phone.replace(/[\s\-()]/g, "");
    return /^\+?\d{9,15}$/.test(cleaned);
}

// ============================================================
// REFERENCE NUMBER GENERATOR
// ============================================================
function generateReference(prefix = "BOL"): string {
    const timestamp = Date.now().toString(36).toUpperCase().slice(-5);
    const random = Math.random().toString(36).toUpperCase().slice(2, 5);
    return `${prefix}-${timestamp}${random}`;
}

// ============================================================
// FUZZY KEYWORD MATCHING
// ============================================================
function containsAny(text: string, keywords: string[]): boolean {
    const lower = text.toLowerCase();
    return keywords.some((k) => lower.includes(k.toLowerCase()));
}

// ============================================================
// SMART BOT REPLY GENERATOR
// ============================================================
type BotResponse = {
    text: string;
    options?: string[];
    triggerFlow?: FlowMode;
};

function generateBotReply(userText: string): BotResponse {
    const text = userText.toLowerCase().trim();

    if (
        containsAny(text, [
            "hi",
            "hello",
            "hey",
            "hola",
            "sawubona",
            "dumela",
            "molo",
            "howzit",
            "hallo",
        ])
    ) {
        return {
            text: "👋 Hi there! I'm Bolunga AI, your virtual assistant. I can help you with:\n\n• Information about our services\n• Getting a custom quote\n• Booking a meeting\n• Connecting you with our team\n\nHow can I help you today?",
            options: INITIAL_QUICK_REPLIES,
        };
    }

    if (
        containsAny(text, [
            "contact me",
            "call me",
            "reach out",
            "get in touch with me",
            "send me info",
            "i want info",
            "interested",
        ])
    ) {
        return {
            text: "🎯 Awesome! I'd love to connect you with our team. Let me grab a few quick details. We'll get back to you within 24 hours.",
            triggerFlow: "lead-capture",
        };
    }

    if (
        containsAny(text, [
            "quote",
            "pricing",
            "price",
            "cost",
            "how much",
            "estimate",
            "proposal",
            "rates",
        ])
    ) {
        return {
            text: "💼 Let's get you a custom quote! I'll ask a few quick questions to match you with the right solution.",
            triggerFlow: "quote-wizard",
        };
    }

    if (
        containsAny(text, [
            "book",
            "schedule",
            "meeting",
            "appointment",
            "consultation",
            "call back",
            "demo",
        ])
    ) {
        return {
            text: "📅 Perfect! Let's book a meeting with our team. I'll capture a few details and we'll confirm via WhatsApp or email.",
            triggerFlow: "meeting",
        };
    }

    if (
        containsAny(text, [
            "service",
            "offer",
            "do you do",
            "what can",
            "products",
            "solutions",
        ])
    ) {
        return {
            text: "🚀 We offer 6 core services:\n\n1. **Technology Consulting** — Strategic roadmapping\n2. **Cybersecurity** — Threat intelligence & defense\n3. **Telecommunications & Fibre** — High-speed connectivity\n4. **AI Training & Consultation** — Workforce upskilling\n5. **Database Management** — Scalable data systems\n6. **E-Waste Management** — Sustainable disposal\n\nWhich one interests you?",
            options: [
                "Tell me about Cybersecurity",
                "Tell me about AI Training",
                "I want a quote",
            ],
        };
    }

    if (
        containsAny(text, [
            "cyber",
            "security",
            "hack",
            "protect",
            "firewall",
            "threat",
            "ransomware",
            "phishing",
        ])
    ) {
        return {
            text: "🛡️ **Cybersecurity Services:**\n\n• Threat intelligence & monitoring\n• Perimeter defense systems\n• Security audits & assessments\n• Incident response planning\n• Employee security training\n• Compliance (POPIA, GDPR)\n\nWe protect your most valuable digital assets. Want to discuss your security needs?",
            options: [
                "Get a security quote",
                "Book a security consultation",
                "Talk to a human",
            ],
        };
    }

    if (
        containsAny(text, [
            "ai",
            "artificial intelligence",
            "machine learning",
            "ml",
            "training",
            "upskill",
            "literacy",
        ])
    ) {
        return {
            text: "🤖 **AI Training & Consultation:**\n\n• Hands-on AI literacy programmes\n• Custom workforce training\n• Machine learning fundamentals\n• Business AI strategy\n• ChatGPT for business workshops\n• Practical AI implementation\n\nWe turn ML concepts into real business outcomes. Interested?",
            options: [
                "Get AI training quote",
                "Book a training session",
                "I want a quote",
            ],
        };
    }

    if (
        containsAny(text, [
            "fibre",
            "fiber",
            "internet",
            "telecom",
            "connectivity",
            "network",
            "broadband",
            "bandwidth",
        ])
    ) {
        return {
            text: "📡 **Telecommunications & Fibre:**\n\n• Enterprise fibre rollouts\n• Low-latency connectivity\n• Multi-site networks\n• Last-mile delivery\n• Wireless backhaul solutions\n• 24/7 network monitoring\n\nNext-generation connectivity for your business.",
            options: [
                "Get a connectivity quote",
                "Book a site survey",
                "Talk to a human",
            ],
        };
    }

    if (
        containsAny(text, [
            "waste",
            "recycle",
            "dispose",
            "environment",
            "sustainability",
            "green",
            "e-waste",
        ])
    ) {
        return {
            text: "♻️ **E-Waste Management:**\n\n• Certified electronic recycling\n• Secure data wiping & destruction\n• Asset recovery & resale\n• Compliance certificates\n• Bulk collection services\n• Environmental reporting\n\nSustainable & compliant disposal in line with global standards.",
            options: [
                "Get a recycling quote",
                "Schedule a pickup",
                "Talk to a human",
            ],
        };
    }

    if (
        containsAny(text, ["database", "data", "sql", "backup", "storage", "cloud"])
    ) {
        return {
            text: "🗄️ **Database Management:**\n\n• Database design & optimization\n• Cloud migration (AWS, Azure)\n• Backup & disaster recovery\n• Performance tuning\n• Data security & encryption\n• 24/7 monitoring\n\nEnterprise-grade data infrastructure that scales.",
            options: [
                "Get a database quote",
                "Book a consultation",
                "I want a quote",
            ],
        };
    }

    if (
        containsAny(text, ["consult", "strategy", "advice", "roadmap", "planning"])
    ) {
        return {
            text: "💡 **Technology Consulting:**\n\n• Digital transformation strategy\n• IT roadmap development\n• Vendor selection\n• Architecture reviews\n• Cost optimization audits\n• Change management\n\nAlign your tech investments with business growth.",
            options: ["Book a consultation", "Get a quote", "Talk to a human"],
        };
    }

    if (
        containsAny(text, [
            "contact",
            "reach",
            "call",
            "phone",
            "email",
            "number",
            "talk to",
        ])
    ) {
        return {
            text: "📞 **Get in touch with us:**\n\n• WhatsApp: 061 319 4196\n• Visit our Contact page\n• Click 'Chat on WhatsApp' below\n• Or let me capture your details — we'll call you back!",
            options: ["I want to be contacted", "Chat on WhatsApp", "Book a meeting"],
        };
    }

    if (
        containsAny(text, [
            "where",
            "location",
            "address",
            "office",
            "based",
            "country",
            "city",
        ])
    ) {
        return {
            text: "🌍 **Our Reach:**\n\n• Headquartered in South Africa\n• Operating across 9 African countries\n• 2,600+ projects delivered\n• 137+ professional staff\n• Pan-African delivery capability\n\nWe serve both local and international clients.",
            options: [
                "Tell me about your projects",
                "I want to be contacted",
                "Talk to a human",
            ],
        };
    }

    if (
        containsAny(text, ["hour", "open", "time", "when", "available", "working"])
    ) {
        return {
            text: "🕐 **Office Hours:**\n\n• Monday - Friday: 8:00 AM - 5:00 PM (SAST)\n• Saturday - Sunday: Closed\n\nFor urgent enquiries, message us on WhatsApp anytime — we'll respond as soon as possible!",
            options: ["Chat on WhatsApp", "Book a meeting", "Send me info"],
        };
    }

    if (
        containsAny(text, [
            "about",
            "who are",
            "company",
            "bolunga",
            "history",
            "story",
            "founded",
        ])
    ) {
        return {
            text: "🏢 **About Bolunga Systems:**\n\nFounded in 2012 as a Telecommunications company with Digital Radio installations. Today we're a fully-fledged ICT company offering Outsourcing, Consulting, People Solutions and Health Promotion.\n\n'Bolunga' means *'Goodness will prevail'* in Nguni — our promise to every client.\n\n• 12+ years of experience\n• 100% Black Woman Owned\n• Level 1 BBBEE Contributor",
            options: [
                "Tell me about your services",
                "Tell me about your projects",
                "I want to be contacted",
            ],
        };
    }

    if (
        containsAny(text, [
            "bbbee",
            "bee",
            "black own",
            "empowerment",
            "transformation",
            "level",
        ])
    ) {
        return {
            text: "🏆 **Our BBBEE Status:**\n\n• 100% Black Woman Owned Business\n• Level 1 BBBEE Contributor\n• 135% Procurement Recognition\n• Proudly South African\n\nWe meet and exceed transformation requirements for both public and private sector procurement.",
            options: [
                "Tell me about your services",
                "Get a quote",
                "Talk to a human",
            ],
        };
    }

    if (
        containsAny(text, [
            "project",
            "case study",
            "portfolio",
            "work",
            "experience",
            "client",
        ])
    ) {
        return {
            text: "💼 **Our Track Record:**\n\n• 2,600+ projects completed\n• 845+ satisfied clients\n• 9 countries served\n• 137 expert team members\n\nWe've worked with banks, healthcare providers, government agencies, and manufacturing leaders across Africa.",
            options: [
                "Tell me about your services",
                "I want to be contacted",
                "Book a meeting",
            ],
        };
    }

    if (containsAny(text, ["industry", "industries", "sector", "vertical"])) {
        return {
            text: "🏭 **Industries We Transform:**\n\n• **Finance & Banking** — Secure transaction architectures\n• **Manufacturing & Logistics** — IoT-driven efficiency\n• **Healthcare Technology** — Compliant patient systems\n• **Government & Public Sector** — Modernized infrastructure\n\nWhich industry do you operate in?",
            options: ["Finance", "Manufacturing", "Healthcare", "Government"],
        };
    }

    if (
        containsAny(text, [
            "thank",
            "thanks",
            "appreciate",
            "awesome",
            "great",
            "perfect",
        ])
    ) {
        return {
            text: "You're very welcome! 😊 Is there anything else I can help you with?",
            options: ["I have another question", "Get a quote", "Book a meeting"],
        };
    }

    if (
        containsAny(text, [
            "angry",
            "frustrated",
            "complain",
            "terrible",
            "horrible",
            "bad",
            "useless",
        ])
    ) {
        return {
            text: "😔 I'm really sorry to hear that. Let me connect you with a human team member right away who can help resolve your concern.",
            options: [
                "Chat on WhatsApp",
                "I want to be contacted",
                "Talk to a human",
            ],
        };
    }

    if (
        containsAny(text, [
            "human",
            "person",
            "agent",
            "real",
            "someone",
            "team member",
            "representative",
        ])
    ) {
        return {
            text: "👤 Of course! You can reach a human team member by:\n\n• Clicking 'Chat on WhatsApp' below (instant)\n• Letting me capture your details for a callback\n• Booking a scheduled meeting",
            options: ["Chat on WhatsApp", "Capture my details", "Book a meeting"],
        };
    }

    if (containsAny(text, ["bye", "goodbye", "see you", "later", "cheers"])) {
        return {
            text: "👋 Goodbye! Feel free to come back anytime. Have a wonderful day!\n\nDon't forget you can always reach us on WhatsApp: 061 319 4196",
        };
    }

    return {
        text: "🤔 I'm not sure I caught that. I can help with information about our services, getting a quote, booking a meeting, or connecting you with our team.\n\nTry one of the options below, or rephrase your question!",
        options: CONTEXTUAL_REPLIES.default,
    };
}

// ============================================================
// BOT FACE — animated face with eyes, smile, blink, wave
// ============================================================
function BotFace({ isHovered }: { isHovered: boolean }) {
    return (
        <svg
            viewBox="0 0 64 64"
            className="w-8 h-8 sm:w-10 sm:h-10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Antenna */}
            <line
                x1="32"
                y1="6"
                x2="32"
                y2="14"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
            />
            <circle cx="32" cy="5" r="3" fill="#F7941D">
                <animate
                    attributeName="opacity"
                    values="1;0.3;1"
                    dur="1.5s"
                    repeatCount="indefinite"
                />
            </circle>

            {/* Head shape */}
            <rect
                x="12"
                y="14"
                width="40"
                height="36"
                rx="12"
                fill="white"
                stroke="white"
                strokeWidth="0.5"
            />

            {/* Left eye */}
            <g className="bot-eye-left">
                <circle cx="24" cy="30" r="4" fill="#1C2237" />
                <circle cx="25" cy="29" r="1.2" fill="white" />
            </g>

            {/* Right eye */}
            <g className="bot-eye-right">
                <circle cx="40" cy="30" r="4" fill="#1C2237" />
                <circle cx="41" cy="29" r="1.2" fill="white" />
            </g>

            {/* Cheeks (only show when hovered = happy) */}
            {isHovered && (
                <>
                    <circle cx="19" cy="38" r="2.5" fill="#F7941D" opacity="0.5" />
                    <circle cx="45" cy="38" r="2.5" fill="#F7941D" opacity="0.5" />
                </>
            )}

            {/* Smile */}
            <path
                d={isHovered ? "M 22 38 Q 32 48 42 38" : "M 22 40 Q 32 46 42 40"}
                stroke="#1C2237"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                className="transition-all duration-300"
            />

            {/* Ear bumps (sides) */}
            <rect x="8" y="26" width="4" height="10" rx="2" fill="white" />
            <rect x="52" y="26" width="4" height="10" rx="2" fill="white" />
        </svg>
    );
}

// ============================================================
// MAIN COMPONENT
// ============================================================
export function AskBolungaAI() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [unreadCount, setUnreadCount] = useState(0);
    const [flowMode, setFlowMode] = useState<FlowMode>("chat");
    const [leadStep, setLeadStep] = useState<LeadStep>("name");
    const [leadData, setLeadData] = useState<Partial<Lead>>({});
    const [showAdmin, setShowAdmin] = useState(false);
    const [leads, setLeads] = useState<Lead[]>([]);
    const [isHovered, setIsHovered] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                setMessages(parsed.messages || []);
            }
            const savedLeads = localStorage.getItem(LEADS_KEY);
            if (savedLeads) {
                setLeads(JSON.parse(savedLeads));
            }
        } catch {}
    }, []);

    useEffect(() => {
        if (messages.length > 0) {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify({ messages }));
            } catch {}
        }
    }, [messages]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.shiftKey && e.key === "L") {
                e.preventDefault();
                try {
                    const savedLeads = localStorage.getItem(LEADS_KEY);
                    setLeads(savedLeads ? JSON.parse(savedLeads) : []);
                } catch {
                    setLeads([]);
                }
                setShowAdmin(true);
            }
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    // Tooltip: show "Hi! Need help?" briefly every 12 seconds when closed
    useEffect(() => {
        if (open) {
            setShowTooltip(false);
            return;
        }
        const showInterval = setInterval(() => {
            setShowTooltip(true);
            setTimeout(() => setShowTooltip(false), 3500);
        }, 12000);

        // Show first tooltip after 4s
        const firstTimer = setTimeout(() => {
            setShowTooltip(true);
            setTimeout(() => setShowTooltip(false), 3500);
        }, 4000);

        return () => {
            clearInterval(showInterval);
            clearTimeout(firstTimer);
        };
    }, [open]);

    useEffect(() => {
        if (open) {
            inputRef.current?.focus();
            setUnreadCount(0);

            if (messages.length === 0) {
                setTimeout(() => {
                    addBotMessage(
                        "👋 Hi! I'm Bolunga AI, your virtual assistant. I can help you with services, quotes, bookings, and more!\n\nWhat would you like to explore?",
                        INITIAL_QUICK_REPLIES,
                    );
                }, 400);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    const addBotMessage = useCallback(
        (textContent: string, options?: string[]) => {
            setMessages((m) => [
                ...m,
                {
                    id: `${Date.now()}-${Math.random()}`,
                    from: "bot",
                    text: textContent,
                    timestamp: Date.now(),
                    type: options ? "options" : "text",
                    options,
                },
            ]);
            if (!open) setUnreadCount((c) => c + 1);
        },
        [open],
    );

    const addUserMessage = useCallback((textContent: string) => {
        setMessages((m) => [
            ...m,
            {
                id: `${Date.now()}-${Math.random()}`,
                from: "me",
                text: textContent,
                timestamp: Date.now(),
                type: "text",
            },
        ]);
    }, []);

    const formatTime = (ts: number) => {
        const d = new Date(ts);
        return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    };

    const handleLeadStep = (userInput: string) => {
        const trimmed = userInput.trim();

        switch (leadStep) {
            case "name":
                if (trimmed.length < 2) {
                    setTimeout(
                        () =>
                            addBotMessage(
                                "Please share your full name so I can address you properly.",
                            ),
                        600,
                    );
                    return;
                }
                setLeadData((d) => ({ ...d, name: trimmed }));
                setLeadStep("email");
                setTimeout(
                    () =>
                        addBotMessage(
                            `Nice to meet you, ${trimmed}! 😊\n\nWhat's your email address?`,
                        ),
                    700,
                );
                break;

            case "email":
                if (!isValidEmail(trimmed)) {
                    setTimeout(
                        () =>
                            addBotMessage(
                                "That doesn't look like a valid email. Please try again (e.g., name@company.com)",
                            ),
                        600,
                    );
                    return;
                }
                setLeadData((d) => ({ ...d, email: trimmed }));
                setLeadStep("phone");
                setTimeout(
                    () =>
                        addBotMessage("Great! What's the best phone number to reach you?"),
                    700,
                );
                break;

            case "phone":
                if (!isValidPhone(trimmed)) {
                    setTimeout(
                        () =>
                            addBotMessage(
                                "That phone number doesn't look right. Please use format like 0612345678 or +27612345678",
                            ),
                        600,
                    );
                    return;
                }
                setLeadData((d) => ({ ...d, phone: trimmed }));
                setLeadStep("service");
                setTimeout(
                    () =>
                        addBotMessage("Which service are you interested in?", [
                            "Technology Consulting",
                            "Cybersecurity",
                            "Telecom & Fibre",
                            "AI Training",
                            "Database Management",
                            "E-Waste Management",
                            "Other / Not Sure",
                        ]),
                    700,
                );
                break;

            case "service":
                setLeadData((d) => ({ ...d, service: trimmed }));
                setLeadStep("message");
                setTimeout(
                    () =>
                        addBotMessage(
                            "Almost done! Any specific message or question you'd like to share? (Or type 'skip' to finish)",
                        ),
                    700,
                );
                break;

            case "message":
                const finalMessage =
                    trimmed.toLowerCase() === "skip"
                        ? "(No additional message)"
                        : trimmed;
                const reference = generateReference(
                    flowMode === "meeting"
                        ? "MTG"
                        : flowMode === "quote-wizard"
                            ? "QUO"
                            : "LEAD",
                );
                const newLead: Lead = {
                    id: `${Date.now()}`,
                    name: leadData.name || "",
                    email: leadData.email || "",
                    phone: leadData.phone || "",
                    service: leadData.service || "",
                    message: finalMessage,
                    type:
                        flowMode === "meeting"
                            ? "meeting"
                            : flowMode === "quote-wizard"
                                ? "quote"
                                : "lead",
                    reference,
                    submittedAt: Date.now(),
                };

                try {
                    const existing = localStorage.getItem(LEADS_KEY);
                    const allLeads = existing ? JSON.parse(existing) : [];
                    allLeads.push(newLead);
                    localStorage.setItem(LEADS_KEY, JSON.stringify(allLeads));
                    setLeads(allLeads);
                } catch {}

                setLeadStep("done");
                setLeadData({});
                setFlowMode("chat");

                setTimeout(() => {
                    const typeLabel =
                        newLead.type === "meeting"
                            ? "meeting request"
                            : newLead.type === "quote"
                                ? "quote request"
                                : "details";
                    addBotMessage(
                        `✅ Thank you, ${newLead.name}!\n\nYour ${typeLabel} has been received.\n\n📋 **Reference:** ${reference}\n📧 We'll contact you within 24 hours at ${newLead.email}\n📞 Or on ${newLead.phone}\n\nIs there anything else I can help with?`,
                        ["Ask another question", "Chat on WhatsApp", "Close chat"],
                    );
                    setLeadStep("name");
                }, 800);
                break;
        }
    };

    const sendMessage = (messageText?: string) => {
        const userText = (messageText ?? text).trim();
        if (!userText) return;

        addUserMessage(userText);
        setText("");
        setIsTyping(true);

        setTimeout(
            () => {
                setIsTyping(false);

                if (flowMode !== "chat" && leadStep !== "done") {
                    handleLeadStep(userText);
                    return;
                }

                if (userText.toLowerCase().includes("close chat")) {
                    setOpen(false);
                    return;
                }

                if (userText.toLowerCase().includes("chat on whatsapp")) {
                    window.open(WHATSAPP_LINK, "_blank");
                    addBotMessage(
                        "✅ Opening WhatsApp for you! Is there anything else I can help with?",
                    );
                    return;
                }

                const reply = generateBotReply(userText);

                if (reply.triggerFlow) {
                    setFlowMode(reply.triggerFlow);
                    setLeadStep("name");
                    setTimeout(() => {
                        addBotMessage(reply.text);
                        setTimeout(
                            () => addBotMessage("Let's start — what's your full name?"),
                            800,
                        );
                    }, 200);
                } else {
                    addBotMessage(reply.text, reply.options);
                }
            },
            800 + Math.random() * 600,
        );
    };

    const clearConversation = () => {
        if (!confirm("Clear this conversation? This cannot be undone.")) return;
        setMessages([]);
        setFlowMode("chat");
        setLeadStep("name");
        setLeadData({});
        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch {}
        setTimeout(() => {
            addBotMessage(
                "👋 Fresh start! How can I help you today?",
                INITIAL_QUICK_REPLIES,
            );
        }, 300);
    };

    const exportLeads = () => {
        if (leads.length === 0) {
            alert("No leads to export yet.");
            return;
        }
        const headers = [
            "Reference",
            "Type",
            "Name",
            "Email",
            "Phone",
            "Service",
            "Message",
            "Submitted",
        ];
        const rows = leads.map((l) => [
            l.reference,
            l.type,
            l.name,
            l.email,
            l.phone,
            l.service,
            l.message.replace(/[\r\n,]/g, " "),
            new Date(l.submittedAt).toISOString(),
        ]);
        const csv = [headers, ...rows]
            .map((r) => r.map((c) => `"${c}"`).join(","))
            .join("\n");
        const blob = new Blob([csv], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `bolunga-leads-${Date.now()}.csv`;
        link.click();
        URL.revokeObjectURL(url);
    };

    const clearAllLeads = () => {
        if (!confirm("Delete ALL leads? This cannot be undone.")) return;
        localStorage.removeItem(LEADS_KEY);
        setLeads([]);
    };

    return (
        <>
            <style>{`
        /* Gentle continuous float */
        @keyframes botIdleFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-6px) rotate(-2deg); }
        }
        /* Big bounce + wave every cycle */
        @keyframes botAttentionWave {
          0%, 70%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
          75%           { transform: translateY(-18px) rotate(-8deg) scale(1.05); }
          80%           { transform: translateY(0) rotate(8deg) scale(1.05); }
          85%           { transform: translateY(-12px) rotate(-6deg) scale(1.05); }
          90%           { transform: translateY(0) rotate(4deg) scale(1.02); }
          95%           { transform: translateY(-4px) rotate(0deg) scale(1); }
        }
        /* Eye blink */
        @keyframes botBlink {
          0%, 92%, 100% { transform: scaleY(1); }
          95%, 97%      { transform: scaleY(0.1); }
        }
        /* Pulse ring */
        @keyframes chatPulse {
          0%, 100% { transform: scale(1);   opacity: 0.9; }
          50%      { transform: scale(1.25); opacity: 0;   }
        }
        /* Chat window bounce-in */
        @keyframes chatBounceIn {
          0%   { opacity: 0; transform: scale(0.95) translateY(10px); }
          100% { opacity: 1; transform: scale(1)    translateY(0);    }
        }
        /* Typing dot */
        @keyframes chatTypingDot {
          0%, 60%, 100% { transform: translateY(0);    opacity: 0.4; }
          30%           { transform: translateY(-6px); opacity: 1;   }
        }
        /* Tooltip slide-in */
        @keyframes botTooltipPop {
          0%   { opacity: 0; transform: translateX(10px) scale(0.9); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }

        /* Idle gentle float (default) */
        .bot-idle-float {
          animation: botIdleFloat 3s ease-in-out infinite,
                     botAttentionWave 8s ease-in-out infinite;
          transform-origin: center bottom;
        }
        /* Stop animation on hover */
        .bot-idle-float.bot-paused {
          animation: none;
          transform: translateY(-4px) scale(1.05);
          transition: transform 0.3s ease;
        }
        /* Eye blinking */
        .bot-eye-left, .bot-eye-right {
          animation: botBlink 5s ease-in-out infinite;
          transform-origin: center;
        }
        .bot-eye-right { animation-delay: 0.05s; }

        .chat-pulse-ring { animation: chatPulse 2.2s ease-in-out infinite; }
        .chat-bounce-in  { animation: chatBounceIn 0.3s ease-out; }
        .chat-typing-dot { animation: chatTypingDot 1.2s ease-in-out infinite; }
        .bot-tooltip-pop { animation: botTooltipPop 0.35s ease-out both; }

        @media (prefers-reduced-motion: reduce) {
          .bot-idle-float, .bot-eye-left, .bot-eye-right,
          .chat-pulse-ring, .chat-bounce-in, .chat-typing-dot, .bot-tooltip-pop {
            animation: none;
          }
        }
      `}</style>

            {/* ADMIN MODAL */}
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
                                    📊 Admin Panel — Captured Leads
                                </h2>
                                <p className="text-xs text-white/70 mt-0.5">
                                    Total: {leads.length} leads
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={exportLeads}
                                    className="bg-[#F7941D] hover:bg-[#FF7A00] px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-1.5"
                                >
                                    <Download size={14} /> Export CSV
                                </button>
                                <button
                                    onClick={clearAllLeads}
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
                            {leads.length === 0 ? (
                                <p className="text-center text-slate-500 py-12">
                                    No leads captured yet. They will appear here once users submit
                                    their details.
                                </p>
                            ) : (
                                <div className="space-y-3">
                                    {[...leads].reverse().map((l) => (
                                        <div
                                            key={l.id}
                                            className="border border-slate-200 rounded-xl p-4 hover:shadow-md transition"
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                          <span
                              className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${l.type === "meeting" ? "bg-blue-100 text-blue-700" : l.type === "quote" ? "bg-orange-100 text-orange-700" : "bg-green-100 text-green-700"}`}
                          >
                            {l.type.toUpperCase()}
                          </span>
                                                    <span className="ml-2 text-xs font-mono text-slate-500">
                            {l.reference}
                          </span>
                                                </div>
                                                <span className="text-xs text-slate-400">
                          {new Date(l.submittedAt).toLocaleString()}
                        </span>
                                            </div>
                                            <p className="font-bold text-slate-800">{l.name}</p>
                                            <p className="text-sm text-slate-600">
                                                📧 {l.email} · 📞 {l.phone}
                                            </p>
                                            <p className="text-sm text-slate-600 mt-1">
                                                <span className="font-semibold">Service:</span>{" "}
                                                {l.service}
                                            </p>
                                            {l.message && (
                                                <p className="text-sm text-slate-700 mt-2 bg-slate-50 p-2 rounded italic">
                                                    &ldquo;{l.message}&rdquo;
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <div className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-50 flex flex-col items-end gap-3">
                {/* CHAT WINDOW */}
                {open && (
                    <div
                        className="chat-bounce-in w-[calc(100vw-2rem)] sm:w-[420px] max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col"
                        style={{ height: "min(640px, calc(100vh - 7rem))" }}
                    >
                        {/* Header */}
                        <div className="relative flex items-center justify-between px-4 py-4 bg-gradient-to-r from-[#3D1A2E] via-[#5B1A6B] to-[#6B0AC9] text-white">
                            <div className="flex items-center gap-3">
                                <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#F7941D] to-[#FF7A00] flex items-center justify-center shadow-lg">
                                    <Sparkles size={18} className="text-white" />
                                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-[#5B1A6B]" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold">Ask Bolunga AI</div>
                                    <div className="text-xs text-white/80 flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                        Online · Replies instantly
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <a
                                    href={WHATSAPP_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Talk to a human"
                                    className="hover:bg-white/10 rounded-full p-1.5 transition flex items-center gap-1 text-xs font-semibold"
                                >
                                    <User size={14} />
                                    <span className="hidden sm:inline">Human</span>
                                </a>
                                <button
                                    onClick={clearConversation}
                                    title="Clear conversation"
                                    className="hover:bg-white/10 rounded-full p-1.5 transition"
                                >
                                    <Trash2 size={16} />
                                </button>
                                <button
                                    aria-label="Close chat"
                                    className="text-white/90 hover:text-white hover:bg-white/10 rounded-full p-1.5 transition-all"
                                    onClick={() => setOpen(false)}
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-slate-50 to-white">
                            <div className="flex flex-col gap-3">
                                {messages.map((m) => (
                                    <div key={m.id} className="chat-bounce-in">
                                        <div
                                            className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}
                                        >
                                            <div
                                                className={`${m.from === "me" ? "bg-gradient-to-r from-[#F7941D] to-[#FF7A00] text-white rounded-2xl rounded-tr-sm shadow-md" : "bg-white text-slate-800 rounded-2xl rounded-tl-sm border border-slate-200 shadow-sm"} px-4 py-2.5 max-w-[85%] whitespace-pre-line text-sm leading-relaxed`}
                                            >
                                                {m.text}
                                            </div>
                                        </div>
                                        <div
                                            className={`text-[10px] text-slate-400 mt-1 ${m.from === "me" ? "text-right" : "text-left"}`}
                                        >
                                            {formatTime(m.timestamp)}
                                        </div>
                                        {m.options && m.options.length > 0 && (
                                            <div className="flex flex-wrap gap-1.5 mt-2">
                                                {m.options.map((opt, j) => (
                                                    <button
                                                        key={j}
                                                        onClick={() => sendMessage(opt)}
                                                        className="text-xs bg-white border border-[#F7941D]/40 hover:border-[#F7941D] hover:bg-[#F7941D]/5 text-[#6B3FA0] hover:text-[#F7941D] rounded-full px-3 py-1.5 transition-all duration-300 font-semibold"
                                                    >
                                                        {opt}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}

                                {isTyping && (
                                    <div className="flex justify-start chat-bounce-in">
                                        <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm shadow-sm px-4 py-3 flex items-center gap-1">
                      <span
                          className="w-2 h-2 rounded-full bg-[#6B3FA0] chat-typing-dot"
                          style={{ animationDelay: "0s" }}
                      />
                                            <span
                                                className="w-2 h-2 rounded-full bg-[#6B3FA0] chat-typing-dot"
                                                style={{ animationDelay: "0.2s" }}
                                            />
                                            <span
                                                className="w-2 h-2 rounded-full bg-[#6B3FA0] chat-typing-dot"
                                                style={{ animationDelay: "0.4s" }}
                                            />
                                        </div>
                                    </div>
                                )}

                                <div ref={messagesEndRef} />
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-3 bg-white border-t border-slate-200">
                            <div className="flex gap-2 mb-2">
                                <input
                                    ref={inputRef}
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" && !e.shiftKey) {
                                            e.preventDefault();
                                            sendMessage();
                                        }
                                    }}
                                    placeholder={
                                        flowMode !== "chat"
                                            ? "Type your answer..."
                                            : "Type your message..."
                                    }
                                    className="flex-1 px-4 py-2.5 border border-slate-200 rounded-full focus:outline-none focus:border-[#F7941D] focus:ring-2 focus:ring-[#F7941D]/20 transition-all text-sm"
                                />
                                <button
                                    type="button"
                                    onClick={() => sendMessage()}
                                    disabled={!text.trim()}
                                    className="bg-gradient-to-r from-[#F7941D] to-[#FF7A00] hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-md hover:shadow-lg hover:shadow-[#F7941D]/40"
                                    aria-label="Send message"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                            <a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full text-xs text-slate-600 hover:text-[#25D366] py-1.5 transition-colors group"
                            >
                                <MessageCircle
                                    size={14}
                                    className="group-hover:scale-110 transition-transform"
                                />
                                <span>Chat directly on WhatsApp</span>
                                <ExternalLink size={11} />
                            </a>
                        </div>
                    </div>
                )}

                {/* Floating Button area (bot + tooltip) */}
                <div className="relative flex items-end gap-2">
                    {/* Tooltip bubble */}
                    {!open && showTooltip && (
                        <div className="bot-tooltip-pop relative bg-white text-[#1C2237] text-sm font-semibold px-4 py-2.5 rounded-2xl rounded-br-sm shadow-xl border border-slate-200 max-w-[200px]">
                            <span className="block">👋 Hi! Need help?</span>
                            <span className="block text-xs text-slate-500 font-normal mt-0.5">
                I&apos;m Bolunga AI
              </span>
                            {/* Tail */}
                            <span className="absolute -right-1.5 bottom-3 w-3 h-3 bg-white border-r border-b border-slate-200 rotate-[-45deg]" />
                        </div>
                    )}

                    {/* Bot button container */}
                    <div className="relative">
                        {/* Pulsing ring */}
                        {!open && (
                            <span className="absolute inset-0 rounded-full bg-[#F7941D]/40 chat-pulse-ring pointer-events-none" />
                        )}

                        {/* Unread badge */}
                        {!open && unreadCount > 0 && (
                            <span className="absolute -top-1 -right-1 z-20 w-6 h-6 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-lg">
                {unreadCount > 9 ? "9+" : unreadCount}
              </span>
                        )}

                        {/* Animated wrapper */}
                        <div
                            className={
                                open ? "" : `bot-idle-float ${isHovered ? "bot-paused" : ""}`
                            }
                        >
                            <button
                                aria-label={open ? "Close chat" : "Open AI chat"}
                                onClick={() => setOpen((s) => !s)}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className="relative z-10 w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-full shadow-2xl flex items-center justify-center bg-gradient-to-br from-[#F7941D] via-[#9333EA] to-[#6B0AC9] text-white border-2 border-white/30 hover:shadow-[0_10px_40px_-5px_rgba(247,148,29,0.7)] transition-shadow duration-300 overflow-hidden"
                            >
                                {open ? (
                                    <X size={26} />
                                ) : (
                                    <BotFace isHovered={isHovered} />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AskBolungaAI;
