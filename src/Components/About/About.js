import { memo } from "react";
import { FaReact, FaSass } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { GiFishingHook } from "react-icons/gi";
import { BsGithub } from "react-icons/bs";

import "./About.scss";
import { Link } from "react-router-dom";

const hooks = [
  "useState()",
  "useEffect()",
  "useMemo()",
  "useCallback()",
  "useSelector()",
  "useDispatch()",
];

function About() {
  return (
    <div className="about">
      <div className="about__text">
        <h1>
          Привет, добро пожаловать в <strong>HeтFlix!</strong>{" "}
        </h1>
        <p>
          Я создавал этот проект для того чтобы продолжать оттачивать свои
          навыки <strong>React.JS</strong>{" "}
          <span>
            <FaReact size={25} />
          </span>{" "}
          разработчика в связке с <strong>Redux</strong>{" "}
          <span>
            <SiRedux size={25} />
          </span>
          .
        </p>
        <p>
          Данный сервис позволяет искать фильмы, используя Kinopoisk API. Для
          работы с асинхронными запросами я использовал{" "}
          <strong>Redux-thunk</strong> и <strong>fetch-запросы</strong>.
        </p>
        Вы можете:
        <ul>
          <li>Искать фильмы</li>
          <li>Добавлять их в избранное</li>
          <li>Ставить оценки</li>
          <li>Писать рецензии</li>
        </ul>
        <p>
          Я осуществил имитацию сервера с помощью библиотеки{" "}
          <strong>Redux-Persist</strong>, которая позволяет сохранять ваши
          отметки и любимые фильмы в localStorage, чтобы они оставались с вами
          после обновления страницы.
        </p>
        <p>
          Так же я реализовал кастомную динамическую <strong>пагинацию</strong>{" "}
          по скроллу без сторонних библиотек.
        </p>
        <p>
          Все запросы к серверу создаются в конструкци{" "}
          <strong>try-catch</strong>, и при какой либо ошибке пользователь
          увидит заглушку, вместо полностью упавшего UI, можете
          <Link to="/error">
            <strong> попробовать.</strong>
          </Link>
        </p>
        <p>
          Для анимации я изучил и использовал библиотеку{" "}
          <strong>Framer-motion и React-Slick</strong>. Для создания стилей
          работал с препроцессором <strong>SASS</strong>{" "}
          <span>
            <FaSass size={25} />
          </span>
          , используя практически весь его богатый функционал, так же применял
          методолгию <strong>БЭМ</strong>. <strong>Адаптивная верстка</strong>{" "}
          реализована с помощью медиа-запросов & breakPoint’ам.
        </p>
        <p>
          Поработал над оптимизацией(<strong>HOC, React.Memo</strong>), расширил
          и закрепил свои знания о <strong>хуках</strong>{" "}
          <span>
            <GiFishingHook size={25} />
          </span>{" "}
          :
          <ul>
            {hooks.map((el) => (
              <li>{el}</li>
            ))}
          </ul>
        </p>
        <p>
          Для контроля версий моего приложения использовал{" "}
          <strong>GitHub</strong>
          <span>
            {" "}
            <BsGithub size={25} />
          </span>
          .
        </p>
      </div>
      <div className="about__credit">Богдан Безуглый · 2022</div>
    </div>
  );
}

export default memo(About);
