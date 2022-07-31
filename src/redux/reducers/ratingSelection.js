import { SET_RATING } from "../types/types";

const initialState = {
  film: [],
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

    default:
      return state;
  }
};
