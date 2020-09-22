import React from "react";
import styled from "styled-components";
import MovieCard from "./List/MovieCard";
import MovieGrid from "./List/MovieGrid";
import Search from "./List/Search";
import { useSelector } from "react-redux";
import { fetchMoreMovies } from "../store/list/actions";
import { useDispatch } from "react-redux";
import { RootState } from "../types/RootState";
import ErrorContainer from "./ErrorContainer";

const SearchContainer = styled.section`
  padding: ${(props) => props.theme.space.l} 0;
`;

const LoadMoreButton = styled.button`
  width: 100%;
  padding: ${(props) => props.theme.space.xl};
  margin: ${(props) => props.theme.space.xl} 0;
`;

export default () => {
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.list.movies);
  const total = useSelector((state: RootState) => state.list.total);
  const error = useSelector((state: RootState) => state.list.error);

  const fetchMore = () => {
    dispatch(fetchMoreMovies());
  };

  return (
    <>
      <h1>Movies list</h1>
      <SearchContainer>
        <Search />
      </SearchContainer>
      {error && <ErrorContainer>{error}</ErrorContainer>}
      {!error && (
        <>
          <MovieGrid>
            {movies.map((movie) => {
              return <MovieCard {...movie} key={movie.imdbID} />;
            })}
          </MovieGrid>
          {movies.length < total && (
            <LoadMoreButton onClick={fetchMore} data-testid="load-more-button">
              Load more
            </LoadMoreButton>
          )}
        </>
      )}
    </>
  );
};
