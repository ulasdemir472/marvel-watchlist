"use client";

import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import marvelWatchlist from "@/data";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

export default function Component() {
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [filter, setFilter] = useState("all");
  const [watchedPercentage, setWatchedPercentage] = useState(0);

  useEffect(() => {
    const savedWatchedMovies =
      JSON.parse(localStorage.getItem("watchedMovies")) || [];
    setWatchedMovies(savedWatchedMovies);
  }, []);

  useEffect(() => {
    localStorage.setItem("watchedMovies", JSON.stringify(watchedMovies));
    setWatchedPercentage(
      Math.round((watchedMovies.length / marvelWatchlist.length) * 100)
    );
  }, [watchedMovies]);

  const toggleWatched = (id) => {
    setWatchedMovies((prev) =>
      prev.includes(id)
        ? prev.filter((movieId) => movieId !== id)
        : [...prev, id]
    );
  };

  const filteredMoviesAndSeries = marvelWatchlist.filter((movie) => {
    if (filter === "all") return true;
    if (filter === "watched") return watchedMovies.includes(movie.id);
    if (filter === "unwatched") return !watchedMovies.includes(movie.id);
    return true;
  });

  const sortedList = [...marvelWatchlist].sort((a, b) => a.year - b.year);

  const filteredList = filter === "year" ? sortedList : filteredMoviesAndSeries;

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="w-full flex justify-center items-center text-4xl font-bold text-center mb-2 gap-3">
          <img src="/marvel.jpg" 
          className="w-20 h-14 rounded-md"
          />
          Movies Checklist
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Keep track of the Marvel movies you have watched!
        </p>

        <div className="text-center mb-4">
          <p className="text-lg font-medium">
            Watched Percentage: {watchedPercentage}%
          </p>
        </div>

        <div className="grid grid-cols-2 md:flex md:justify-center gap-4 mb-8">
          <Button
            onClick={() => setFilter("all")}
            variant={filter === "all" ? "default" : "outline"}
          >
            Sort By Story
          </Button>
          <Button
            onClick={() => setFilter("year")}
            variant={filter === "year" ? "default" : "outline"}
          >
            Sort By Year
          </Button>
          <Button
            onClick={() => setFilter("watched")}
            variant={filter === "watched" ? "default" : "outline"}
          >
            Watched
          </Button>
          <Button
            onClick={() => setFilter("unwatched")}
            variant={filter === "unwatched" ? "default" : "outline"}
          >
            Unwatched
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredList.map((movie) => {
            const isWatched = watchedMovies.includes(movie.id);
            return (
              <div
                key={movie.id}
                className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
                  isWatched ? "bg-green-50 scale-102" : ""
                }`}
              >
                <div className="relative">
                  <img
                    src={movie.poster}
                    alt={`${movie.title} poster`}
                    className="w-full object-cover"
                  />
                  {isWatched && (
                    <div className="absolute inset-0 bg-green-500 bg-opacity-30 flex items-center justify-center">
                      <CheckCircle className="w-16 h-16 text-white" />
                    </div>
                  )}
                </div>
                <div className="flex justify-between flex-col p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-semibold">{movie.title}</h2>
                    {isWatched ? (
                      <Badge
                        className="bg-red-500 text-white"
                      >
                        Watched
                      </Badge>
                    ) : (
                      <Badge
                        variant="secondary"
                        className="bg-gray-200 text-black"
                      >
                        Unwatched
                      </Badge>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{movie.year}</p>
                  <div className="flex items-center">
                    <Checkbox
                      id={`movie-${movie.id}`}
                      checked={isWatched}
                      onCheckedChange={() => toggleWatched(movie.id)}
                      className="w-6 h-6 border-2 border-primary"
                    />
                    <label
                      htmlFor={`movie-${movie.id}`}
                      className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {isWatched ? "Watched" : "Mark as watched"}
                    </label>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
