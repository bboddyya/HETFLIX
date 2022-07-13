import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTop100 } from "../../../redux/actions/actions";
import "../Movie.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../../../utils/sliderSettings";
import { getRatingColor } from "../../../utils/getColor";

function Top100() {
  const dispatch = useDispatch();
  const movies100 = useSelector((state) => state.movie.movies100.movieList);

  useEffect(() => {
    dispatch(getTop100(1));
  }, []);
  return (
    <div>
      <div className="movie__card">
        <h1 className="movie__title">100 ПОПУЛЯРНЫХ ФИЛЬМОВ</h1>

        <Slider {...settings}>
          {movies100.map((el) => {
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
                  <img src={el.posterUrlPreview} />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Top100;
