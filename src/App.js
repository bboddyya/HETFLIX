import React from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import Movie from "./Components/Movie/Movie";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";

function App() {
  const [spinOn, setSpinOn] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSpinOn(false);
  //   }, 1300);
  // }, []);
  return (
    <div className="App">
      <Header />

      {spinOn ? (
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

export default App;
