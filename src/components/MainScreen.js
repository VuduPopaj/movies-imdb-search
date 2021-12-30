import React from "react";
import { Divider, Container } from "semantic-ui-react";
import { useSelector } from "react-redux";
import Header from "./Header";
import MovieList from "./MoviesList";

function MainScreen() {
  const movieList = useSelector((state) => state.movieList);

  return (
    <div>
      <Header />
      <Divider />
      {movieList[0] === undefined ? (
        <Container>
          <div className="ui center aligned container">
            Undefined search terms. Please re-define your search.
            <div className="ui center aligned container">
              For example: Harry Potter
            </div>
          </div>
        </Container>
      ) : (
        <MovieList />
      )}
    </div>
  );
}

export default MainScreen;
