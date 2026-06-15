import type { Metadata } from "next";
import { HomePageContent } from "@/components/sections/home-page-content";

export const metadata: Metadata = {
  title: "Home | Bolunga Systems",
  description:
    "Bolunga Systems delivers technology consulting, cybersecurity, telecommunications, fibre connectivity, AI training, and digital transformation solutions. 2600+ projects across 9 countries.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Home | Bolunga Systems",
    description:
      "Over 12 years delivering enterprise-grade technology solutions. 2600+ projects, 137 professional staff, 9 countries served.",
    url: "/",
  },
};

export default function HomePage() {
  return <HomePageContent />;
}
