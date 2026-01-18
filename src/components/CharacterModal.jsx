"use client";

import { X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import marvelWatchlist from "@/data";

export default function CharacterModal({ character, onClose }) {
    const { language, t } = useLanguage();

    if (!character) return null;

    // Get movie titles for appearances
    const getMovieTitles = () => {
        return character.movies
            .map((movieId) => {
                const movie = marvelWatchlist.find((m) => m.id === movieId);
                return movie ? movie.title : null;
            })
            .filter(Boolean);
    };

    const appearances = getMovieTitles();
    const stats = Object.entries(character.stats);

    return (
        <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-white border-4 border-comic-black shadow-comic max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 bg-comic-red text-white p-2 border-2 border-comic-black hover:bg-red-600 transition-colors"
                >
                    <X size={24} strokeWidth={3} />
                </button>

                {/* Hero Section */}
                <div className="relative">
                    {/* Name Banner */}
                    <div className="absolute top-4 left-4 z-10">
                        <div className="bg-comic-red text-white font-black text-2xl sm:text-3xl px-4 py-2 uppercase tracking-tight border-3 border-comic-black shadow-comic transform -rotate-2">
                            {character.name}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative h-72 sm:h-96 overflow-hidden border-b-4 border-comic-black">
                        <img
                            src={character.image}
                            alt={character.name}
                            className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Real Name & Debut */}
                        <div className="absolute bottom-4 left-4 right-4">
                            {character.realName !== character.name && (
                                <p className="text-lg text-gray-200">
                                    <span className="font-bold">{t("characters.realName")}:</span> {character.realName}
                                </p>
                            )}
                            <p className="text-sm text-gray-300 mt-1">
                                <span className="font-bold">{t("characters.debut") || "DEBUT"}:</span> {character.debut}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] bg-[length:10px_10px]">

                    {/* Power Stats Section */}
                    <div>
                        <h3 className="text-xl font-black uppercase bg-comic-red text-white px-3 py-1 inline-block -rotate-1 mb-4 border-2 border-comic-black">
                            {t("characters.powerStats") || "POWER STATS"}
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {stats.map(([statName, value]) => (
                                <div key={statName} className="bg-white border-2 border-comic-black p-2 shadow-comic-sm">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-xs font-bold uppercase text-gray-600">
                                            {statName}
                                        </span>
                                        <span className="text-sm font-black text-comic-red">
                                            {value}
                                        </span>
                                    </div>
                                    <div className="h-3 bg-gray-100 border border-comic-black overflow-hidden">
                                        <div
                                            className="h-full bg-comic-red"
                                            style={{ width: `${value}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Biography Section */}
                    <div>
                        <h3 className="text-xl font-black uppercase bg-comic-black text-white px-3 py-1 inline-block rotate-1 mb-3 border-2 border-comic-black">
                            {t("characters.biography")}
                        </h3>
                        <p className="text-lg leading-relaxed text-gray-800">
                            {character.bio[language]}
                        </p>
                    </div>

                    {/* Appearances Section */}
                    {appearances.length > 0 && (
                        <div>
                            <h3 className="text-xl font-black uppercase bg-comic-blue text-white px-3 py-1 inline-block -rotate-1 mb-3 border-2 border-comic-black">
                                {t("characters.appearances")} ({appearances.length})
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {appearances.map((title, index) => (
                                    <span
                                        key={index}
                                        className="bg-comic-yellow border-2 border-comic-black px-2 py-1 text-sm font-bold shadow-comic-sm"
                                    >
                                        {title}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="w-full py-3 bg-comic-red text-white font-black text-lg uppercase border-3 border-comic-black shadow-comic hover:shadow-comic-hover hover:-translate-y-1 transition-all"
                    >
                        {t("characters.close")}
                    </button>
                </div>
            </div>
        </div>
    );
}
