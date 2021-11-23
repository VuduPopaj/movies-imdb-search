const initialState = {};
const movieDetail = (state = initialState, action) => {
  switch (action.type) {
    case "MOVIE_DETAIL":
      return action.payload;
    default:
      return state;
  }
};

export default movieDetail;
