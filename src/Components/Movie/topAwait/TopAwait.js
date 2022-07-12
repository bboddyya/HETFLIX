import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTopAwait } from "../../../redux/actions/actions";

import "../Movie.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../../../utils/sliderSettings";
import { getRatingColor } from "../../../utils/getColor";

function TopAwait() {
  const dispatch = useDispatch();
  const movies100 = useSelector((state) => state.movie.moviesAwait);

  useEffect(() => {
    dispatch(getTopAwait(1));
  }, []);
  return (
    <div>
      <div className="movie__card">
        <h1 className="movie__title">САМЫЕ ОЖИДАЕМЫЕ ФИЛЬМЫ</h1>

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

export default TopAwait;
