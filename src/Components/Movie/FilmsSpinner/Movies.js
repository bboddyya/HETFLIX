import "../Movie.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../../../utils/sliderSettings";
import { getRatingColor } from "../../../utils/getColor";

function FilmsSpinner(props) {
  const movies250 = props.movies250;

  console.log("props>", movies250);

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

export default FilmsSpinner;
