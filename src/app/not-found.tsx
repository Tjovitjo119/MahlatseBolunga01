import type { Metadata } from "next";
import { NotFoundContent } from "./not-found-content";

export const metadata: Metadata = {
  title: "Page Not Found | Bolunga Systems",
  description:
    "The page you're looking for doesn't exist or has been moved. Return to Bolunga Systems home or explore our services.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return <NotFoundContent />;
}
