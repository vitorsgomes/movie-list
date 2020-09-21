import React from "react";
import styled from "styled-components";

const movieData = {
  Title: "After Hours",
  Year: "1985",
  Rated: "R",
  Released: "11 Oct 1985",
  Runtime: "97 min",
  Genre: "Comedy, Crime, Drama, Thriller",
  Director: "Martin Scorsese",
  Writer: "Joseph Minion",
  Actors: "Griffin Dunne, Rosanna Arquette, Verna Bloom, Tommy Chong",
  Plot:
    "An ordinary word processor has the worst night of his life after he agrees to visit a girl in Soho who he met that evening at a coffee shop.",
  Language: "English",
  Country: "USA",
  Awards: "Nominated for 1 Golden Globe. Another 3 wins & 9 nominations.",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTUxMjEzMzI2MV5BMl5BanBnXkFtZTgwNTU3ODAxMDE@._V1_SX300.jpg",
  Ratings: [
    { Source: "Internet Movie Database", Value: "7.7/10" },
    { Source: "Rotten Tomatoes", Value: "89%" },
    { Source: "Metacritic", Value: "90/100" },
  ],
  Metascore: "90",
  imdbRating: "7.7",
  imdbVotes: "56,947",
  imdbID: "tt0088680",
  Type: "movie",
  DVD: "17 Aug 2004",
  BoxOffice: "$10,600,000",
  Production: "Warner Bros. Pictures",
  Website: "N/A",
  Response: "True",
};

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

const Information = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <InformationStyled>
      <h4>{title}</h4>
      <p>{description}</p>
    </InformationStyled>
  );
};

export default () => {
  return (
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
  );
};
