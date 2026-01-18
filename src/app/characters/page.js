"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import characters from "@/data/characters";
import CharacterCard from "@/components/CharacterCard";
import CharacterModal from "@/components/CharacterModal";

export default function CharactersPage() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const filteredCharacters = characters.filter(
    (char) =>
      char.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      char.realName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pb-12">
      {/* Hero Header */}
      <div className="relative bg-comic-white border-b-4 border-comic-black mb-12 transform skew-y-1">
        <div className="container mx-auto px-4 py-12 transform -skew-y-1">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <div className="relative inline-block">
              <h1 className="text-5xl md:text-7xl font-black text-comic-blue uppercase tracking-tighter text-stroke drop-shadow-comic">
                {t("characters.title")}
              </h1>
              <span className="absolute -top-6 -right-8 bg-comic-red text-white border-2 border-comic-black px-4 py-1 rotate-12 text-sm font-bold shadow-comic-sm">
                {characters.length}+
              </span>
            </div>

            <p className="max-w-xl text-xl font-bold bg-comic-black text-white px-6 py-2 -rotate-1 shadow-comic">
              {t("characters.subtitle")}
            </p>

            {/* Search Bar */}
            <div className="w-full max-w-md mt-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="text"
                  placeholder={t("characters.searchPlaceholder")}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 text-lg font-bold border-4 border-comic-black shadow-comic focus:outline-none focus:shadow-comic-hover focus:-translate-y-1 transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {filteredCharacters.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-block bg-comic-yellow border-4 border-comic-black px-8 py-6 shadow-comic -rotate-2">
              <p className="text-2xl font-black uppercase">{t("characters.noResults")}</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {filteredCharacters.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
                onClick={() => setSelectedCharacter(character)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Character Modal */}
      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
}
