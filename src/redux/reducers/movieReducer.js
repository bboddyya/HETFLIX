import { MOVIES_LOAD } from "../types/types";

const initialState = {
  movies: [],
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIES_LOAD:
      return {};

    default:
      return state;
  }
};
