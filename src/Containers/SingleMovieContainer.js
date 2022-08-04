import SingleMovie from "../Components/Single Movie/SingleMovie";
import { useDispatch } from "react-redux";
import {
  getById,
  getStaff,
  getBoxOffice,
  getSimilars,
} from "../redux/actions/actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleMovieContainer() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getById(id));
    dispatch(getStaff(id));
    dispatch(getBoxOffice(id));
    dispatch(getSimilars(id));
  }, [id]);

  return <SingleMovie id={id} />;
}

export default SingleMovieContainer;
