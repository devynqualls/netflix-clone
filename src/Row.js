import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  options,
  fetchTrending,
  fetchPopular,
  fetchUpcoming,
} from "./requests";
import PropTypes from "prop-types";
import "./row.css"

const Row = ({ title, movies }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <div>
      <h2>{title}</h2>
      <div className="posters">
        {movies.map((movie) => (
          <img 
          className="row__poster"
          src={baseUrl + movie.poster_path} alt={movie.name} />
        ))}
</div>    </div>
  );
};

Row.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
};

export default Row;
