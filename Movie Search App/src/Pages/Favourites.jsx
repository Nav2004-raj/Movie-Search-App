import React from "react";
import "../css/Favourites.css";
import { useMovieContext } from "../Contexts/MovieContext";
import MovieCard from "../Components/MovieCard";

const Favourites = () => {
  const { favourites } = useMovieContext();

  if (favourites.length > 0) {
    return (
      <div className="favorites-container">
        <h2 className="favorites-title">Your Favourite Movies</h2>
        <div className="favorites-grid">
          {favourites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="favorites-empty">
        <h2>No favourite movies yet</h2>
        <p>Start adding movies to your favourites!</p>
      </div>
    </>
  );
};

export default Favourites;
