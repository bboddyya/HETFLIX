import React from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import Movie from "./Components/Movie/Movie";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";
import MainPageContainer from "./Containers/MainPageContainer";
function App() {
  return (
    <div className="App">
      <MainPageContainer />
    </div>
  );
}

export default App;
