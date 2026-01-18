"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function CharacterCard({ character, onClick }) {
    const { t } = useLanguage();

    // Get the top 3 stats to display
    const getTopStats = () => {
        const stats = character.stats;
        const statEntries = Object.entries(stats);
        return statEntries.slice(0, 3);
    };

    const topStats = getTopStats();

    return (
        <div
            onClick={onClick}
            className="group cursor-pointer relative"
        >
            <div className="bg-white border-4 border-comic-black shadow-comic overflow-hidden transition-all duration-200 group-hover:-translate-y-3 group-hover:shadow-comic-hover">

                {/* Name Banner - Top */}
                <div className="relative">
                    <div className="absolute -top-1 -left-1 z-20">
                        <div className="bg-comic-red text-white font-black text-sm sm:text-base px-3 py-1 uppercase tracking-tight border-2 border-comic-black shadow-comic-sm transform -rotate-2 -skew-x-3">
                            {character.name}
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mt-6">
                    <img
                        src={character.image}
                        alt={character.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                            e.target.src = `https://via.placeholder.com/300x400?text=${character.name}`;
                        }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Click Badge */}
                    <div className="absolute top-2 right-2 bg-comic-yellow border-2 border-comic-black px-2 py-1 font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity transform rotate-6 shadow-comic-sm">
                        {t("characters.click") || "CLICK!"}
                    </div>
                </div>

                {/* Info Panel */}
                <div className="bg-white border-t-4 border-comic-black p-3">
                    {/* Debut Year */}
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold uppercase text-gray-600">
                            {t("characters.debut") || "DEBUT"}:
                        </span>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((dot) => (
                                <div
                                    key={dot}
                                    className={`w-2.5 h-2.5 rounded-full border border-comic-black ${dot <= Math.ceil((2025 - character.debut) / 4)
                                            ? "bg-comic-red"
                                            : "bg-gray-200"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="text-right text-sm font-black text-comic-black mb-3">
                        {character.debut}
                    </div>

                    {/* Power Stats */}
                    <div className="space-y-1.5">
                        {topStats.map(([statName, value]) => (
                            <div key={statName} className="flex items-center gap-2">
                                <span className="text-[10px] font-bold uppercase text-gray-600 w-16 truncate">
                                    {statName}
                                </span>
                                <div className="flex-1 h-2 bg-gray-100 border border-comic-black overflow-hidden">
                                    <div
                                        className="h-full bg-comic-red transition-all duration-700 group-hover:animate-pulse"
                                        style={{ width: `${value}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Accent */}
                <div className="h-1.5 bg-comic-red" />
            </div>
        </div>
    );
}
