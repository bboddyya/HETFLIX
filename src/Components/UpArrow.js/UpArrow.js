import { useState, useEffect } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { animateScroll as scroll } from "react-scroll";
import "./UpArrow.scss";
import { memo } from "react";
function UpArrow() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  });

  const scrollHandler = (e) => {
    e.target.documentElement.scrollTop > 250
      ? setVisible(true)
      : setVisible(false);
  };
  return (
    visible && (
      <BsFillArrowUpCircleFill
        onClick={() => scroll.scrollToTop()}
        className="up-arrow"
      />
    )
  );
}

export default memo(UpArrow);
