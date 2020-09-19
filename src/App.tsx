import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import List from "./components/List";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #F8F8F8;
    font-family: Helvetica, sans-serif;
  }
  
  a {
    color: inherit;
    text-decoration: inherit;
  }
`;

const MainWrapper = styled.section`
  max-width: 1200px;
  min-width: 340px;
  margin: 0 auto;
  padding: 10px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <MainWrapper>
        <List />
      </MainWrapper>
    </>
  );
}

export default App;
