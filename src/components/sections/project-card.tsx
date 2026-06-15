import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  title: string;
  category: string;
  image?: string;
  description?: string;
  slug?: string;
  ctaText?: string;
  client?: string;
  year?: string;
};

export function ProjectCard({
  title,
  category,
  image,
  description,
  slug,
  ctaText = "View Case Study",
  client,
  year,
}: ProjectCardProps) {
  const href = slug ? `/projects#${slug}` : "/projects";

  return (
    <Link
      href={href}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-slate-100 hover:border-[#F7941D]/30 flex flex-col h-full"
    >
      {/* Image */}
      {image ? (
        <div className="relative w-full h-56 overflow-hidden bg-slate-100 shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Category badge */}
          <span className="absolute top-4 left-4 bg-gradient-to-r from-[#F7941D] to-[#FF7A00] text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
            {category}
          </span>

          {/* Hover arrow icon */}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/0 group-hover:bg-white flex items-center justify-center transition-all duration-500 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 shadow-lg">
            <ArrowUpRight
              className="w-5 h-5 text-[#6B3FA0]"
              strokeWidth={2.5}
            />
          </div>

          {/* Year on hover */}
          {year && (
            <div className="absolute bottom-4 right-4 bg-white/95 text-[#1C2237] text-xs font-black px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 shadow-md">
              {year}
            </div>
          )}
        </div>
      ) : (
        <div className="px-5 sm:px-6 pt-5 sm:pt-6 shrink-0">
          <span className="inline-block bg-gradient-to-r from-[#F7941D] to-[#FF7A00] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
            {category}
          </span>
        </div>
      )}

      {/* Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 relative">
        {/* Top accent line on hover */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6B3FA0] to-[#F7941D] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

        <h3 className="text-lg sm:text-xl font-bold text-[#1C2237] mb-3 leading-tight group-hover:text-[#6B3FA0] transition-colors duration-300 line-clamp-2 min-h-[3.5rem]">
          {title}
        </h3>

        <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1 line-clamp-3">
          {description ??
            "A high-impact delivery case focused on speed, scale, and reliability."}
        </p>

        {/* Client info */}
        {client && (
          <div className="flex items-center gap-2 mb-4 text-xs text-slate-400 pt-3 border-t border-slate-100">
            <span className="font-semibold text-slate-500">Client:</span>
            <span>{client}</span>
          </div>
        )}

        {/* CTA */}
        <span className="text-sm font-bold text-[#6B3FA0] group-hover:text-[#F7941D] inline-flex items-center gap-2 transition-all duration-300 mt-auto">
          {ctaText}
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
