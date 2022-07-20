import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getById } from "../../redux/actions/actions";

function SingleMovie() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getById(id));
  }, []);

  const movie = useSelector((state) => state.movie.movieById.movie);
  return <div className="single-movie">single movie!{id}</div>;
}

export default SingleMovie;
