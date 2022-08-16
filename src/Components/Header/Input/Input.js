import { getInputFilms } from "../../../redux/actions/actions";
import { useDispatch } from "react-redux";
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
    <div className="input-container">
      <input
        type="text"
        className="header-wrapper__input"
        placeholder="Поиск"
        onChange={handleSetText}
        onFocus={() => setShowResults(true)}
      />{" "}
      {showResults && <SearchResults setShowResults={setShowResults} />}
    </div>
  );
}

export default Input;
