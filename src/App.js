import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import MainPageContainer from "./Containers/MainPageContainer";
import PaginationContainer from "./Containers/PaginationContainer";
import UpArrow from "./Components/UpArrow.js/UpArrow";
import ScrollToTop from "./utils/ScrollToTop";
import FavoritesFilmsContainer from "./Containers/FavoritesFilmsContainer";
import SingleMovieContainer from "./Containers/SingleMovieContainer";
import Error from "./Components/Error/Error";
import { useSelector } from "react-redux/es/exports";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";

function App() {
  const isError = useSelector((state) => state.movie.errorStatus.isError);
  return (
    <>
      <div className="App">
        <Header />
        <ScrollToTop>
          {isError ? (
            <Error />
          ) : (
            <Routes>
              <Route path="/" element={<MainPageContainer />} />
              <Route path="/films/:type" element={<PaginationContainer />} />
              <Route path="/film/:id" element={<SingleMovieContainer />} />
              <Route
                path="/favorite-films"
                element={<FavoritesFilmsContainer />}
              />
              <Route path="*" element={<Error />} />
              <Route path="/about" element={<About />} />
            </Routes>
          )}
        </ScrollToTop>
        <UpArrow />
      </div>
      <Footer />
    </>
  );
}

export default App;
