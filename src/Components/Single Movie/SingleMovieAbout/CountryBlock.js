import { useSelector } from "react-redux";

export function CountryBlock() {
  const movie = useSelector((state) => state.movie.movieById.movie);

  return (
    <div className="about__block">
      <div className="about__title">Страна:</div>
      <div className="about__link">
        {movie.countries?.slice(0, 3).map((el, index, arr) => {
          if (index !== arr.length - 1) {
            return <span>{`${el.country}, `}</span>;
          }
          return <span>{el.country}</span>;
        })}
      </div>
    </div>
  );
}
