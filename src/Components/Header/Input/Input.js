import { getInputFilms } from "../../../redux/actions/actions";
import { useDispatch } from "react-redux";
import SearchResults from "./SearchReuslts";
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
function Input() {
  const [showResults, setShowResults] = useState(false);
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const delayFetch = setTimeout(() => {
      dispatch(getInputFilms(text));
    }, 400);
    return () => clearInterval(delayFetch);
  }, [text]);

  const handleRemoveInput = () => {
    setShowResults(false);
    setText("");
  };

  const handleSetText = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="header-wrapper__input"
        placeholder="Поиск"
        value={text}
        onChange={handleSetText}
        onFocus={() => setShowResults(true)}
      />{" "}
      <div>
        {showResults ? (
          <IoCloseOutline
            color="white"
            size={29}
            className="search-icon"
            onClick={handleRemoveInput}
          />
        ) : (
          <IoSearchOutline color="white" size={29} className="search-icon" />
        )}
      </div>
      {showResults && (
        <SearchResults setShowResults={setShowResults} setText={setText} />
      )}
    </div>
  );
}

export default Input;
