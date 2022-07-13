import "./Movie.css";
import { Suspense } from "react";
import Top250 from "./top250/Top250";
import Top100 from "./top100/Top100";
import TopAwait from "./topAwait/TopAwait";
import { ClipLoader } from "react-spinners";

function Movie() {
  return (
    <div className="movie">
      <Top250 />
      <Top100 />
      <TopAwait />
    </div>
  );
}

export default Movie;
