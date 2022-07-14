import React from "react";
import Header from "../Header/Header";
import Movie from "../Movie/Movie";
import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";

function MainPage() {
  const films250Ready = useSelector((state) => state.movie.movies250.isLoading);

  return (
    <div className="App">
      <Header />
      {films250Ready ? (
        <ClipLoader
          color="red"
          loading
          size={100}
          speedMultiplier={0.8}
          className="movie__spinner"
        />
      ) : (
        <Movie />
      )}
    </div>
  );
}

export default MainPage;
