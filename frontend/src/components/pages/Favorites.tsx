"use client";

import { Movie } from "@/types";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";

export default function Favorites() {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchFavorites() {
      const userId = localStorage.getItem("auth");
      if (!userId) return redirect("/login");

      const res = await fetch(`http://localhost:3001/api/favorites`);
      const data = await res.json();
      setFavorites(data.favorites || []);
    }

    fetchFavorites();
  }, []);
  return (
    <main>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {favorites.map((movie) => (
          <div key={movie.imdbID} className="border p-4 rounded-md">
            <h2>{movie.Title}</h2>
            <p>Year: {movie.Year}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
