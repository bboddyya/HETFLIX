import {
  SET_RATING,
  SET_REVIEW,
  SET_FAVORITE,
  REMOVE_FAVORITE,
} from "../types/types";

const initialState = {
  film: [],
  reviews: [],
  favorite: [],
};

export const ratingSelection = (state = initialState, action) => {
  const { favorite } = state;

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

    case SET_FAVORITE:
      const { favoriteMovie } = action;

      return {
        ...state,
        favorite: [...favorite, favoriteMovie],
      };

    case REMOVE_FAVORITE:
      return (() => {
        const { favorite } = state;
        const { removeId } = action;
        const filtered = favorite.filter((el) => el.id !== removeId);

        return {
          ...state,
          favorite: filtered,
        };
      })();
    default:
      return state;
  }
};
