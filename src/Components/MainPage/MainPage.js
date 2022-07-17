import React from "react";
import Header from "../Header/Header";
import Movie from "../Movie/Movie";
import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { Routes, Link, Route } from "react-router-dom";
import SingleMovie from "../Movie/Single Movie/SingleMovie";
import Pagination250 from "../Pagination/Pagination250";

function MainPage() {
  const films250Ready = useSelector((state) => state.movie.movies250.isLoading);
  const films100Ready = useSelector((state) => state.movie.movies100.isLoading);
  const filmsAwaitReady = useSelector(
    (state) => state.movie.moviesAwait.isLoading
  );

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            films250Ready && films100Ready && filmsAwaitReady ? (
              <ClipLoader
                color="red"
                loading
                size={100}
                speedMultiplier={0.8}
                className="movie__spinner"
              />
            ) : (
              <Movie />
            )
          }
        />
        <Route path="/top" element={<Pagination250 />} />

        <Route path="/top250/:id" element={<SingleMovie />} />
      </Routes>
    </div>
  );
}

export default MainPage;
