import React, { useEffect, useState } from "react";
import "./banner.css";

export default function Banner({ movies }) {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const [bannerMovie, setBannerMovie] = useState(null);

  useEffect(() => {
    setRandomMovie();
  }, [movies]);

  function setRandomMovie() {
    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[randomIndex];
    setBannerMovie(randomMovie);
  }

  const headerStyle = {
    backgroundImage: bannerMovie
      ? `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0.3, 1.5)), url(${baseUrl}${bannerMovie.poster_path})`
      : "none",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      {bannerMovie && (
        <header className="banner" style={headerStyle}>
          <div className="banner_items">
            <div>
              <h1 className="banner_movie_title">{bannerMovie.title}</h1>
              <div className="banner_buttons">
                <button className="banner_button">PLAY</button>
                <button className="banner_button">MY LIST</button>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
}
