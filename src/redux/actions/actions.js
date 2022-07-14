import {
  GET_250_MOVIES,
  GET_100_MOVIES,
  GET_AWAIT_MOVIES,
  GET_250_ISLOADING,
  GET_100_ISLOADING,
  GET_AWAIT_ISLOADING,
} from "../types/types";
import { configuration } from "../../utils/configurationForApi";

export function getTop250(page) {
  return async (dispatch) => {
    dispatch({
      type: GET_250_ISLOADING,
    });
    const response = await fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${page}`,
      configuration
    );
    const { films } = await response.json();
    dispatch({
      type: GET_250_MOVIES,
      data250: films,
    });
  };
}

export function getTop100(page) {
  return async (dispatch) => {
    dispatch({
      type: GET_100_ISLOADING,
    });
    const response = await fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${page}`,
      configuration
    );
    const { films } = await response.json();

    dispatch({
      type: GET_100_MOVIES,
      data100: films,
    });
  };
}

export function getTopAwait(page) {
  return async (dispatch) => {
    dispatch({
      type: GET_AWAIT_ISLOADING,
    });
    const response = await fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=${page}`,
      configuration
    );
    const { films } = await response.json();

    dispatch({
      type: GET_AWAIT_MOVIES,
      dataAwait: films,
    });
  };
}

export function setSpinner() {}
