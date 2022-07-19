import "../Pagination/Pagination.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFull250, cleanFull250 } from "../../redux/actions/actions";
import { setPage } from "../../redux/actions/actions";
import { motion } from "framer-motion";

function Pagination250() {
  const dispatch = useDispatch();

  const movies = useSelector((state) => {
    return state.movie.moviesFullList250;
  });
  const page = useSelector((state) => {
    return state.movie.pageForPagination;
  });

  const getMore = () => {
    dispatch(setPage());
  };

  useEffect(() => {
    dispatch(getFull250(1));
    dispatch(getFull250(2));
    dispatch(getFull250(3));
  }, []);

  useEffect(() => {
    dispatch(getFull250(page));
  }, [page]);

  return (
    <div className="pagination">
      {/* <button onClick={getMore}>more</button> */}
      {movies.map((el) => {
        return (
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            key={el.filmId}
            className="pagination__film"
          >
            <div className="poster">
              <img src={el.posterUrlPreview} />
            </div>
            <div className="title">{el.nameRu}</div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default Pagination250;
