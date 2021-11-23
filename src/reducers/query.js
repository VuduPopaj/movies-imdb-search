const setQuery = (state = null, action) => {
  switch (action.type) {
    case "QUERY":
      return action.payload;
    default:
      return state;
  }
};

export default setQuery;
