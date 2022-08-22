import { useSelector } from "react-redux";
import { getComma } from "../../../utils/getComma";

export function CountryBlock() {
  const movie = useSelector((state) => state.movie.movieById.movie);

  return (
    <>
      {movie.countries && (
        <div className="about__block">
          <div className="about__title">Страна:</div>
          <div className="about__link">
            {movie.countries?.slice(0, 3).map((el, index, arr) => {
              return <span>{`${el.country}${getComma(index, arr)} `}</span>;
            })}
          </div>
        </div>
      )}
    </>
  );
}
