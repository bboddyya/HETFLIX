import { AiOutlineSearch } from "react-icons/ai";
import { getInputFilms } from "../../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import SearchResults from "./SearchReuslts";
import { useEffect, useLayoutEffect, useState } from "react";
function Input() {
  const [showResults, setShowResults] = useState(false);
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const handleSet = () => {
    setTimeout(() => {}, 500);
  };
  const handleInput = (e) => {
    // setInterval(, 1000);
    setText(e.target.value);
  };

  useEffect(() => {
    setShowResults(true);
    dispatch(getInputFilms(text));
  }, [text]);

  const searchIsLoading = useSelector(
    (state) => state.movie.inputSearch.isLoading
  );

  return (
    <>
      <input
        type="text"
        className="header-wrapper__input"
        placeholder="Поиск"
        onChange={handleInput}
        onFocus={() => setShowResults(true)}
        onBlur={() => setShowResults(false)}
      />{" "}
      <div className="header-wrapper__input-control">
        <AiOutlineSearch className="header-wrapper__search-icon" />
      </div>
      {showResults && <SearchResults />}
    </>
  );
}

export default Input;
