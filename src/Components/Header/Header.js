import "./Header.scss";

function Header() {
  return (
    <header className="header-wrapper">
      <div className="header-wrapper__navigation">
        <div className="header-wrapper__logo-wrapper">
          <div className="header-wrapper__logo">
            <img
              src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png"
              width="200"
              alt="netflix logo text emblem"
            />
          </div>{" "}
        </div>
        <div className="header-wrapper__movie">Кино</div>
        <div className="header-wrapper__shows">Сериалы</div>
        <div className="header-wrapper__favorite-movie">Избранное</div>
      </div>

      <div className="header-wrapper__right-side">
        {/* <div className="header-wrapper__input-wrapper"> */}
        <input type="text" className="header-wrapper__input" />
        {/* </div> */}
      </div>
    </header>
  );
}

export default Header;
