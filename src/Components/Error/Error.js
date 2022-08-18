import { memo } from "react";
import gif from "../../img/giphy.gif";
import { Link } from "react-router-dom";
import "./Error.scss";
import { useDispatch } from "react-redux";
import { setErrorFalse } from "../../redux/actions/actions";

function Error() {
  const dispatch = useDispatch();
  const handleSetError = () => dispatch(setErrorFalse());
  return (
    <div className="error">
      <div className="error__logo">
        <h1>ОШИБКА</h1>
      </div>
      <div className="error__body">
        <div className="error__text">
          <h3>Попробуйте чуть-чуть позже.</h3>
          <Link to="/">
            <span onClick={handleSetError}>Вернуться домой</span>
          </Link>
        </div>
        <div className="error__gif">
          <iframe
            src={gif}
            width="480"
            height="400"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default memo(Error);
