import React from "react";
import { Divider } from "semantic-ui-react";
import Header from "./Header";
import MovieList from "./MoviesList";

function MainScreen() {
  return (
    <div>
      <Header />
      <Divider />
      <MovieList />
    </div>
  );
}

export default MainScreen;
