import React, { useState } from "react";
import PropTypes from "prop-types";
import "./row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ title, movies, isMainRow }) => {
  const [trailerURL, setTrailerURL] = useState("")

  const baseUrl = "https://image.tmdb.org/t/p/original/";
  
  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
    /* "https://developers.google.com/youtube/player_parameters", */ autoplay: 1, }  
  }

  const handleClick = (movie) => {
    if (trailerURL) {
      setTrailerURL('')
    } else {
      movieTrailer(movie?.name || "")
      .then(url => {
        // https://www.youtube.com/watch?v=
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerURL(urlParams.get('v'))
          console.log(URL)
      })
      .catch((error) => console.log(error))
    }
  }

  return (
    <div>
      <h2 className="row-title">{title}</h2>
      <div className="posters">
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            key={movie.id}
            className={`row__poster ${isMainRow && "row_poster_main"}`}
            src={`${baseUrl}${
              isMainRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  );
};

Row.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
};

export default Row;
