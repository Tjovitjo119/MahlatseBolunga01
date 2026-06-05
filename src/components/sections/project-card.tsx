import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
    title: string;
    category: string;
    image?: string;
    description?: string;
    slug?: string;
    ctaText?: string;
};

export function ProjectCard({
                                title,
                                category,
                                image,
                                description,
                                slug,
                                ctaText = "View Case Study",
                            }: ProjectCardProps) {
    const href = slug ? `/projects#${slug}` : "/projects";

    return (
        <Link
            href={href}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-100 flex flex-col"
        >
            {/* Image (optional) */}
            {image ? (
                <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 bg-[#F7941D] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            {category}
          </span>
                </div>
            ) : (
                <div className="px-5 sm:px-6 pt-5 sm:pt-6">
          <span className="inline-block bg-[#F7941D] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            {category}
          </span>
                </div>
            )}

            {/* Body */}
            <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#1C2237] mb-3 leading-tight group-hover:text-[#6B3FA0] transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
                    {description ??
                        "A high-impact delivery case focused on speed, scale, and reliability."}
                </p>
                <span className="text-sm font-bold text-[#6B3FA0] inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
          {ctaText}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
            </div>
        </Link>
    );
}
