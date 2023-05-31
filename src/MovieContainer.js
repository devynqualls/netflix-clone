import React, { useState, useEffect } from "react";
import Row from "./Components/Row";
import Banner from "./Components/Banner";
import './App.css'
import Navbar from "./Components/Navbar";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTc4N2I4NWFhYmViZmU4OTZjNjFmOGE5ZTJmZjRjMSIsInN1YiI6IjY0NzI2NWI1YmUyZDQ5MDBmOTkzYjVkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EN3A_cKDunza11lmfIJG2W72v_IuabvjOuiOsgPdjdk'
    ,
  },
};

export function fetchTrending() {
  return fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    options
  )
    .then((response) => response.json())
    .then((response) => response.results)
    .catch((err) => console.error(err));
}

export function fetchPopular() {
  return fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((response) => response.results)
    .catch((err) => console.error(err));
}

export function fetchUpcoming() {
  return fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((response) => response.results)
    .catch((err) => console.error(err));
}

function MovieContainer() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    // Fetch trending movies
    fetchTrending()
      .then((data) => {
        console.log("Trending Movies:", data);
        setTrendingMovies(data);
      })
      .catch((error) => {
        console.error(error);
      });

    // Fetch popular movies
    fetchPopular()
      .then((data) => {
        setPopularMovies(data);
      })
      .catch((error) => {
        console.error(error);
      });

    // Fetch upcoming movies
    fetchUpcoming()
      .then((data) => {
        setUpcomingMovies(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <Navbar/>
      {trendingMovies.length > 0 && <Banner movies={trendingMovies} />}
      {trendingMovies.length > 0 && (
        <Row title="TRENDING NOW" movies={trendingMovies} isMainRow />
      )}
      {upcomingMovies.length > 0 && (
        <Row title="UPCOMING" movies={upcomingMovies} />
      )}
      {popularMovies.length > 0 && (
        <Row title="POPULAR" movies={popularMovies} />
      )}
      {/* Add additional rows here with unique movie data */}
    </div>
  );
}

export default MovieContainer;
