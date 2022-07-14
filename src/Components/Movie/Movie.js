import "./Movie.css";
import Top250 from "./top250/Top250";
import Top100 from "./top100/Top100";
import TopAwait from "./topAwait/TopAwait";
import { useSelector } from "react-redux";

function Movie() {
  const title250 = "250 ЛУЧШИХ ФИЛЬМОВ";
  const movies250 = useSelector((state) => {
    return state.movie.movies250.movieList;
  });

  return (
    <div className="movie">
      <Top250 />
      <Top100 />
      <TopAwait />
    </div>
  );
}

export default Movie;
