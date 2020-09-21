import React from "react";
import Details from "./Details";
import { render } from "../test/utils";

test.only("renders movie details", async () => {
  const { getByText } = render(<Details />);

  expect(getByText(/After Hours/i)).toBeInTheDocument();
  expect(
    getByText(/1985 \| 97 min \| Comedy, Crime, Drama, Thriller/i)
  ).toBeInTheDocument();
  expect(
    getByText(
      /An ordinary word processor has the worst night of his life after he agrees to visit a girl in Soho who he met that evening at a coffee shop./i
    )
  ).toBeInTheDocument();
  expect(getByText(/Martin Scorsese/i)).toBeInTheDocument();
  expect(getByText(/Joseph Minion/i)).toBeInTheDocument();
  expect(
    getByText(/Griffin Dunne, Rosanna Arquette, Verna Bloom, Tommy Chong/i)
  ).toBeInTheDocument();
});
