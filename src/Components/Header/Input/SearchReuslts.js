import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRatingColor } from "../../../utils/getColor";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { motion } from "framer-motion";

function SearchResults() {
  const [inFocus, setInFocus] = useState(false);
  const searchResults = useSelector(
    (state) => state.movie.inputSearch.movieList
  );
  const searchLoading = useSelector(
    (state) => state.movie.inputSearch.isLoading
  );
  const searchSlice = searchResults.slice(0, 10);

  return (
    <div
      className="header-wrapper__search-results"
      onClick={() => setInFocus(false)}
    >
      {searchLoading ? (
        <ClipLoader
          color="red"
          loading
          size={50}
          speedMultiplier={0.8}
          className="movie__spinner"
        />
      ) : (
        searchSlice.map((el) => {
          return (
            <Link to={`/film/${el.filmId}`}>
              <motion.div
                className="search-result"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={el.filmId}
              >
                <div className="search-result__card">
                  <div className="search-result__photo">
                    {" "}
                    <img className="photo" src={el.posterUrlPreview} />
                  </div>
                  <div className="search-result__title">
                    <div className="search-result__ru-title">{el.nameRu}</div>
                    <div className="search-result__en-title">
                      {`${el.nameEn}, ${el.year}`}{" "}
                    </div>
                  </div>
                </div>
                <div
                  className="search-result__rating"
                  style={{ color: `${getRatingColor(el.rating)}` }}
                >
                  {el.rating}
                </div>
              </motion.div>
            </Link>
          );
        })
      )}
    </div>
  );
}

export default SearchResults;
