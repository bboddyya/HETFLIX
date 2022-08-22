import { getRatingColor } from "../../utils/getColor";
import { useSelector } from "react-redux/es/exports";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../FavoritesFilms/FavoritesFilms.scss";
import { memo } from "react";

function FavoritesFilms() {
  const favoriteFilms = useSelector((state) => state.ratingSelection.favorite);
  const [favoriteFilmsExists] = favoriteFilms;
  return (
    <div className="favorites-films">
      {favoriteFilmsExists ? (
        favoriteFilms
          .map((el) => {
            return (
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="favorites-films__film"
                key={el.id}
              >
                <Link to={`/film/${el.id}`}>
                  <div className="poster">
                    <img src={el.logo} />
                    <div
                      className="movie__rating"
                      style={{
                        backgroundColor: `${getRatingColor(el.rating)}`,
                      }}
                    >
                      {el.rating}
                    </div>
                  </div>
                </Link>

                <div className="title">{el.name}</div>
              </motion.div>
            );
          })
          .reverse()
      ) : (
        <div className="favorites-films__plug">
          <h1>Тут пока что пусто.</h1>
          <h2>Добавьте фильм в избранное и возвращайтесь!</h2>
        </div>
      )}
    </div>
  );
}

export default memo(FavoritesFilms);
