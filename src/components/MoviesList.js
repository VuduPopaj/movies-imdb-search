import React from "react";
import { useSelector } from "react-redux";
import { Card, Container } from "semantic-ui-react";
import MovieCover from "./MovieCover";

function MoviesList() {
  const movieList = useSelector((state) => state.movieList);
  const show = useSelector((state) => state.showListScreen);
  const showDetailScreen = useSelector((state) => state.showDetailScreen);
  const movies = movieList[0];

  if (showDetailScreen === true && show === true) {
    return (
      <Container>
        <Card.Group itemsPerRow="10" centered doubling>
          {movies.map((item) => (
            <MovieCover key={item.id} item={item} title={item.l} />
          ))}
        </Card.Group>
      </Container>
    );
  } else if (show === true) {
    return (
      <Container>
        <Card.Group itemsPerRow="5" doubling centered stackable>
          {movies.map((item) => (
            <MovieCover key={item.id} item={item} title={item.l} />
          ))}
        </Card.Group>
      </Container>
    );
  } else return null;
}

export default MoviesList;
