import { memo } from "react";
import "./Footer.scss";
import { BsGithub } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <Link to="/about">
        <div className="footer__about">О проекте</div>
      </Link>
      <div className="footer__github">
        <a href="https://github.com/bboddyya" target="_blank">
          <BsGithub size={24} />
        </a>
      </div>
      <div className="footer__telegram">
        <a href="https://t.me/zdarovarebyata" target="_blank">
          <FaTelegram size={24} />
        </a>
      </div>
    </div>
  );
}

export default memo(Footer);
