import React from "react";
import Movie from "../Movie/Movie";
import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { memo } from "react";
// import "../LoaderSpiner/LoaderSpinerAdaptive.scss";

function MainPage() {
  const films250Loading = useSelector(
    (state) => state.movie.movies250.isLoading
  );
  const films100Loading = useSelector(
    (state) => state.movie.movies100.isLoading
  );
  const filmsAwaitLoading = useSelector(
    (state) => state.movie.moviesAwait.isLoading
  );

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            films250Loading && films100Loading && filmsAwaitLoading ? (
              <ClipLoader
                color="black"
                loading
                size={75}
                speedMultiplier={0.8}
                className="movie__spinner"
              />
            ) : (
              <Movie />
            )
          }
        />
      </Routes>
    </>
  );
}

export default memo(MainPage);
