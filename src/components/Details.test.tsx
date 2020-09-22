import React from "react";
import Details from "./Details";
import { render } from "../test/utils";
import fetch from "jest-fetch-mock";

const movieData = {
  Title: "After Hours",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTUxMjEzMzI2MV5BMl5BanBnXkFtZTgwNTU3ODAxMDE@._V1_SX300.jpg",
  Year: "1985",
  Runtime: "97 min",
  Genre: "Comedy, Crime, Drama, Thriller",
  Plot:
    "An ordinary word processor has the worst night of his life after he agrees to visit a girl in Soho who he met that evening at a coffee shop.",
  Director: "Martin Scorsese",
  Writer: "Joseph Minion",
  Actors: "Griffin Dunne, Rosanna Arquette, Verna Bloom, Tommy Chong",
};

test.only("renders movie details", async () => {
  fetch.mockResponseOnce(JSON.stringify(movieData));

  const { findByText } = render(<Details />);

  await findByText(/After Hours/i);
  await findByText(/1985 \| 97 min \| Comedy, Crime, Drama, Thriller/i);
  await findByText(
    /An ordinary word processor has the worst night of his life after he agrees to visit a girl in Soho who he met that evening at a coffee shop./i
  );
  await findByText(/Martin Scorsese/i);
  await findByText(/Joseph Minion/i);
  await findByText(
    /Griffin Dunne, Rosanna Arquette, Verna Bloom, Tommy Chong/i
  );
});
