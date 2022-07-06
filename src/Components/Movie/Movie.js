import "./Movie.css";

import Top250 from "./top250/Top250";

function Movie() {
  return (
    <div className="movie">
      <Top250 />
      {/* <Top100 /> */}
    </div>
  );
}

export default Movie;
