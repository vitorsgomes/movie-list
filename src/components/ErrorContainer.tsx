import styled from "styled-components";

export default styled.div`
  width: 100%;
  padding: ${(props) => props.theme.space.xl};
  font-size: ${(props) => props.theme.font.size.l};
  text-align: center;
  background-color: ${(props) => props.theme.color.backgroundError};
  color: ${(props) => props.theme.font.color.error};
  border: 1px solid ${(props) => props.theme.color.borderError};
`;
