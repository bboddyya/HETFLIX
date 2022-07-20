import "../Pagination/Pagination.scss";
// import { useSelector,useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { configuration } from "../../utils/configurationForApi";
import { getRatingColor } from "../../utils/getColor";

function Pagination() {
  const [page, setPage] = useState(2);
  const [filmsList, setFilmsList] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    async function fetchFilms(page = 1) {
      const response = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${page}`,
        configuration
      );
      const data = await response.json();
      const { films } = await data;
      setFilmsList([...filmsList, ...films]);
    }
    fetchFilms();
  }, []);

  useEffect(() => {
    if (isLoading) {
      async function fetchFilms() {
        try {
          const response = await fetch(
            `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${page}`,
            configuration
          );
          const data = await response.json();
          const { films } = await data;
          setFilmsList([...filmsList, ...films]);
          setPage((current) => current + 1);
        } finally {
          setIsloading(false);
        }
      }
      fetchFilms();
    }
  }, [isLoading]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  });

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setIsloading(true);
    }
  };

  return (
    <div className="pagination">
      {filmsList.map((el) => {
        return (
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={el.filmId}
            className="pagination__film"
          >
            <div className="poster">
              <img src={el.posterUrlPreview} />
              <div
                className="movie__rating"
                style={{ backgroundColor: `${getRatingColor(el.rating)}` }}
              >
                {el.rating}
              </div>
            </div>
            <div className="title">{el.nameRu}</div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default Pagination;
