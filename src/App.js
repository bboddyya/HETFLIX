import React from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import Movie from "./Components/Movie/Movie";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";

function App() {
  const [spinOn, setSpinOn] = useState(true);
  const films250Ready = useSelector((state) => state.movie.movies250.isLoading);
  const films100Ready = useSelector((state) => state.movie.movies100.isLoading);
  const filmsAwaitReady = useSelector(
    (state) => state.movie.moviesAwait.isLoading
  );

  // useEffect(() => {}, [films250Ready, films100Ready, filmsAwaitReady]);
  return (
    <div className="App">
      <Header />
      <Movie />
      {/* {films250Ready && films100Ready && filmsAwaitReady ? (
        <ClipLoader
          color="red"
          loading
          size={100}
          speedMultiplier={0.8}
          className="movie__spinner"
        />
      ) : (
        <Movie />
      )} */}
    </div>
  );
}

export default App;
