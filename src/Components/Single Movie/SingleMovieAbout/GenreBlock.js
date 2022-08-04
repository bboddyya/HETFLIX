import { useSelector } from "react-redux";
export function GenreBLock() {
  const movie = useSelector((state) => state.movie.movieById.movie);
  return (
    <div className="about__block">
      <div className="about__title">Жанр:</div>
      <div className="about__link">
        {movie.genres?.slice(0, 3).map((el, index, arr) => {
          if (index !== arr.length - 1) {
            return <span>{`${el.genre}, `}</span>;
          }
          return <span>{el.genre}</span>;
        })}
      </div>
    </div>
  );
}
