import React from "react";
import PropTypes from "prop-types";
import "./row.css";
import YouTube from "react-youtube";

const Row = ({ title, movies, isMainRow }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
    /* "https://developers.google.com/youtube/player_parameters", */ autoplay: 1, }  
  }
  return (
    <div>
      <h2 className="row-title">{title}</h2>
      <div className="posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isMainRow && "row_poster_main"}`}
            src={`${baseUrl}${
              isMainRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* {trailerURL && <YouTube videoId={trailerURL} opts={opts} />} */}
    </div>
  );
};

Row.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
};

export default Row;
