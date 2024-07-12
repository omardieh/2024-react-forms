import { useState } from "react";
import moviesDataJSON from "../movies-data.json";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import FilterMovies from "./FilterMovies";

function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON);
  const [moviesData, setMoviesData] = useState(moviesDataJSON);

  const addNewMovie = (movieObj) => {
    setMovies((prev) => [movieObj, ...prev]);
    setMoviesData((prev) => [movieObj, ...prev]);
  };

  const filterMovieList = (str) => {
    let filteredMovies;
    if (str === "All") {
      filteredMovies = moviesData;
    } else {
      filteredMovies = moviesData.filter(
        (movie) => movie.title[0].toLowerCase() === str.toLowerCase()
      );
    }
    setMovies(filteredMovies);
  };

  return (
    <div>
      <h2>Movie List</h2>
      <FilterMovies filterMovieList={filterMovieList} />
      <AddMovie addNewMovie={addNewMovie} />
      {movies.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;
