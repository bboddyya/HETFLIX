import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTopAwait } from "../../../redux/actions/actions";

import "../Movie.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../../../utils/sliderSettings";
import { getAwaitRatingColor } from "../../../utils/getColor";

function TopAwait() {
  const dispatch = useDispatch();
  const moviesAwait = useSelector((state) => state.movie.moviesAwait.movieList);

  useEffect(() => {
    dispatch(getTopAwait(1));
  }, []);
  return (
    <div>
      <div className="movie__card">
        <h1 className="movie__title">САМЫЕ ОЖИДАЕМЫЕ ФИЛЬМЫ</h1>

        <Slider {...settings}>
          {moviesAwait.map((el) => {
            return (
              <div
                key={el.filmId}
                className="movie__wrapper"
                onClick={() => console.log(el.filmId)}
              >
                <div className="movie__picture" style={{ maxHeight: "430px" }}>
                  <div
                    className="movie__rating"
                    style={{
                      backgroundColor: `${getAwaitRatingColor(el.rating)}`,
                    }}
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
