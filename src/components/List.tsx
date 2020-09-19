import React from "react";
import styled from "styled-components";
import MovieCard from "./List/MovieCard";
import MovieGrid from "./List/MovieGrid";
import Search from "./List/Search";

const movieData = {
  Title: "After Hours",
  Year: "1985",
  imdbID: "tt0088680",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTUxMjEzMzI2MV5BMl5BanBnXkFtZTgwNTU3ODAxMDE@._V1_SX300.jpg",
};

const SearchContainer = styled.section`
  padding: ${(props) => props.theme.space.l} 0;
`;

export default () => {
  return (
    <>
      <h1>Movies list</h1>
      <SearchContainer>
        <Search />
      </SearchContainer>
      <MovieGrid>
        <MovieCard {...movieData} />
        <MovieCard {...movieData} />
        <MovieCard {...movieData} />
        <MovieCard {...movieData} />
        <MovieCard {...movieData} />
      </MovieGrid>
    </>
  );
};
