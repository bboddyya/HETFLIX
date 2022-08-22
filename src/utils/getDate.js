const date = new Date();
const month = new Date().toLocaleString("ru", {
  month: "short",
});

export const getDate = () => {
  return `${date.getHours()}:${
    date.getMinutes() < 10 ? "0" : ""
  }${date.getMinutes()} · ${date.getDate()} ${month}`;
};
