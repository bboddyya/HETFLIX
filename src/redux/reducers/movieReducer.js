import {
  GET_250_MOVIES,
  GET_100_MOVIES,
  GET_AWAIT_MOVIES,
  GET_250_ISLOADING,
  GET_100_ISLOADING,
  GET_AWAIT_ISLOADING,
  GET_MOVIE_BY_ID,
  GET_MOVIE_BY_ID_ISLOADING,
  SET_PAGE,
  GET_250_MOVIES_FULL_LIST,
  CLEAR_250_LIST,
} from "../types/types";

const initialState = {
  movies250: { movieList: [], isLoading: false },
  movies100: { movieList: [], isLoading: false },
  moviesAwait: { movieList: [], isLoading: false },
  movieById: { movie: [], isLoading: false },
  moviesFullList250: [],
  pageForPagination: 4,
};

export const movieReducer = (state = initialState, action) => {
  const { movies250 } = state;
  const { movies100 } = state;
  const { moviesAwait } = state;
  const { movieById } = state;

  switch (action.type) {
    case GET_250_MOVIES:
      return {
        ...state,
        movies250: {
          movieList: [...action.data250],
          isLoading: false,
        },
      };
    case GET_250_ISLOADING:
      return {
        ...state,

        movies250: { ...movies250, isLoading: true },
      };

    // case GET_250_MOVIES_FULL_LIST:
    //   return {
    //     ...state,
    //     moviesFullList250: [state.moviesFullList250].concat(action.dataFull250),
    //   };

    case CLEAR_250_LIST:
      return {
        ...state,
        moviesFullList250: [],
      };
    case GET_100_MOVIES:
      return {
        ...state,
        movies100: {
          ...movies100,
          movieList: [...action.data100],
          isLoading: false,
        },
      };

    case GET_100_ISLOADING:
      return {
        ...state,

        movies100: { ...movies100, isLoading: true },
      };

    case GET_AWAIT_MOVIES:
      return {
        ...state,
        moviesAwait: {
          ...moviesAwait,
          movieList: [...action.dataAwait],
          isLoading: false,
        },
        //
      };

    case GET_AWAIT_ISLOADING:
      return {
        ...state,

        moviesAwait: { ...moviesAwait, isLoading: true },
      };

    case GET_MOVIE_BY_ID:
      return {
        ...state,
        movieById: { movie: action.dataById, isLoading: false },
      };

    case GET_MOVIE_BY_ID_ISLOADING:
      return {
        ...state,
        movieById: { ...movieById, isLoading: true },
      };

    case SET_PAGE:
      return {
        ...state,
        pageForPagination: state.pageForPagination + 1,
      };

    default:
      return state;
  }
};
