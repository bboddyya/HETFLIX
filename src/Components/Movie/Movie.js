import "./Movie.css";
import FilmsSpinner from "./FilmsSpinner/Movies";
import Top100 from "./top100/Top100";
import TopAwait from "./topAwait/TopAwait";
import { useSelector } from "react-redux";

function Movie() {
  const movies250 = useSelector((state) => {
    return state.movie.movies250.movieList;
  });
  const movies100 = useSelector((state) => {
    return state.movie.movies100.movieList;
  });
  const moviesAwait = useSelector((state) => {
    return state.movie.moviesAwait.movieList;
  });

  return (
    <div className="movie">
      <FilmsSpinner movies250={movies250} />
      <FilmsSpinner movies250={movies100} />
      <FilmsSpinner movies250={moviesAwait} />
    </div>
  );
}

export default Movie;
