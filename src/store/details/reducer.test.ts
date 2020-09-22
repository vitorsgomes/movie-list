import movieListReducer from "./reducer";
import {
  MOVIE_RECEIVED,
  MovieReceivedAction,
  SET_ERROR,
  SetErrorAction,
} from "./types";

const movieData = {
  Title: "After Hours",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTUxMjEzMzI2MV5BMl5BanBnXkFtZTgwNTU3ODAxMDE@._V1_SX300.jpg",
  Year: "1985",
  Runtime: "97 min",
  Genre: "Comedy, Crime, Drama, Thriller",
  Plot:
    "An ordinary word processor has the worst night of his life after he agrees to visit a girl in Soho who he met that evening at a coffee shop.",
  Director: "Martin Scorsese",
  Writer: "Joseph Minion",
  Actors: "Griffin Dunne, Rosanna Arquette, Verna Bloom, Tommy Chong",
  Response: "True",
};

const initialState = {
  movie: movieData,
  error: "unex",
};

test("MOVIES_RECEIVED", () => {
  const action = {
    type: MOVIE_RECEIVED,
    movie: { ...movieData, Title: "before hours" },
  } as MovieReceivedAction;

  expect(movieListReducer(initialState, action)).toEqual({
    movie: { ...movieData, Title: "before hours" },
    error: "",
  });
});

test("SET_ERROR", () => {
  const action = {
    type: SET_ERROR,
    error: "unexpected error",
  } as SetErrorAction;

  expect(movieListReducer(initialState, action)).toEqual({
    movie: movieData,
    error: "unexpected error",
  });
});
