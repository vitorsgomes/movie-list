import React from "react";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../store/configureStore";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../themes/default";
import { MemoryRouter } from "react-router-dom";

export const render = (
  ui: React.ReactElement,
  renderOptions?: RenderOptions
) => {
  const Wrapper: React.FC = ({ children }) => {
    return (
      <MemoryRouter>
        <ThemeProvider theme={defaultTheme}>
          <Provider store={configureStore()}>{children}</Provider>;
        </ThemeProvider>
      </MemoryRouter>
    );
  };

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};
