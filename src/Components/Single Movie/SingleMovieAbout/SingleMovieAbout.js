import { DirectorBlock } from "./DirectorBlock.js";
import { YearBlock } from "./YearBlock.js";
import { CountryBlock } from "./CountryBlock.js";
import { GenreBLock } from "./GenreBlock.js";
import { BudgetBlock } from "./BudgetBlock.js";
import { TimeBlock } from "./TimeBlock.js";
function SingleMovieAbout() {
  return (
    <div className="single-movie__about">
      <h1 className="single-movie__about-title">О фильме</h1>
      <DirectorBlock />
      <YearBlock />
      <CountryBlock />
      <GenreBLock />
      <BudgetBlock />
      <TimeBlock />
    </div>
  );
}

export default SingleMovieAbout;
