import React, { SyntheticEvent, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { searchMovies } from "../../store/actions";

const Grid = styled.div`
  margin-top: ${(props) => props.theme.space.s};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${(props) => props.theme.space.s};

  @media (min-width: 768px) {
    grid-template-columns: 5fr 1fr;
  }
`;

const InputSyled = styled.input`
  width: 100%;
  display: block;
  padding: ${(props) => props.theme.space.l} ${(props) => props.theme.space.s};
  font-size: ${(props) => props.theme.font.size.xl};
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: ${(props) => props.theme.space.s};
  font-size: ${(props) => props.theme.font.size.m};
`;

export default () => {
  const dispatch = useDispatch();
  const [searchCriteria, setSearchCriteria] = useState("");

  const submitSearch = (e: SyntheticEvent) => {
    e.preventDefault();

    dispatch(searchMovies(searchCriteria));
  };

  return (
    <form onSubmit={submitSearch}>
      <label htmlFor="search-criteria">Enter a search criteria</label>
      <Grid>
        <InputSyled
          id="search-criteria"
          onChange={(e) => setSearchCriteria(e.target.value)}
        />
        <SubmitButton type="submit" data-testid="search-button">
          Search
        </SubmitButton>
      </Grid>
    </form>
  );
};
