import { Link } from "react-scroll";
import FavoriteButton from "../Favorite Button/FavoriteButton";
import { useSelector } from "react-redux";

function SingleMovieHeader({ id }) {
  const ratingValue = useSelector((state) =>
    state.ratingSelection.film.filter((el) => el.id === id)
  );
  const movie = useSelector((state) => state.movie.movieById.movie);

  return (
    <div className="single-movie__header">
      <div className="single-movie__poster">
        <img src={movie.posterUrl} />
      </div>
      <div className="single-movie__header-info">
        <div className="single-movie__title-rating">
          <div className="single-movie__title">
            <div className="single-movie__title-ru">{`${movie.nameRu} (${movie.year})`}</div>
            <div className="single-movie__title-en">{movie.nameOriginal}</div>
            <FavoriteButton movie={movie} />
          </div>
          <div className="single-movie__rating">
            <div className="single-movie__rating-default">
              {movie.ratingKinopoisk}
            </div>
            <Link
              className="single-movie__rating-user"
              to="test1"
              smooth={true}
              offset={-100}
              duration={300}
            >
              {ratingValue.length ? ratingValue[0].rating : "Оцените фильм"}
            </Link>
          </div>
        </div>
        <div className="single-movie__short-discription">
          {movie.description ?? movie.shortDescription}
        </div>
      </div>
    </div>
  );
}

export default SingleMovieHeader;
