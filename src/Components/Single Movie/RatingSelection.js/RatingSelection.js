import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setRating } from "../../../redux/actions/actions";
export function RatingSelection() {
  const dispatch = useDispatch();
  const handleRating = (ratingValue) => dispatch(setRating(ratingValue));
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
              onClick={() => handleRating(ratingValue)}
            />
            <FaStar size={35} className="star" />
          </label>
        );
      })}
    </div>
  );
}

export default RatingSelection;
