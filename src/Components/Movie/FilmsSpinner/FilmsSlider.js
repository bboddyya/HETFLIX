import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../../../utils/sliderSettings";
import { Link } from "react-router-dom";
import { getRatingColor } from "../../../utils/getColor";
import { motion } from "framer-motion";
import "../Movie.css";
import "./FilmSpinnerAdaptive.scss";

function FilmsSlider(props) {
  const { movies } = props;
  const { url, title } = props.filmSLiderProperties;

  return (
    <div className="movie__card">
      <div className="movie__title">
        <h1>{title}</h1>
        <Link to={url}>
          <span>Показать больше</span>
        </Link>
      </div>

      <Slider {...settings} className="movie__slider">
        {movies.map((el) => {
          return (
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              key={el.filmId}
              className="movie__wrapper"
            >
              <Link to={`/film/${el.filmId}`}>
                <div className="movie__picture">
                  {el.rating && (
                    <div
                      className="movie__rating"
                      style={{
                        backgroundColor: `${getRatingColor(el.rating)}`,
                      }}
                    >
                      {el.rating}
                    </div>
                  )}

                  <motion.img
                    src={el.posterUrlPreview}
                    alt={`${el.nameRu}`}
                    style={{ maxHeight: "430px" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </Slider>
    </div>
  );
}

export default FilmsSlider;
