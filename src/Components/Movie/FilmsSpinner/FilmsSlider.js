import "../Movie.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../../../utils/sliderSettings";
import { getRatingColor } from "../../../utils/getColor";
import { motion } from "framer-motion";

function FilmsSlider(props) {
  const movies = props.movies;

  return (
    <div className="movie__card">
      <div className="movie__title">
        <h1>250 ЛУЧШИХ ФИЛЬМОВ</h1>
        <span>Показать больше</span>
      </div>

      <Slider {...settings}>
        {movies.map((el) => {
          return (
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              key={el.filmId}
              className="movie__wrapper"
              onClick={() => console.log(el.filmId)}
            >
              <div className="movie__picture">
                <div
                  className="movie__rating"
                  style={{ backgroundColor: `${getRatingColor(el.rating)}` }}
                >
                  {el.rating}
                </div>
                <motion.img
                  src={el.posterUrlPreview}
                  alt={`${el.nameRu}`}
                  style={{ maxHeight: "430px" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
              </div>
            </motion.div>
          );
        })}
      </Slider>
    </div>
  );
}

export default FilmsSlider;
