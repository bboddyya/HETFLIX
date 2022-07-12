import {
  GET_250_MOVIES,
  GET_100_MOVIES,
  GET_AWAIT_MOVIES,
} from "../types/types";

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

    case GET_100_MOVIES:
      return {
        ...state,
        movies100: action.data100,
      };

    case GET_AWAIT_MOVIES:
      return {
        ...state,
        moviesAwait: action.dataAwait,
      };

    default:
      return state;
  }
};
