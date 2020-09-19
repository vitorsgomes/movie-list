import React from "react";
import { render } from "@testing-library/react";
import List from "./List";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../themes/default";

test("renders movie card", () => {
  const { getAllByText, getAllByAltText } = render(
    <ThemeProvider theme={defaultTheme}>
      <List />
    </ThemeProvider>
  );

  const title = getAllByText(/After Hours/i);
  const year = getAllByText(/1985/i);
  const image = getAllByAltText(/After Hours poster/i);

  expect(title).toHaveLength(5);
  expect(year).toHaveLength(5);
  expect(image).toHaveLength(5);
});
