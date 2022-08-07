import { AiOutlineSearch } from "react-icons/ai";
import { getInputFilms } from "../../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import SearchResults from "./SearchReuslts";
import { useEffect, useState } from "react";
function Input() {
  const [showResults, setShowResults] = useState(false);
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSetText = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    const delayFetch = setTimeout(() => {
      dispatch(getInputFilms(text));
    }, 400);
    return () => clearInterval(delayFetch);
  }, [text]);

  return (
    <>
      <input
        type="text"
        className="header-wrapper__input"
        placeholder="Поиск"
        onChange={handleSetText}
        onFocus={() => setShowResults(true)}
        onBlur={() => setShowResults(false)}
      />{" "}
      {/* <div className="header-wrapper__input-control">
        <AiOutlineSearch className="header-wrapper__search-icon" />
      </div> */}
      {showResults && <SearchResults />}
    </>
  );
}

export default Input;
