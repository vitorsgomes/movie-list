import React from "react";
import { render } from "@testing-library/react";
import MovieCard from "./MovieCard";

const movieData = {
  Title: "After Hours",
  Year: "1985",
  imdbID: "tt0088680",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTUxMjEzMzI2MV5BMl5BanBnXkFtZTgwNTU3ODAxMDE@._V1_SX300.jpg",
};

test("renders movie card", () => {
  const { getByText, getByAltText } = render(<MovieCard {...movieData} />);

  const title = getByText(/After Hours/i);
  const year = getByText(/1985/i);
  const image = getByAltText(/After Hours poster/i);

  expect(title).toBeInTheDocument();
  expect(year).toBeInTheDocument();
  expect(image).toBeInTheDocument();
});
