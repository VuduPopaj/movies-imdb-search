export const setShow = () => {
  return {
    type: "SHOW_LIST",
  };
};
export const setDetails = () => {
  return {
    type: "SHOW_DETAILS",
  };
};

export const setSearch = (query) => {
  return {
    type: "QUERY",
    payload: query,
  };
};

export const setMovieList = (newItem) => {
  return {
    type: "MOVIE_INFO",
    payload: newItem,
  };
};

export const setMovieDetail = (item) => {
  return {
    type: "MOVIE_DETAIL",
    payload: item,
  };
};
