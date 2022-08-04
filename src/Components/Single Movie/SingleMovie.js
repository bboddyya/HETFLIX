import { useSelector } from "react-redux";
import "./SingleMovie.scss";
import RatingSelection from "./RatingSelection/RatingSelection";
import { filmSLiderProperties } from "../../utils/filmsSliderProperties";
import FilmsSlider from "../Movie/FilmsSpinner/FilmsSlider";
import { Element } from "react-scroll";
import Reviews from "./Reviews/Reviews";
import SingleMovieHeader from "./Header/SingleMovieHeader";
import SingleMovieAbout from "./SingleMovieAbout/SingleMovieAbout";

function SingleMovie({ id }) {
  const movie = useSelector((state) => state.movie.movieById.movie);
  const similarMovie = useSelector(
    (state) => state.movie.moviesSimilar.movieList
  );
  const director = useSelector((state) => state.movie.staffData.director);
  const boxOffice = useSelector((state) => state.movie.boxOfficeData.boxOffice);
  const ratingValue = useSelector((state) =>
    state.ratingSelection.film.filter((el) => el.id === id)
  );

  return (
    <div className=".single-movie__wrapper" style={{ paddingTop: "30px" }}>
      <div className="single-movie">
        <SingleMovieHeader movie={movie} ratingValue={ratingValue} />
        <SingleMovieAbout
          director={director}
          boxOffice={boxOffice}
          movie={movie}
        />
        <Element name="test1" className="element">
          <div className="single-movie__rating-selection">
            <h2>Оцените фильм</h2>
            <RatingSelection id={id} />
          </div>
        </Element>
      </div>
      <div className="single-movie__same-films">
        <FilmsSlider
          movies={similarMovie}
          filmSLiderProperties={{ ...filmSLiderProperties.moviesSimilar }}
        />
      </div>
      <div className="single-movie__reviews">
        <Reviews id={id} />
      </div>
    </div>
  );
}

export default SingleMovie;
