import type { Metadata } from "next";
import { ContactPageContent } from "@/components/sections/contact/contact-page-content";

export const metadata: Metadata = {
  title: "Contact | Bolunga Systems",
  description:
    "Get in touch with Bolunga Systems. Request a quote, ask a question, or chat with our team on WhatsApp. We respond within 24 hours.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
