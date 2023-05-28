import axios from "axios";
import React, { useState, useEffect } from "react";
import { options, fetchTrending, fetchPopular, fetchUpcoming } from "./requests"
import PropTypes from 'prop-types';

const Row = ({ title, movies }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

Row.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
};

export default Row;
