import { useSelector } from "react-redux";

export function DirectorBlock() {
  const director = useSelector((state) => state.movie.staffData.director);

  return (
    <div className="about__block">
      <div className="about__title">Режиссер:</div>
      <div className="about__link">
        {director?.slice(0, 3).map((el, index, arr) => {
          if (index !== arr.length - 1) {
            return <span key={el.staffId}>{`${el.nameRu}, `}</span>;
          }
          return <span key={el.staffId}>{el.nameRu}</span>;
        })}
      </div>
    </div>
  );
}
