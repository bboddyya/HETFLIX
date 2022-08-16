import SingleMovie from "../Components/Single Movie/SingleMovie";
import { useDispatch, useSelector } from "react-redux";
import {
  getById,
  getStaff,
  getBoxOffice,
  getSimilars,
} from "../redux/actions/actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

function SingleMovieContainer() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const byIdIsLoading = useSelector((state) => state.movie.movieById.isLoading);
  const similarIsLoading = useSelector(
    (state) => state.movie.moviesSimilar.isLoading
  );
  const boxOfficeIsLoading = useSelector(
    (state) => state.movie.boxOfficeData.isLoading
  );
  const staffDataIsLoading = useSelector(
    (state) => state.movie.staffData.isLoading
  );

  useEffect(() => {
    dispatch(getById(id));
    dispatch(getStaff(id));
    dispatch(getBoxOffice(id));
    dispatch(getSimilars(id));
  }, [id]);

  return byIdIsLoading &&
    similarIsLoading &&
    boxOfficeIsLoading &&
    staffDataIsLoading ? (
    <ClipLoader
      color="black"
      loading
      size={100}
      speedMultiplier={0.8}
      className="movie__spinner"
    />
  ) : (
    <SingleMovie id={id} />
  );
}

export default SingleMovieContainer;
