import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getById, getStaff, getBoxOffice } from "../../redux/actions/actions";
import "./SingleMovie.scss";

function SingleMovie() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getById(id));
    dispatch(getStaff(id));
    dispatch(getBoxOffice(id));
  }, []);

  const movie = useSelector((state) => state.movie.movieById.movie);

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
              <h1 className="single-movie__title-ru">{`${movie.nameRu} (${movie.year})`}</h1>
              <h6 className="single-movie__title-en">{movie.nameOriginal}</h6>
            </div>
            <div className="single-movie__rating">
              <div className="single-movie__rating-default">
                {movie.ratingKinopoisk}
              </div>
              <div className="single-movie__rating-user">7.3</div>
            </div>
          </div>
          <div className="single-movie__short-discription">
            {movie.shortDescription ?? movie.slogan}
          </div>
        </div>
      </div>
      <div className="single-movie__about">
        <div className="single-movie__director">
          <div className="about__title"></div>
          <div className="about__link"></div>
        </div>
        <div className="single-movie__year">
          <div className="about__title"></div>
          <div className="about__link"></div>
        </div>
        <div className="single-movie__countrie">
          <div className="about__title"></div>
          <div className="about__link"></div>
        </div>
        <div className="single-movie__genres">
          <div className="about__title"></div>
          <div className="about__link"></div>
        </div>
        <div className="single-movie__box_office">
          <div className="about__title"></div>
          <div className="about__link"></div>
        </div>
        <div className="single-movie__length">
          <div className="about__title"></div>
          <div className="about__link"></div>
        </div>
        <div className="single-movie__discription"></div>
        <div className="single-movie__rating-selection"></div>
        <div className="single-movie__same-films"></div>
      </div>
    </div>
  );
}

export default SingleMovie;

//todo:
