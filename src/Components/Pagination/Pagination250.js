import "../Pagination/Pagination.scss";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";

function Pagination250() {
  const movies = useSelector((state) => {
    return state.movie.moviesFullList250;
  });

  // const getMore = () => {
  //   dispatch(setPage());
  // };

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
