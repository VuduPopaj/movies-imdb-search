import React from "react";
import { useSelector } from "react-redux";
import DetailsScreen from "./DetailsScreen";
import MainScreen from "./MainScreen";

function Movies() {
  const showDetailScreen = useSelector((state) => state.showDetailScreen);

  if (showDetailScreen === true) {
    return <DetailsScreen />;
  }
  return <MainScreen />;
}

export default Movies;
