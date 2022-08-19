import "./Movie.css";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import FilmsSlider from "./FilmsSpinner/FilmsSlider";
import { filmSLiderProperties } from "../../utils/filmsSliderProperties";
import { variants } from "../../utils/variantsForMotion";
import { useMemo } from "react";

function Movie() {
  const movies250List = useSelector((state) => state.movie.movies250.movieList);
  const movies250 = useMemo(() => movies250List, [movies250List]);
  const movies100List = useSelector((state) => state.movie.movies100.movieList);
  const movies100 = useMemo(() => movies100List, [movies100List]);
  const moviesAwaitList = useSelector(
    (state) => state.movie.moviesAwait.movieList
  );
  const moviesAwait = useMemo(() => moviesAwaitList, [moviesAwaitList]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      variants={variants}
      className="movie"
    >
      <FilmsSlider
        movies={movies250}
        filmSLiderProperties={{ ...filmSLiderProperties.top250 }}
      />
      <FilmsSlider
        movies={movies100}
        filmSLiderProperties={{ ...filmSLiderProperties.top100 }}
      />
      <FilmsSlider
        movies={moviesAwait}
        filmSLiderProperties={{ ...filmSLiderProperties.topAwait }}
      />
    </motion.div>
  );
}

export default Movie;
