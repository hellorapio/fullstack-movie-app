import { useEffect, useState } from "react";
import { Movie } from "../types";
import MovieItem from "../components/MovieItem";
import { Input } from "./Input";

export default function MovieSearch() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [total, setTotal] = useState(0);

  async function searchMovies(signal: AbortSignal) {
    try {
      const res = await fetch(
        `http://localhost:3000/api/movies?q=${query}`,
        {
          signal,
        }
      );
      const data = await res.json();
      console.log(data.data);
      setTotal(data.data.totalResults);
      setMovies(data.data.Search || []);
    } catch (error) {
      if ((error as Error).name !== "AbortError") {
        console.error("Fetch error:", error);
      }
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (query.length > 2) {
      searchMovies(signal);
    }

    return () => {
      controller.abort();
    };
  }, [query]);

  return (
    <div className="space-y-4">
      <h2>Movie Search</h2>
      <Input value={query} onChange={(e) => setQuery(e.target.value)} />
      <p>{total} movies found</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {movies.map((movie) => (
          <MovieItem key={movie.imdbID} {...movie} />
        ))}
      </div>
    </div>
  );
}
