import React from "react";
import { Movie } from "@/types";
import AddToFavorite from "@/components/AddToFavorite";
import { Button } from "./ui/button";

const MovieItem: React.FC<Movie> = ({
  Title,
  Year,
  imdbID,
  Type,
  Poster,
}: Movie) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <img src={Poster} alt={Title} className="w-full h-auto mb-4" />
      <h2 className="text-lg font-bold">{Title}</h2>
      <p className="text-sm">{Year}</p>
      <p className="text-sm">{Type}</p>
      <div className="flex justify-between items-center">
        <Button asChild variant="link" className="mt-4">
          <a
            href={`https://www.imdb.com/title/${imdbID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mt-2 block"
          >
            View on IMDb
          </a>
        </Button>
        <AddToFavorite imdbId={imdbID}></AddToFavorite>
      </div>
    </div>
  );
};

export default MovieItem;
