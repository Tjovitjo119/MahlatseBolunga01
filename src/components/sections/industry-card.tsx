type IndustryCardProps = {
    num: string;
    title: string;
    desc: string;
};

export function IndustryCard({ num, title, desc }: IndustryCardProps) {
    return (
        <div className="bg-[#F0F3FC] flex items-center gap-4 sm:gap-6 group p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl cursor-pointer border border-transparent hover:border-slate-100">
      <span className="text-3xl sm:text-4xl font-black text-[#B0B8C9] group-hover:text-[#6B3FA0] transition-colors duration-300 leading-none w-10 sm:w-12 shrink-0">
        {num}
      </span>
            <div>
                <p className="text-lg sm:text-xl font-bold text-[#1C2237] group-hover:text-[#6B3FA0] leading-tight mb-1 sm:mb-1.5 transition-colors duration-300">
                    {title}
                </p>
                <p className="text-sm md:text-base text-slate-500 group-hover:text-slate-700 leading-relaxed transition-colors duration-300">
                    {desc}
                </p>
            </div>
        </div>
    );
}