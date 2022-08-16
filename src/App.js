import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import MainPageContainer from "./Containers/MainPageContainer";
import PaginationContainer from "./Containers/PaginationContainer";
import UpArrow from "./Components/UpArrow.js/UpArrow";
import ScrollToTop from "./utils/ScrollToTop";
import FavoritesFilmsContainer from "./Containers/FavoritesFilmsContainer";
import SingleMovieContainer from "./Containers/SingleMovieContainer";
import Error from "./Components/Error/Error";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop>
        <Routes>
          <Route path="*" element={<MainPageContainer />} />
          <Route path="/films/:type" element={<PaginationContainer />} />
          <Route path="/film/:id" element={<SingleMovieContainer />} />
          <Route path="/favorite-films" element={<FavoritesFilmsContainer />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </ScrollToTop>

      <UpArrow />
    </BrowserRouter>
  );
}

export default App;
