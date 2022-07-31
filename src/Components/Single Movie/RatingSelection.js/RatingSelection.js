import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setRating } from "../../../redux/actions/actions";
import "./RatingSelection.scss";

export function RatingSelection(props) {
  const [hover, setHover] = useState(null);

  const dispatch = useDispatch();
  const rating = useSelector((state) => state.ratingSelection.film.rating);
  const handleRating = (ratingValue) => dispatch(setRating(ratingValue, id));
  const id = props.id;
  console.log(id);
  return (
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
            <FaStar
              size={40}
              className="rating-selection__star"
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              color={ratingValue <= (hover || rating) ? "white" : "grey"}
            />
            <div className="rating-selection__number">{index + 1}</div>
          </label>
        );
      })}
    </div>
  );
}

export default RatingSelection;
