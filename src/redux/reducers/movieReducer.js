import {
  GET_250_MOVIES,
  GET_100_MOVIES,
  GET_AWAIT_MOVIES,
} from "../types/types";

const initialState = {
  movies250: { movieList: [], isLoading: true },
  movies100: { movieList: [], isLoading: true },
  moviesAwait: { movieList: [], isLoading: true },
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_250_MOVIES:
      return {
        ...state,
        movies250: { movieList: action.data250, isLoading: false },
        // isLoading: false,
      };

    case GET_100_MOVIES:
      return {
        ...state,
        movies100: { movieList: action.data100, isLoading: false },
        // isLoading: false,
      };

    case GET_AWAIT_MOVIES:
      return {
        ...state,
        moviesAwait: { movieList: action.dataAwait, isLoading: false },
        //
      };

    default:
      return state;
  }
};
