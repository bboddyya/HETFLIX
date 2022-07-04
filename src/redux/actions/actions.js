import { MOVIES_LOAD } from "../types/types";

export function moviesLoad() {
  return async (dispatch) => {
    const key = {
      method: "GET",
      headers: {
        "X-API-KEY": "6c1bf884-e7e2-4cc7-939d-998d5b771807",
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      "https://kinopoiskapiunofficial.tech/api/v2.2/films",
      key
    );
    const data = await response.json();
    dispatch({
      type: MOVIES_LOAD,
      data,
    });
  };
}
