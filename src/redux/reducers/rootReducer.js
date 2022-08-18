import { combineReducers } from "redux";
import { movieReducer } from "./movieReducer";
import { ratingSelection } from "./ratingSelection";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";

const movieConfig = {
  key: ["movie"],
  storage,
  blacklist: ["errorStatus"],
};

export const rootReducer = combineReducers({
  movie: persistReducer(movieConfig, movieReducer),
  ratingSelection,
});
