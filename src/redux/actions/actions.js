import { GET_250_MOVIES } from "../types/types";
import { GET_100_MOVIES } from "../types/types";
import { GET_AWAIT_MOVIES } from "../types/types";
import { configuration } from "../../utils/configurationForApi";

export function getTop250(page) {
  return async (dispatch) => {
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
