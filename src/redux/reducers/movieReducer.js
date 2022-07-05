import { GET_250_MOVIES } from "../types/types";

const initialState = {
  movies250: [],
  movies100: [],
  moviesAwait: [],
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_250_MOVIES:
      return {
        ...state,
        movies250: action.data250,
      };

    default:
      return state;
  }
};
