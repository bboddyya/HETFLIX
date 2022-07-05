import { GET_250_MOVIES } from "../types/types";

export function getTop250(page) {
  return async (dispatch) => {
    const response = await fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": "6c1bf884-e7e2-4cc7-939d-998d5b771807",
          "Content-Type": "application/json",
        },
      }
    );
    const { films } = await response.json();
    console.log(films);

    dispatch({
      type: GET_250_MOVIES,
      data250: films,
    });
  };
}
