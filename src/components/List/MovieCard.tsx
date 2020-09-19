import React from "react";
import styled from "styled-components";

const MovieCardStyled = styled.a`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
  padding: ${(props) => props.theme.space.l};
  display: block;

  img {
    width: 100%;
    margin-bottom: ${(props) => props.theme.space.l};
  }
`;

interface MovieItem {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export default (props: MovieItem) => {
  return (
    <MovieCardStyled>
      <img src={props.Poster} alt={`${props.Title} poster`} />
      <h2>{props.Title}</h2>
      <span>{props.Year}</span>
    </MovieCardStyled>
  );
};
