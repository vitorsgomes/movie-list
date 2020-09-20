import React from "react";
import List from "./List";
import defaultTheme from "../themes/default";
import userEvent from "@testing-library/user-event";
import fetch from "jest-fetch-mock";
import { ThemeProvider } from "styled-components";
import { render } from "../test/utils";

test("renders movie card", async () => {
  const movieData = {
    Title: "After Hours",
    Year: "1985",
    imdbID: "tt0088680",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTUxMjEzMzI2MV5BMl5BanBnXkFtZTgwNTU3ODAxMDE@._V1_SX300.jpg",
  };

  fetch.mockResponseOnce(
    JSON.stringify({
      Response: "True",
      Search: [movieData],
    })
  );

  const { getByLabelText, getByText, findByText, findByAltText } = render(
    <ThemeProvider theme={defaultTheme}>
      <List />
    </ThemeProvider>
  );

  const searchInput = getByLabelText("Enter a search criteria");
  userEvent.type(searchInput, "after");

  const searchButton = getByText("Search");
  userEvent.click(searchButton);

  await findByText(/After Hours/i);
  await findByText(/1985/i);
  await findByAltText(/After Hours poster/i);
});
