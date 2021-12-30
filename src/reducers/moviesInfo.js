// const initialState = [];
const movieList = (state = "Dog Soldiers", action) => {
  switch (action.type) {
    case "MOVIE_INFO":
      return [action.payload];
    default:
      return state;
  }
};

export default movieList;
