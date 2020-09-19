import React from "react";
import styled from "styled-components";

const InputSyled = styled.input`
  width: 100%;
  padding: ${(props) => props.theme.space.l} ${(props) => props.theme.space.s};
  font-size: ${(props) => props.theme.font.size.xl};
`;

export default () => {
  return (
    <label>
      Enter a search criteria
      <InputSyled />
    </label>
  );
};
