import { setFavorite, removeFavorite } from "../../../redux/actions/actions";
import { MdOutlineBookmarkBorder, MdOutlineBookmark } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function FavoriteButton({ movie }) {
  const dispatch = useDispatch();
  const { kinopoiskId, posterUrlPreview, nameRu, ratingKinopoisk } = movie;

  const isFavorite = useSelector((state) =>
    state.ratingSelection.favorite?.some((el) => el.id === kinopoiskId)
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
        <MdOutlineBookmarkBorder
          className="single-movie__favorites icon"
          onClick={handleSetFavorite}
        />
      ) : (
        <MdOutlineBookmark
          className="single-movie__delete icon"
          onClick={handleRemoveFavorite}
        />
      )}
    </div>
  );
}

export default FavoriteButton;
