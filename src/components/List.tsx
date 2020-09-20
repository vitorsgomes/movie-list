import React from "react";
import styled from "styled-components";
import MovieCard from "./List/MovieCard";
import MovieGrid from "./List/MovieGrid";
import Search from "./List/Search";
import { useSelector } from "react-redux";
import { MoviesState } from "../store/types";

const SearchContainer = styled.section`
  padding: ${(props) => props.theme.space.l} 0;
`;

export default () => {
  const movies = useSelector((state: MoviesState) => state.movies);

  return (
    <>
      <h1>Movies list</h1>
      <SearchContainer>
        <Search />
      </SearchContainer>
      <MovieGrid>
        {movies.map((movie) => {
          return <MovieCard {...movie} key={movie.imdbID} />;
        })}
      </MovieGrid>
    </>
  );
};
