import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getById, getStaff, getBoxOffice } from "../../redux/actions/actions";
import { MdOutlineBookmarkBorder, MdOutlineBookmark } from "react-icons/md";
import { getTime } from "../../utils/getTime";
import "./SingleMovie.scss";
import RatingSelection from "./RatingSelection.js/RatingSelection";
function SingleMovie() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getById(id));
    dispatch(getStaff(id));
    dispatch(getBoxOffice(id));
  }, []);

  const movie = useSelector((state) => state.movie.movieById.movie);
  const director = useSelector((state) => state.movie.staffData.director);
  const actors = useSelector((state) => state.movie.staffData.actors);
  const operator = useSelector((state) => state.movie.staffData.operator);
  const boxOffice = useSelector((state) => state.movie.boxOfficeData.boxOffice);
  const ratingValue = useSelector((state) => state.ratingSelection.film.rating);
  console.log(ratingValue);

  return (
    <div className="single-movie">
      <div className="single-movie__logo">
        <img src={movie.logoUrl} />{" "}
      </div>
      <div className="single-movie__header">
        <div className="single-movie__poster">
          <img src={movie.posterUrl} />
        </div>
        <div className="single-movie__header-info">
          <div className="single-movie__title-rating">
            <div className="single-movie__title">
              <div className="single-movie__title-ru">{`${movie.nameRu} (${movie.year})`}</div>
              <div className="single-movie__title-en">{movie.nameOriginal}</div>
              <div className="single-movie__favorites-buttons">
                <MdOutlineBookmarkBorder className="single-movie__delete icon" />
                <MdOutlineBookmark className="single-movie__favorites icon" />
              </div>
            </div>
            <div className="single-movie__rating">
              <div className="single-movie__rating-default">
                {movie.ratingKinopoisk}
              </div>
              <div className="single-movie__rating-user">{ratingValue}</div>
            </div>
          </div>
          <div className="single-movie__short-discription">
            {movie.description ?? movie.shortDescription}
          </div>
        </div>
      </div>
      <div className="single-movie__about">
        <h1 className="single-movie__about-title">О фильме</h1>
        <div className="about__block">
          <div className="about__title">Режиссер:</div>
          {director.map((el) => {
            return (
              <div className="about__link" key={el.staffId}>
                {el.nameRu}
              </div>
            );
          })}
        </div>
        <div className="about__block">
          <div className="about__title">Год:</div>
          <div className="about__link">{movie.year}</div>
        </div>
        <div className="about__block">
          <div className="about__title">Страна:</div>
          <div className="about__link">
            {movie.countries?.map((el, index, arr) => {
              if (index !== arr.length - 1) {
                return <span>{`${el.country}, `}</span>;
              }
              return <span>{el.country}</span>;
            })}
          </div>
        </div>
        <div className="about__block">
          <div className="about__title">Жанр:</div>
          <div className="about__link">
            {movie.genres?.map((el, index, arr) => {
              if (index !== arr.length - 1) {
                return <span>{`${el.genre}, `}</span>;
              }
              return <span>{el.genre}</span>;
            })}
          </div>
        </div>
        <div className="about__block">
          <div className="about__title">Бюджет:</div>
          {boxOffice.map((el) => {
            return (
              <div className="about__link">{`${
                el.symbol
              }${el.amount.toLocaleString()} `}</div>
            );
          })}
        </div>
        <div className="about__block">
          <div className="about__title">Время: </div>
          <div className="about__link">{getTime(movie?.filmLength)}</div>
        </div>
      </div>

      <div className="single-movie__rating-selection">
        <RatingSelection />
      </div>
      <div className="single-movie__same-films"></div>
    </div>
  );
}

export default SingleMovie;

//todo: переделать map с запятыми и span
