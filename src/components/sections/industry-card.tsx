type IndustryCardProps = {
    num: string;
    title: string;
    desc: string;
};

export function IndustryCard({ num, title, desc }: IndustryCardProps) {
    return (
        <div className="bg-[#F0F3FC] flex items-center gap-3 sm:gap-4 md:gap-6 group p-3 sm:p-4 md:p-5 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-0.5 cursor-pointer border border-transparent hover:border-slate-100">
            <span className="text-2xl sm:text-3xl md:text-4xl font-black text-[#B0B8C9] group-hover:text-[#6B3FA0] transition-colors duration-300 leading-none w-8 sm:w-10 md:w-12 shrink-0">
                {num}
            </span>
            <div className="min-w-0">
                <p className="text-base sm:text-lg md:text-xl font-bold text-[#1C2237] group-hover:text-[#6B3FA0] leading-tight mb-1 sm:mb-1.5 transition-colors duration-300">
                    {title}
                </p>
                <p className="text-xs sm:text-sm md:text-base text-slate-500 group-hover:text-slate-700 leading-relaxed transition-colors duration-300">
                    {desc}
                </p>
            </div>
        </div>
    );
}
