import React from "react";
import List from "./List";
import userEvent from "@testing-library/user-event";
import fetch from "jest-fetch-mock";
import { render } from "../test/utils";

const movieData = {
  Title: "After Hours",
  Year: "1985",
  imdbID: "tt0088680",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTUxMjEzMzI2MV5BMl5BanBnXkFtZTgwNTU3ODAxMDE@._V1_SX300.jpg",
};

test("renders movie card", async () => {
  fetch.mockResponseOnce(
    JSON.stringify({
      Response: "True",
      Search: [movieData],
    })
  );

  const { getByLabelText, getByText, findByText, findByAltText } = render(
    <List />
  );

  const searchInput = getByLabelText("Enter a search criteria");
  userEvent.type(searchInput, "after");

  const searchButton = getByText("Search");
  userEvent.click(searchButton);

  await findByText(/After Hours/i);
  await findByText(/1985/i);
  await findByAltText(/After Hours poster/i);
});

test("paginate movies", async () => {
  fetch.mockResponseOnce(
    JSON.stringify({
      Response: "True",
      Search: [movieData],
      totalResults: 3,
    })
  );

  const { findByText, getByLabelText, getByText, queryByText } = render(
    <List />
  );

  const searchInput = getByLabelText("Enter a search criteria");
  userEvent.type(searchInput, "after");

  const searchButton = getByText("Search");
  userEvent.click(searchButton);

  const loadMoreButton = await findByText(/Load more/i);

  fetch.mockResponseOnce(
    JSON.stringify({
      Response: "True",
      Search: [
        { ...movieData, Title: "Before Hours", imdbID: 2 },
        { ...movieData, Title: "After Minutes", imdbID: 3 },
      ],
      totalResults: 3,
    })
  );

  userEvent.click(loadMoreButton);

  await findByText(/Before Hours/i);
  await findByText(/After Minutes/i);

  expect(queryByText(/Load more/i)).not.toBeInTheDocument();
});

test("shows error", async () => {
  fetch.mockResponseOnce(
    JSON.stringify({
      Response: "False",
      Error: "Too many movies",
    })
  );

  const { findByText, getByText } = render(<List />);

  const searchButton = getByText("Search");
  userEvent.click(searchButton);

  await findByText(/Too many movies/i);
});
