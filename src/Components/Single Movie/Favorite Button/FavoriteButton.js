import { setFavorite, removeFavorite } from "../../../redux/actions/actions";
import { MdOutlineBookmarkBorder, MdOutlineBookmark } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import "./FavoriteButton.scss";
import { useMemo } from "react";

function FavoriteButton() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie.movieById.movie);
  const { kinopoiskId, posterUrlPreview, nameRu, ratingKinopoisk } = movie;
  const favorite = useSelector((state) => state.ratingSelection.favorite);

  const isFavorite = useMemo(
    () => favorite.some((el) => el.id === kinopoiskId),
    [favorite]
  );
  function handleSetFavorite() {
    dispatch(
      setFavorite(kinopoiskId, posterUrlPreview, nameRu, ratingKinopoisk)
    );
  }
  function handleRemoveFavorite() {
    dispatch(removeFavorite(kinopoiskId));
  }

  console.log(isFavorite);
  return (
    <div className="single-movie__favorites-buttons">
      {!isFavorite ? (
        <>
          <MdOutlineBookmarkBorder
            className="single-movie__favorites icon"
            onClick={handleSetFavorite}
          />{" "}
          <span onClick={handleSetFavorite}>Добавить в избранное</span>
        </>
      ) : (
        <>
          <MdOutlineBookmark
            className="single-movie__delete icon"
            onClick={handleRemoveFavorite}
          />
          <span onClick={handleRemoveFavorite}>В избранном</span>
        </>
      )}
    </div>
  );
}

export default FavoriteButton;
