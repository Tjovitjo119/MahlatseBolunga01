type StatCardProps = {
    stat: string;
    label: string;
    description: string;
};

export function StatCard({ stat, label, description }: StatCardProps) {
    return (
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 sm:p-8 text-center group hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-default">
            <p className="text-4xl sm:text-5xl md:text-6xl font-black text-[#F7941D] mb-2 leading-none group-hover:scale-110 transition-transform duration-300">
                {stat}
            </p>
            <p className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                {label}
            </p>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                {description}
            </p>
        </div>
    );
}
