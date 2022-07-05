import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTop250 } from "../../redux/actions/actions";

function Movie(props) {
  const dispatch = useDispatch();
  const movies250 = useSelector((state) => state.movie.movies250);

  useEffect(() => {
    dispatch(getTop250());
  }, []);

  console.log(movies250);
  return (
    <div className="movie">
      {movies250.map((el) => {
        return (
          <div className="movie__top250">
            <div className="movie__name">{el.nameEn}</div>
            <div className="movie__year">{el.year}</div>
            <div className="movie__rating">{el.rating}</div>
            <div className="movie__picture">
              <img src={el.posterUrlPreview} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Movie;

// <Swiper
//   modules={[Navigation, Pagination, Scrollbar, A11y]}
//   spaceBetween={50}
//   slidesPerView={3}
//   navigation
//   pagination={{ clickable: true }}
//   scrollbar={{ draggable: true }}
//   onSwiper={(swiper) => console.log(swiper)}
//   onSlideChange={() => console.log("slide change")}
// >
//   <SwiperSlide>
//   </SwiperSlide>
// </Swiper>
