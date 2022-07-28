import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import MainPageContainer from "./Containers/MainPageContainer";
import PaginationContainer from "./Containers/PaginationContainer";
import SingleMovie from "./Components/Single Movie/SingleMovie";
import UpArrow from "./Components/UpArrow.js/UpArrow";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<MainPageContainer />} />
        <Route path="/films/:type" element={<PaginationContainer />} />
        <Route path="/film/:id" element={<SingleMovie />} />
      </Routes>
      <UpArrow />
    </BrowserRouter>
  );
}

export default App;
