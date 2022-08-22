export const getRatings = (film, filmId, rating) => {
  const itemIndex = film.findIndex((el) => el.id === filmId);
  const newRatings = [
    ...film.slice(0, itemIndex),
    { id: filmId, rating },
    ...film.slice(itemIndex + 1),
  ];
  if (itemIndex + 1) {
    return {
      newRatings,
    };
  } else return [film, { id: filmId, rating }];
};
