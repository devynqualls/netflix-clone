
import React from "react";
import PropTypes from "prop-types";
import "./row.css"

const Row = ({ title, movies, isMainRow }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <div>
      <h2 className="row-title">{title}</h2>
      <div className="posters">
        {movies.map((movie) => (
          <img 
          key={movie.id}
          className={`row__poster ${isMainRow && "row_poster_main"}`}
          src={`${baseUrl}${isMainRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
        ))}
</div>    </div>
  );
};

Row.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
};

export default Row;
