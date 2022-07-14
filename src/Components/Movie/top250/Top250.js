import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTop250 } from "../../../redux/actions/actions";
import "../Movie.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../../../utils/sliderSettings";
import { getRatingColor } from "../../../utils/getColor";

function Top250({ props }) {
  const dispatch = useDispatch();
  const movies250 = useSelector((state) => {
    console.log(state.movie.movies250.movieList);
    return state.movie.movies250.movieList;
  });

  console.log("props>", props);

  // useEffect(() => {
  //   dispatch(getTop250(1));
  // }, []);

  return (
    <div className="movie__card">
      <div className="movie__title">
        <h1>250 ЛУЧШИХ ФИЛЬМОВ</h1>
        <span>Показать больше</span>
      </div>

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
                <img
                  src={el.posterUrlPreview}
                  alt={`${el.nameRu}`}
                  style={{ maxHeight: "430px" }}
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Top250;
