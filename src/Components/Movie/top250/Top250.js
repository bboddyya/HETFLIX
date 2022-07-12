import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTop250 } from "../../../redux/actions/actions";
import "../Movie.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../../../utils/sliderSettings";
import { getRatingColor } from "../../../utils/getColor";

function Top250() {
  const dispatch = useDispatch();
  const movies250 = useSelector((state) => state.movie.movies250);
  useEffect(() => {
    dispatch(getTop250(1));
  }, []);

  return (
    <div className="movie__card">
      <h1 className="movie__title">250 ЛУЧШИХ ФИЛЬМОВ</h1>

      <Slider {...settings}>
        {movies250.map((el) => {
          return (
            <div
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
                <img src={el.posterUrlPreview} alt={`${el.nameRu}`} />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Top250;
