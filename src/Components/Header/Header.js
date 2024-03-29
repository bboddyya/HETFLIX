import "./Header.scss";
import { Link } from "react-router-dom";
import Input from "./Input/Input";
import { BsBookmark } from "react-icons/bs";
import { memo } from "react";
import netflix from "../../img/netflix.png";

function Header() {
  console.log("Header render");
  return (
    <header className="header-wrapper">
      <div className="header-wrapper__navigation">
        <div className="header-wrapper__logo-wrapper">
          <Link to="/">
            <div className="header-wrapper__logo">
              <img alt="netflix logo text emblem" src={netflix} />
            </div>{" "}
          </Link>
        </div>
      </div>

      <div className="header-wrapper__right-side">
        <Input />
        <Link to="/favorite-films">
          <div className="header-wrapper__favorite-movie">
            <BsBookmark
              className="header-wrapper__favorite-movie"
              color={"white"}
            />
          </div>
        </Link>
      </div>
    </header>
  );
}

export default memo(Header);
