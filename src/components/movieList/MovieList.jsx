import React from "react";
import MovieCard from "../movieCard/MovieCard";

function MovieList(props) {
  const renderMovies = props.movies.map((movie) => <MovieCard key={movie.id} {...movie} />);
  return <div className="overflow-hidden pt-12 grid grid-cols-5 gap-4">{renderMovies}</div>;
}

export default MovieList;
