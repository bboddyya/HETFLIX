import { useSelector } from "react-redux";
import uniqid from "uniqid";

function ReviewsList({ id }) {
  const reviewsList = useSelector((state) => state.ratingSelection.reviews);

  const reviewsById = reviewsList.filter((el) => el.id === id);
  console.log(reviewsList);

  return (
    <div className="reviews-list__wrapper">
      {reviewsById.reverse().map((el) => {
        return (
          <div className="reviews-list__element" key={uniqid()}>
            <div className="reviews-list__header">
              <div className="reviews-list__name">{el.name}</div>
              <div className="reviews-list__date">{el.date}</div>
            </div>
            <div className="reviews-list__main">
              <h3 className="reviews-list__title">{el.title}</h3>
              <div className="reviews-list__text">{el.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ReviewsList;
