import "./Header.scss";
import { Link } from "react-router-dom";
import Input from "./Input/Input";

function Header() {
  console.log("Header render");
  return (
    <header className="header-wrapper">
      <div className="header-wrapper__navigation">
        <div className="header-wrapper__logo-wrapper">
          <Link to="/">
            <div className="header-wrapper__logo">
              <img
                src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png"
                width="200"
                alt="netflix logo text emblem"
              />
            </div>{" "}
          </Link>
        </div>
        <div className="header-wrapper__movie">Кино</div>
        <div className="header-wrapper__shows">Сериалы</div>
        <Link to="/favorite-films">
          <div className="header-wrapper__favorite-movie">Избранное</div>
        </Link>
      </div>

      <div className="header-wrapper__right-side">
        <Input />
      </div>
    </header>
  );
}

export default Header;
