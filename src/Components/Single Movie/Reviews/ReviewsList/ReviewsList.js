import { useSelector } from "react-redux";

function ReviewsList({ id }) {
  const reviewsList = useSelector((state) => state.ratingSelection.reviews);
  const reviewsById = reviewsList.filter((el) => el.id === id);
  const [reviewsExist] = reviewsById;
  console.log(reviewsExist);
  return (
    <div className="reviews-list__wrapper">
      {reviewsExist ? (
        reviewsById.reverse().map((el) => {
          return (
            <div className="reviews-list__element" key={el.date}>
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
        })
      ) : (
        <div style={{ color: "#deddda" }} className="reviews-list__plug">
          <h1>Рецензий пока что нет.</h1>
          <h2>Напишите первым!</h2>
        </div>
      )}
    </div>
  );
}

export default ReviewsList;
