import * as t from "../types/types";
import { configuration } from "../../api/configurationForApi";

export function getTop250(page) {
  return async (dispatch) => {
    try {
      dispatch({
        type: t.GET_250_ISLOADING,
      });
      const response = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${page}`,
        configuration
      );
      const { films } = await response.json();
      dispatch({
        type: t.GET_250_MOVIES,
        data250: films,
      });
    } catch (e) {
      dispatch({
        type: t.SET_ERROR_TRUE,
      });
    }
  };
}

export function getTop100(page) {
  return async (dispatch) => {
    try {
      dispatch({
        type: t.GET_100_ISLOADING,
      });
      const response = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${page}`,
        configuration
      );
      const { films } = await response.json();

      dispatch({
        type: t.GET_100_MOVIES,
        data100: films,
      });
    } catch (e) {
      dispatch({
        type: t.SET_ERROR_TRUE,
      });
    }
  };
}

export function getTopAwait(page) {
  return async (dispatch) => {
    try {
      dispatch({
        type: t.GET_AWAIT_ISLOADING,
      });
      const response = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=${page}`,
        configuration
      );
      const { films } = await response.json();

      dispatch({
        type: t.GET_AWAIT_MOVIES,
        dataAwait: films,
      });
    } catch (e) {
      dispatch({
        type: t.SET_ERROR_TRUE,
      });
    }
  };
}

export function getSimilars(id) {
  return async (dispatch) => {
    try {
      dispatch({
        type: t.GET_SIMILARS_ISLOADING,
      });
      const response = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/similars`,
        configuration
      );
      const { items } = await response.json();
      dispatch({
        type: t.GET_SIMILARS,
        similar: items,
      });
    } catch (e) {
      dispatch({
        type: t.SET_ERROR_TRUE,
      });
    }
  };
}

export function getById(id) {
  return async (dispatch) => {
    try {
      dispatch({
        type: t.GET_MOVIE_BY_ID_ISLOADING,
      });

      const response = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id} `,
        configuration
      );
      const film = await response.json();

      dispatch({
        type: t.GET_MOVIE_BY_ID,
        dataById: film,
      });
    } catch (e) {
      dispatch({
        type: t.SET_ERROR_TRUE,
      });
    }
  };
}

export function getBoxOffice(id) {
  return async (dispatch) => {
    try {
      dispatch({
        type: t.GET_BOX_OFFICE_ISLOADING,
      });
      const response = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/box_office`,
        configuration
      );
      const { items } = await response.json();
      const budget = items.filter((el) => el.type === "BUDGET");
      dispatch({
        type: t.GET_BOX_OFFICE,
        dataBoxOffice: budget,
      });
    } catch (e) {
      dispatch({
        type: t.SET_ERROR_TRUE,
      });
    }
  };
}

export function getStaff(id) {
  return async (dispatch) => {
    try {
      dispatch({
        type: t.GET_STAFF_ISLOADING,
      });
      const response = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${id}`,
        configuration
      );
      const data = await response.json();
      const director = data.filter((el) => el.professionKey === "DIRECTOR");
      const actors = data.filter((el) => el.professionKey === "ACTOR");
      const operator = data.filter((el) => el.professionKey === "OPERATOR");

      dispatch({
        type: t.GET_STAFF,
        director,
        actors,
        operator,
      });
    } catch (e) {
      dispatch({
        type: t.SET_ERROR_TRUE,
      });
    }
  };
}

export function setRating(rating, filmId) {
  return {
    type: t.SET_RATING,
    rating,
    filmId,
  };
}

export function setRreview(id, name, date, title, text) {
  return {
    type: t.SET_REVIEW,
    review: {
      id,
      name,
      date,
      title,
      text,
    },
  };
}

export function setFavorite(id, logo, name, rating) {
  return {
    type: t.SET_FAVORITE,
    favoriteMovie: { id, logo, name, rating },
  };
}

export function removeFavorite(removeId) {
  return {
    type: t.REMOVE_FAVORITE,
    removeId,
  };
}

export function getInputFilms(keyWord) {
  return async (dispatch) => {
    dispatch({
      type: t.INPUT_FILMS_LOADING,
    });
    const response = await fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${keyWord}&page=1`,
      configuration
    );
    const { films } = await response.json();
    dispatch({
      type: t.GET_INPUT_FILMS,
      films,
    });
  };
}

export function setErrorFalse() {
  return {
    type: t.SET_ERROR_FALSE,
  };
}
