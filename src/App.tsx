import React from "react";
import styled, { createGlobalStyle } from "styled-components";

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
  margin: 0 auto;
  padding: 10px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <MainWrapper>
        <h1>Movies list</h1>
      </MainWrapper>
    </>
  );
}

export default App;
