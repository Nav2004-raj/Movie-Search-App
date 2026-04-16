import React from "react";
import "../css/MovieCard.css";
import { useMovieContext } from "../Contexts/MovieContext";

const MovieCard = ({ movie }) => {
  const { isfavourite, aadToFavs, removeFavs } = useMovieContext();
  const favourite = isfavourite(movie.id);

  function handleFavourite(e) {
    e.preventDefault();

    if (favourite) removeFavs(movie.id);
    else aadToFavs(movie);
  }

  return (
    <>
      <div className="movie-card">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />

          <div className="movie-overlay">
            <button
              className={`favorite-btn ${favourite ? "active" : ""}`}
              onClick={handleFavourite}
              aria-label={favourite ? "Remove from favourites" : "Add to favourites"}
            >
              {favourite ? "♥" : "♡"}
            </button>
          </div>
        </div>

        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date?.split("-")[0]}</p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
