import { useParams } from "react-router-dom";

function SingleMovie() {
  const { id } = useParams();

  return <div className="single-movie">single movie!{id}</div>;
}

export default SingleMovie;
