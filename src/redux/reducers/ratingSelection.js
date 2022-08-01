import { SET_RATING, SET_REVIEW } from "../types/types";

const initialState = {
  film: [],
  reviews: [],
};

export const ratingSelection = (state = initialState, action) => {
  switch (action.type) {
    case SET_RATING:
      const { filmId, rating } = action;
      const { film } = state;
      const itemIndex = film.findIndex((el) => el.id === filmId);
      const newRatings = [
        ...film.slice(0, itemIndex),
        { id: filmId, rating },
        ...film.slice(itemIndex + 1),
      ];
      if (itemIndex + 1) {
        return {
          ...state,
          film: newRatings,
        };
      } else
        return {
          ...state,
          film: [...film, { id: filmId, rating }],
        };

    case SET_REVIEW: {
      const { reviews } = state;
      const { review } = action;
      return {
        ...state,
        reviews: [...reviews, review],
      };
    }

    default:
      return state;
  }
};
