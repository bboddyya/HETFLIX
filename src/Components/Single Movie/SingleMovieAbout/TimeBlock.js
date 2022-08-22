import { useSelector } from "react-redux";
import { getTime } from "../../../utils/getTime";

export function TimeBlock() {
  const movie = useSelector((state) => state.movie.movieById.movie);
  return (
    <>
      {movie.filmLength && (
        <div className="about__block">
          <div className="about__title">Время: </div>
          <div className="about__link">{getTime(movie?.filmLength)}</div>
        </div>
      )}
    </>
  );
}
