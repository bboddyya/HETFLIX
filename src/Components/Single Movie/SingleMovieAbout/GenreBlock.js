import { useSelector } from "react-redux";
import { getComma } from "../../../utils/getComma";

export function GenreBLock() {
  const movie = useSelector((state) => state.movie.movieById.movie);
  return (
    <>
      {movie.genres && (
        <div className="about__block">
          <div className="about__title">Жанр:</div>
          <div className="about__link">
            {movie.genres?.slice(0, 3).map((el, index, arr) => {
              return <span>{`${el.genre}${getComma(index, arr)} `}</span>;
            })}
          </div>
        </div>
      )}
    </>
  );
}
