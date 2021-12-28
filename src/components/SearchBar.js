import React from "react";
import movielogo from "../assets/images/movielogo.png";
import { useSelector, useDispatch } from "react-redux";
import { Input, Form, Image, Segment, Header } from "semantic-ui-react";
import { setSearch, setMovieList, setShow, setDetails } from "../actions/index";

function SearchBar() {
  const setQuery = useSelector((state) => state.query);
  const showDetailScreen = useSelector((state) => state.showDetailScreen);
  const show = useSelector((state) => state.showListScreen);

  const dispatch = useDispatch();
  var axios = require("axios").default;
  var options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/auto-complete",
    params: { q: setQuery },
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_KEY,
    },
  };

  const onSubmit = () => {
    axios
      .request(options)
      .then(function (response) {
        dispatch(setMovieList(response.data.d));
        console.log(response.data.d);
        if (show === false) {
          dispatch(setShow());
          alert("Undefined search terms. Please re-define your search.");
        }
        if (showDetailScreen === true) {
          dispatch(setDetails());
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <Segment>
      <Image size="mini" src={movielogo} spaced="left" />
      <Header floated="right" style={{ marginRight: 80 }}>
        <Form onSubmit={onSubmit}>
          <Input
            action="Submit"
            type="text"
            placeholder="Search"
            onChange={(e) => {
              dispatch(setSearch(e.target.value));
            }}
          ></Input>
        </Form>
      </Header>
    </Segment>
  );
}

export default SearchBar;
