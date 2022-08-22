import "./Movie.css";

import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import FilmsSlider from "./FilmsSpinner/FilmsSlider";
import { filmSLiderProperties } from "../../utils/filmsSliderProperties";
import { variants } from "../../utils/variantsForMotion";

function Movie() {
  const movies250 = useSelector((state) => state.movie.movies250.movieList);
  const movies100 = useSelector((state) => state.movie.movies100.movieList);
  const moviesAwait = useSelector((state) => state.movie.moviesAwait.movieList);
  const films250Ready = useSelector((state) => state.movie.movies250.isLoading);
  const films100Ready = useSelector((state) => state.movie.movies100.isLoading);
  const filmsAwaitReady = useSelector(
    (state) => state.movie.moviesAwait.isLoading
  );

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
        isReady={films250Ready}
      />
      <FilmsSlider
        movies={movies100}
        filmSLiderProperties={{ ...filmSLiderProperties.top100 }}
        isReady={films100Ready}
      />
      <FilmsSlider
        movies={moviesAwait}
        filmSLiderProperties={{ ...filmSLiderProperties.topAwait }}
        isReady={filmsAwaitReady}
      />
    </motion.div>
  );
}

export default Movie;
