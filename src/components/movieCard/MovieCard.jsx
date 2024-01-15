import React from "react";
import "./MovieCard.css";
function MovieCard(prpos) {
  return (
    <div className="bg-slate-800">
      <div className="movie-card movie-card relative transition-transform duration-500 cursor-pointer bg-white">
        <img
          src={`${import.meta.env.VITE_API_IMG_URL}/${prpos.poster_path}`}
          className="bg-cover"
        />
        <p className="movie-title absolute bottom-0 left-0 bg-black text-white w-full p-5 text-center opacity-0 transition duration-200">
          {prpos.title}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
