import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRatingColor } from "../../../utils/getColor";
import { motion } from "framer-motion";
import InputLoading from "./InputLoading";

function SearchResults({ setShowResults, setText }) {
  const searchResults = useSelector(
    (state) => state.movie.inputSearch.movieList
  );
  const searchLoading = useSelector(
    (state) => state.movie.inputSearch.isLoading
  );

  const handleClick = () => {
    setShowResults(false);
    setText("");
  };

  return (
    <div
      className="header-wrapper__search-results"
      onFocus={() => setShowResults(true)}
      onClick={handleClick}
      onBlur={handleClick}
    >
      {searchLoading ? (
        <InputLoading />
      ) : (
        searchResults.map((el) => {
          return (
            <Link to={`/film/${el.filmId}`} key={el.filmId}>
              <motion.div
                className="search-result"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="search-result__card">
                  <div className="search-result__photo">
                    {" "}
                    <img className="photo" src={el.posterUrlPreview} />
                  </div>
                  <div className="search-result__title">
                    <div className="search-result__ru-title">{el.nameRu}</div>
                    <div className="search-result__en-title">
                      {el.nameEn && <span>{`${el.nameEn}, `}</span>}
                      {`${el.year}`}{" "}
                    </div>
                  </div>
                </div>
                {el.rating !== "null" && (
                  <div
                    className="search-result__rating"
                    style={{ color: `${getRatingColor(el.rating)}` }}
                  >
                    {el.rating}
                  </div>
                )}
              </motion.div>
            </Link>
          );
        })
      )}
    </div>
  );
}

export default SearchResults;
