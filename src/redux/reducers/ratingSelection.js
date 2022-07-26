import { SET_RATING, SET_HOVER } from "../types/types";

const initialState = {
  film: { id: null, rating: null, hover: null },
};

export const ratingSelection = (state = initialState, action) => {
  switch (action.type) {
    case SET_RATING:

    default:
      return state;
  }
};
