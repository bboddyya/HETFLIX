import * as t from "../types/types";

const initialState = {
  movies250: { movieList: [], isLoading: false },
  movies100: { movieList: [], isLoading: false },
  moviesAwait: { movieList: [], isLoading: false },
  movieById: { movie: [], isLoading: false },
  staffData: {
    director: [],
    actors: [],
    operator: [],
    isLoading: false,
  },
  boxOfficeData: { boxOffice: [], isLoading: false },
  moviesSimilar: { movieList: [], isLoading: false },
  inputSearch: { movieList: [], isLoading: false },
  errorStatus: { isError: false },
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.GET_250_MOVIES: {
      return {
        ...state,
        movies250: {
          movieList: [...action.data250],
          isLoading: false,
        },
      };
    }
    case t.GET_250_ISLOADING: {
      const { movies250 } = state;
      return {
        ...state,

        movies250: { ...movies250, isLoading: true },
      };
    }

    case t.GET_100_MOVIES: {
      const { movies100 } = state;
      return {
        ...state,
        movies100: {
          ...movies100,
          movieList: [...action.data100],
          isLoading: false,
        },
      };
    }

    case t.GET_100_ISLOADING: {
      const { movies100 } = state;
      return {
        ...state,
        movies100: { ...movies100, isLoading: true },
      };
    }

    case t.GET_AWAIT_MOVIES: {
      const { moviesAwait } = state;

      return {
        ...state,
        moviesAwait: {
          ...moviesAwait,
          movieList: [...action.dataAwait],
          isLoading: false,
        },
      };
    }

    case t.GET_AWAIT_ISLOADING: {
      const { moviesAwait } = state;

      return {
        ...state,

        moviesAwait: { ...moviesAwait, isLoading: true },
      };
    }

    case t.GET_MOVIE_BY_ID: {
      return {
        ...state,
        movieById: { movie: action.dataById, isLoading: false },
      };
    }
    case t.GET_MOVIE_BY_ID_ISLOADING: {
      const { movieById } = state;
      return {
        ...state,
        movieById: { ...movieById, isLoading: true },
      };
    }

    case t.GET_BOX_OFFICE: {
      const { boxOfficeData } = state;
      return {
        ...state,
        boxOfficeData: {
          ...boxOfficeData,
          boxOffice: action.dataBoxOffice,
          isLoading: false,
        },
      };
    }

    case t.GET_BOX_OFFICE_ISLOADING: {
      const { boxOfficeData } = state;
      return {
        ...state,
        boxOfficeData: { ...boxOfficeData, isLoading: true },
      };
    }
    case t.GET_STAFF: {
      const { director } = action;
      const { staffData } = state;
      return {
        ...state,

        staffData: {
          ...staffData,
          director: director,
          isLoading: false,
        },
      };
    }
    case t.GET_STAFF_ISLOADING: {
      const { staffData } = state;
      return {
        ...state,
        staffData: { ...staffData, isLoading: true },
      };
    }

    case t.GET_SIMILARS: {
      const { moviesSimilar } = state;
      return {
        ...state,
        moviesSimilar: {
          ...moviesSimilar,
          movieList: action.similar,
          isLoading: false,
        },
      };
    }

    case t.GET_SIMILARS_ISLOADING: {
      const { moviesSimilar } = state;
      return {
        ...state,
        moviesSimilar: { ...moviesSimilar, isLoading: true },
      };
    }

    case t.GET_INPUT_FILMS: {
      const { inputSearch } = state;
      const { films } = action;
      return {
        ...state,
        inputSearch: { ...inputSearch, movieList: films, isLoading: false },
      };
    }
    case t.INPUT_FILMS_LOADING: {
      const { moviesSimilar } = state;
      return {
        ...state,
        inputSearch: { ...moviesSimilar, isLoading: true },
      };
    }

    case t.SET_ERROR_TRUE: {
      return {
        ...state,
        errorStatus: { isError: true },
      };
    }

    case t.SET_ERROR_FALSE: {
      return {
        ...state,
        errorStatus: { isError: false },
      };
    }

    default:
      return state;
  }
};
