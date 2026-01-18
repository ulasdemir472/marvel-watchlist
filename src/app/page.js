"use client";

import { useState, useEffect } from "react";
import marvelWatchlist from "@/data";
import { useLanguage } from "@/context/LanguageContext";
import { Star, Trash2, ArrowUp } from "lucide-react";

export default function ComicPage() {
  const { t } = useLanguage();
  
  // State
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [ratings, setRatings] = useState({});
  const [filter, setFilter] = useState("all"); // 'all', 'watched', 'unwatched', 'year', 'phase'
  const [typeFilter, setTypeFilter] = useState("all"); // 'all', 'Movie', 'Series'
  const [watchedPercentage, setWatchedPercentage] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [askConfirmation, setAskConfirmation] = useState(true);

  // --- Effects ---

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initial Load
  useEffect(() => {
    const savedWatched = JSON.parse(localStorage.getItem("watchedMovies")) || [];
    const savedRatings = JSON.parse(localStorage.getItem("marvelRatings")) || {};
    setWatchedMovies(savedWatched);
    setRatings(savedRatings);
  }, []);

  // Sync Watched & Percentage
  useEffect(() => {
    localStorage.setItem("watchedMovies", JSON.stringify(watchedMovies));
    setWatchedPercentage(
      Math.round((watchedMovies.length / marvelWatchlist.length) * 100)
    );
  }, [watchedMovies]);

  // Sync Ratings
  useEffect(() => {
    localStorage.setItem("marvelRatings", JSON.stringify(ratings));
  }, [ratings]);

  // --- Handlers ---

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRating = (id, score) => {
    setRatings((prev) => ({ ...prev, [id]: score }));
  };

  const confirmMarkAllPrevious = (currentMovieIndex) => {
    const allPreviousMovies = marvelWatchlist
      .slice(0, currentMovieIndex + 1)
      .map((movie) => movie.id);

    const confirmMarkAll = window.confirm(
      t("main.markPreviousConfirm")
    );

    if (confirmMarkAll) {
      setWatchedMovies((prev) => [...new Set([...prev, ...allPreviousMovies])]);
      return true;
    } else {
      setAskConfirmation(false);
      return false;
    }
  };

  const handleSingleToggle = (id) => {
    setWatchedMovies((prev) =>
      prev.includes(id) ? prev.filter((mid) => mid !== id) : [...prev, id]
    );
  };

  const toggleWatched = (id) => {
    if (!watchedMovies.includes(id)) {
      const currentMovieIndex = marvelWatchlist.findIndex((m) => m.id === id);
      if (
        currentMovieIndex > 0 &&
        marvelWatchlist
          .slice(0, currentMovieIndex)
          .some((m) => !watchedMovies.includes(m.id))
      ) {
        if (askConfirmation) {
          const markedAll = confirmMarkAllPrevious(currentMovieIndex);
          if (!markedAll) handleSingleToggle(id);
          return;
        }
      }
    }
    handleSingleToggle(id);
  };

  const handleRemoveAll = () => {
    if (window.confirm(t("main.resetConfirm"))) {
      localStorage.removeItem("watchedMovies");
      localStorage.removeItem("marvelRatings");
      window.location.reload();
    }
  };

  // --- Render Helpers ---

  // Apply type filter helper
  const applyTypeFilter = (list) => {
    if (typeFilter === 'all') return list;
    return list.filter(m => m.type === typeFilter);
  };

  const renderContent = () => {
    if (filter === 'phase') {
      // Group by Phase - handle all phase names properly
      const phaseGroups = {};
      const phaseOrder = ['Phase 6', 'Phase 5', 'Phase 4', 'Phase 3', 'Phase 2', 'Phase 1', 'Defenders Saga', 'Marvel Television', 'Animation'];
      
      // Initialize all phase groups
      phaseOrder.forEach(p => phaseGroups[p] = []);
      
      // Apply type filter first, then group
      applyTypeFilter(marvelWatchlist).forEach(m => {
        if (m.phase && phaseGroups[m.phase] !== undefined) {
          phaseGroups[m.phase].push(m);
        } else if (m.phase) {
          // Handle any new phases
          if (!phaseGroups[m.phase]) phaseGroups[m.phase] = [];
          phaseGroups[m.phase].push(m);
        }
      });

      // Render phases in order, skip empty ones
      return phaseOrder
        .filter(phaseName => phaseGroups[phaseName] && phaseGroups[phaseName].length > 0)
        .map(phaseName => (
          <div key={phaseName} className="mb-20 relative border-l-8 border-comic-black ml-2 md:ml-8 pl-8 py-8">
            {/* Phase Header Balloon */}
            <div className="absolute -left-6 -top-4 bg-comic-red text-white font-black text-3xl px-6 py-3 -rotate-2 border-4 border-comic-black shadow-comic z-10">
              {phaseName.toUpperCase()}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
              {phaseGroups[phaseName].map(movie => (
                <MovieCard 
                  key={movie.id} 
                  movie={movie} 
                  isWatched={watchedMovies.includes(movie.id)}
                  rating={ratings[movie.id] || 0}
                  onToggle={() => toggleWatched(movie.id)}
                  onRate={(score) => handleRating(movie.id, score)}
                  t={t}
                />
              ))}
            </div>
          </div>
        ));
    }

    // Default Grid - apply type filter to all views
    let displayedList = applyTypeFilter(marvelWatchlist);
    if (filter === "year") displayedList = applyTypeFilter([...marvelWatchlist]).sort((a, b) => a.year - b.year);
    else if (filter === "watched") displayedList = applyTypeFilter(marvelWatchlist).filter(m => watchedMovies.includes(m.id));
    else if (filter === "unwatched") displayedList = applyTypeFilter(marvelWatchlist).filter(m => !watchedMovies.includes(m.id));

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {displayedList.map(movie => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
            isWatched={watchedMovies.includes(movie.id)}
            rating={ratings[movie.id] || 0}
            onToggle={() => toggleWatched(movie.id)}
            onRate={(score) => handleRating(movie.id, score)}
            t={t}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen pb-12 overflow-x-hidden">
      
      {/* Hero Header */}
      <div className="relative bg-comic-white border-b-4 border-comic-black mb-12 transform skew-y-1">
        <div className="container mx-auto px-4 py-12 transform -skew-y-1">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            
            <div className="relative inline-block">
              <h1 className="text-6xl md:text-8xl font-black text-comic-red uppercase tracking-tighter text-stroke drop-shadow-comic">
                {t("main.title")}
              </h1>
              <span className="absolute -top-6 -right-8 bg-comic-yellow border-2 border-comic-black px-4 py-1 rotate-12 text-sm font-bold shadow-comic-sm">
                {t("main.assemble")}
              </span>
            </div>

            <p className="max-w-xl text-xl font-bold bg-comic-black text-white px-6 py-2 -rotate-1 shadow-comic">
              {t("main.subtitle")}
            </p>

            {/* Progress Bar */}
            <div className="w-full max-w-md mt-6">
              <div className="flex justify-between text-lg font-bold mb-1">
                <span>{t("main.missionProgress")}</span>
                <span>{watchedPercentage}%</span>
              </div>
              <div className="w-full h-8 bg-white border-4 border-comic-black shadow-comic-sm p-1">
                <div 
                  className="h-full bg-comic-blue transition-all duration-500 ease-out relative overflow-hidden"
                  style={{ width: `${watchedPercentage}%` }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[length:4px_4px] opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        
        {/* Controls Panel */}
        <div className="bg-white border-4 border-comic-black p-4 mb-12 shadow-comic max-w-5xl mx-auto flex flex-wrap gap-4 justify-center items-center relative z-20">
          {/* Sort Order Filters */}
          <FilterButton active={filter === 'all'} onClick={() => setFilter('all')} label={t("main.storyOrder")} />
          <FilterButton active={filter === 'year'} onClick={() => setFilter('year')} label={t("main.releaseYear")} />
          <FilterButton active={filter === 'phase'} onClick={() => setFilter('phase')} label={t("main.phaseTimeline")} />
          {/* <FilterButton active={filter === 'watched'} onClick={() => setFilter('watched')} label="Completed" /> */}
          {/* <FilterButton active={filter === 'unwatched'} onClick={() => setFilter('unwatched')} label="Pending" /> */}
          
          <div className="h-8 w-1 bg-comic-black mx-2 hidden md:block"></div>
          
          {/* Type Filters */}
          <FilterButton active={typeFilter === 'all'} onClick={() => setTypeFilter('all')} label={t("main.allTypes")} variant="type" />
          <FilterButton active={typeFilter === 'Movie'} onClick={() => setTypeFilter('Movie')} label={t("main.movies")} variant="type" />
          <FilterButton active={typeFilter === 'Series'} onClick={() => setTypeFilter('Series')} label={t("main.series")} variant="type" />
          
          <div className="h-8 w-1 bg-comic-black mx-2 hidden md:block"></div>
          
          <button 
            onClick={handleRemoveAll}
            className="group px-4 py-2 bg-comic-red text-white font-bold border-2 border-comic-black shadow-comic-sm hover:shadow-comic-hover hover:-translate-y-1 transition-all flex items-center gap-2"
          >
            <Trash2 size={18} className="stroke-[3]" />
            {t("main.reset")}
          </button>
        </div>

        {/* Dynamic Content */}
        {renderContent()}

      </div>

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-comic-red text-white p-4 border-4 border-comic-black shadow-comic hover:shadow-comic-hover hover:-translate-y-1 transition-all z-50 rounded-none"
        >
          <ArrowUp size={32} strokeWidth={3} />
        </button>
      )}

    </div>
  );
}

function FilterButton({ active, onClick, label, variant }) {
  const baseClass = "px-4 py-2 font-bold border-2 border-comic-black shadow-comic-sm transition-all hover:-translate-y-1 uppercase tracking-tight";
  const activeClass = variant === 'type' 
    ? (active ? 'bg-comic-blue text-white' : 'bg-white text-gray-700 hover:bg-gray-50')
    : (active ? 'bg-comic-yellow text-black' : 'bg-white text-gray-700 hover:bg-gray-50');
  
  return (
    <button
      onClick={onClick}
      className={`${baseClass} ${activeClass}`}
    >
      {label}
    </button>
  );
}

function MovieCard({ movie, isWatched, rating, onToggle, onRate, t }) {
  return (
    <div className="relative group h-full">
      <div className="bg-white border-4 border-comic-black shadow-comic h-full flex flex-col transition-transform duration-200 group-hover:-translate-y-2 group-hover:shadow-comic-hover">
        
        {/* Image Frame */}
        <div className="relative border-b-4 border-comic-black overflow-hidden bg-gray-200 aspect-[2/3]">
          <img 
            src={movie.poster} 
            alt={movie.title}
            className={`w-full h-full object-cover transition-all duration-300 ${isWatched ? 'grayscale-[50%] sepia-[30%]' : 'group-hover:scale-105'}`}
          />
          
          {isWatched && (
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/20 backdrop-blur-[2px]">
              <div className="border-4 border-comic-red p-2 -rotate-12 bg-white/90 shadow-comic cursor-default">
                <span className="text-4xl font-black text-comic-red uppercase tracking-widest px-4 border-2 border-comic-red border-dashed">
                  {t("main.watched")}
                </span>
              </div>
            </div>
          )}

          {/* Type Badge */}
          <div className="absolute top-2 right-2 bg-comic-blue text-white border-2 border-comic-black px-2 py-1 font-bold text-xs shadow-comic-sm z-20 uppercase transform rotate-2">
            {movie.type.toLowerCase() === 'series' ? t("common.series") : t("common.movie")}
          </div>

          <div className="absolute top-2 left-2 bg-comic-yellow border-2 border-comic-black px-2 py-1 font-bold text-xs shadow-comic-sm z-20">
            #{movie.id}
          </div>
        </div>

        {/* Caption Box */}
        <div className="p-4 flex flex-col flex-grow bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] bg-[length:10px_10px]">
          <h2 className="text-xl font-bold leading-none mb-2 line-clamp-2 uppercase">
            {movie.title}
          </h2>
          <p className="text-sm font-bold bg-black text-white px-2 py-1 w-fit mb-4 -rotate-1">
            {t("main.year")}: {movie.year}
          </p>

          <div className="mt-auto space-y-3">
            {/* Rating Stars */}
            <div className="flex items-center gap-1 justify-center bg-white border-2 border-comic-black p-1 shadow-sm">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={(e) => { e.stopPropagation(); onRate(star); }}
                  className="focus:outline-none transition-transform active:scale-90 hover:scale-110"
                >
                  <Star 
                    size={20} 
                    className={`stroke-[3px] ${star <= rating ? 'fill-comic-yellow text-comic-black' : 'text-gray-300 fill-gray-100'}`}
                  />
                </button>
              ))}
            </div>

            {/* Action Button */}
            <button
              onClick={onToggle}
              className={`w-full py-2 font-black border-2 border-comic-black shadow-comic-sm transition-all active:translate-y-1 active:shadow-none flex items-center justify-center gap-2 uppercase tracking-wider
                ${isWatched 
                  ? 'bg-gray-200 text-gray-500 hover:bg-gray-300' 
                  : 'bg-comic-blue text-white hover:bg-blue-400'
                }`}
            >
              {isWatched ? t("main.revisitMission") : t("main.completeMission")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
