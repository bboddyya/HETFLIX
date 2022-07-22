import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getById } from "../../redux/actions/actions";
import "./SingleMovie.scss";

function SingleMovie() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getById(id));
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
              <div className="single-movie__title-ru"></div>
              <div className="single-movie__title-en"></div>
            </div>
            <div className="single-movie__rating">
              <div className="single-movie__rating-default"></div>
              <div className="single-movie__rating-user"></div>
            </div>
          </div>
          <div className="single-movie__short-discription"></div>
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
