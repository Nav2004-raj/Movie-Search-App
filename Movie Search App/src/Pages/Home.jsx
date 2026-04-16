import React, { useState, useEffect } from "react";
import "../css/Home.css";
import { fetchMovies, searchMovies } from "../Services/api";
import MovieCard from "../Components/MovieCard";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movieList = await fetchMovies();
        setMovies(movieList);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError("Failed to fetch movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (error) {
      console.log("Error searching movies:", error);
      setError("Failed to search movies. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="home">
        <form action="" onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search movies..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="movies-grid">
            {movies.map((movie) => {
              return <MovieCard movie={movie} key={movie.id} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
