import { useSelector } from "react-redux";

export function BudgetBlock() {
  const boxOffice = useSelector((state) => state.movie.boxOfficeData.boxOffice);

  return (
    <>
      {boxOffice[0] && (
        <div className="about__block">
          <div className="about__title">Бюджет:</div>
          {boxOffice.map((el) => {
            return (
              <div className="about__link" key={Date.now()}>{`${
                el.symbol
              }${el.amount.toLocaleString()} `}</div>
            );
          })}
        </div>
      )}
    </>
  );
}
