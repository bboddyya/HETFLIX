import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRreview } from "../../../../redux/actions/actions";
import { getDate } from "../../../../utils/getDate";

function ReviewsInput(props) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleNameInput = (e) => setName(e.target.value);
  const handleTitleInput = (e) => setTitle(e.target.value);
  const handletextInput = (e) => setText(e.target.value);
  const id = props.id;

  const handleSubmit = () => {
    const date = getDate();
    if (name && title && text) {
      dispatch(setRreview(id, name, date, title, text));
    }
  };

  return (
    <div className="reviews-input__wrapper">
      <div className="reviews-input__name-input">
        <input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={handleNameInput}
        ></input>
      </div>
      <div className="reviews-input__title-input">
        <input
          type="text"
          placeholder="Заголовок"
          value={title}
          onChange={handleTitleInput}
        ></input>
      </div>
      <div className="reviews-input__textarea-input">
        <textarea
          type="text "
          placeholder="Текст"
          value={text}
          onChange={handletextInput}
        ></textarea>
      </div>
      <button className="reviews-input__add-button" onClick={handleSubmit}>
        Оотправить рецензию
      </button>
    </div>
  );
}

export default ReviewsInput;
