import React from "react";
import { Divider } from "semantic-ui-react";
import Header from "./Header";
import MoviesList from "./MoviesList";

function MainScreen() {
  return (
    <div>
      <Header />
      <Divider />
      <MoviesList />
    </div>
  );
}

export default MainScreen;
