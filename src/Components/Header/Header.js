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
              <img
                // src="https://psv4.userapi.com/c534536/u72282690/docs/d30/f0716afb3b16/netflix.png?extra=pgOwY34CD42UIdCBTy_NBqWr8kgFCaY_7HAmyJb3yiBU7UjTCEBChSofRCcMYfH3IjVr-87647k3nyBM1F0Uk6dEUrt3Z7VlvmHRByGeuIx93kY7ppetTiHsG4HBm2g7cTC-ZsDGW3uOoZMr82SiTtfuMA"
                width="200"
                alt="netflix logo text emblem"
                src={netflix}
              />
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
              size={25}
              color={"white"}
            />
          </div>
        </Link>
      </div>
    </header>
  );
}

export default memo(Header);
