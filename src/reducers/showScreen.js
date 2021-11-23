export const setShow = (state = false, action) => {
  switch (action.type) {
    case "SHOW_LIST":
      return !state;
    default:
      return state;
  }
};

export const setDetail = (state = false, action) => {
  switch (action.type) {
    case "SHOW_DETAILS":
      return !state;
    default:
      return state;
  }
};
