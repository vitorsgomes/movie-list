import styled from "styled-components";

export default styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(270px, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(270px, 1fr));
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, minmax(270px, 1fr));
  }
`;
