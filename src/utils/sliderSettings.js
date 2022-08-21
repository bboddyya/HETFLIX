export const settings = {
  dots: true,
  infinite: false,
  speed: 700,
  slidesToShow: 5,
  slidesToScroll: 5,
  initialSlide: 0,
  adaptiveHeight: true,
  draggable: false,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        draggable: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        draggable: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
      },
    },
  ],
};
