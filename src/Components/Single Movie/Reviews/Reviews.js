import ReviewsInput from "./ReviewsInputs/ReviewsInputs";
import ReviewsList from "./ReviewsList/ReviewsList";
import "./Reviews.scss";
function Reviews(props) {
  const id = props.id;
  return (
    <div className="reviews__wrapper">
      <ReviewsInput id={id} />
      <ReviewsList />
    </div>
  );
}

export default Reviews;
