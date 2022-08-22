import { useMemo, useState } from "react";
import { FaStar } from "react-icons/fa";
import { GiPlainCircle } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { setRating } from "../../../redux/actions/actions";
import "./RatingSelection.scss";

export function RatingSelection(props) {
  const [hover, setHover] = useState(null);

  const { id } = props;
  const dispatch = useDispatch();
  const rating = useSelector((state) => state.ratingSelection.film);
  const ratingFiltred = useMemo(
    () => rating.filter((el) => el.id === id)?.[0]?.rating,
    [rating, id]
  );
  const handleRating = (ratingValue) => dispatch(setRating(ratingValue, id));
  return (
    <div className="single-movie__rating-selection">
      <h2>Оцените фильм</h2>
      <div className="rating-selection">
        {[...Array(10)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => handleRating(ratingValue, id)}
              />
              <GiPlainCircle
                className="rating-selection__star"
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                fill={
                  ratingValue <= (hover || ratingFiltred) ? "black" : "grey"
                }
              />
              <div className="rating-selection__number">{index + 1}</div>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default RatingSelection;
