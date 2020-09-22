import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from "../store/details/actions";
import { RootState } from "../types/RootState";

const Section = styled.section`
  background: white;
  padding: ${(props) => props.theme.space.l};
  border: solid 1px #f7f6f4;

  img {
    width: 100%;
  }

  @media (min-width: 768px) {
    display: flex;
    img {
      width: auto;
    }
  }
`;

const MovieInformation = styled.div`
  margin-top: ${(props) => props.theme.space.l};

  @media (min-width: 768px) {
    margin-left: ${(props) => props.theme.space.l};
    margin-top: 0px;
  }
`;

const Subtext = styled.span`
  font-size: ${(props) => props.theme.font.size.xs};
`;

const Plot = styled.p`
  margin-top: ${(props) => props.theme.space.l};
  font-size: ${(props) => props.theme.font.size.m};
`;

const InformationStyled = styled.div`
  margin: ${(props) => props.theme.space.l} 0;

  h4 {
    margin-bottom: ${(props) => props.theme.space.xs};
    font-size: ${(props) => props.theme.font.size.m};
  }

  p {
    font-size: ${(props) => props.theme.font.size.s};
  }
`;

const Information = (props: { title: string; description: string }) => {
  return (
    <InformationStyled>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </InformationStyled>
  );
};

export default () => {
  // @ts-ignore
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieData = useSelector((state: RootState) => state.details.movie);

  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [id, dispatch]);

  return (
    <>
      {movieData && (
        <Section>
          <img alt={`${movieData.Title} poster`} src={movieData.Poster} />
          <MovieInformation>
            <h1>{movieData.Title}</h1>
            <Subtext>
              {movieData.Year} | {movieData.Runtime} | {movieData.Genre}{" "}
            </Subtext>
            <Plot>{movieData.Plot}</Plot>
            <Information title="Director" description={movieData.Director} />
            <Information title="Writer" description={movieData.Writer} />
            <Information title="Cast" description={movieData.Actors} />
          </MovieInformation>
        </Section>
      )}
    </>
  );
};
