import { useSelector } from "react-redux";

export function YearBlock() {
  const movie = useSelector((state) => state.movie.movieById.movie);

  return (
    <>
      {movie.year && (
        <div className="about__block">
          <div className="about__title">Год:</div>
          {movie.year && <div className="about__link">{movie.year}</div>}
        </div>
      )}
    </>
  );
}
