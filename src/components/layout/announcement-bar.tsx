import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="bg-slate-950 py-2 text-center text-xs font-medium text-slate-100 sm:text-sm px-4">
      Bolunga Systems — scalable technology solutions for fast-growing teams.{" "}
      <Link
        href="/contact"
        className="text-[#F7941D] hover:text-white underline-offset-2 hover:underline transition-colors font-semibold ml-1"
      >
        Talk to us
      </Link>
    </div>
  );
}
