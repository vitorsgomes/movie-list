import movieListReducer from "./reducer";
import {
  MORE_MOVIES_RECEIVED,
  MoviesReceivedAction,
  MOVIES_RECEIVED,
  SetSearchCriteriaAction,
  SET_SEARCH_CRITERIA,
  MoreMoviesReceivedAction,
  SET_ERROR,
  SetErrorAction,
} from "./types";

const movieData = {
  Title: "After Hours",
  Year: "1985",
  imdbID: "tt0088680",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTUxMjEzMzI2MV5BMl5BanBnXkFtZTgwNTU3ODAxMDE@._V1_SX300.jpg",
};

const initialState = {
  movies: [movieData],
  page: 2,
  total: 10,
  searchCriteria: "aft",
  error: "unex",
};

test("MOVIES_RECEIVED", () => {
  const action = {
    type: MOVIES_RECEIVED,
    movies: [movieData],
    total: 11,
  } as MoviesReceivedAction;

  expect(movieListReducer(initialState, action)).toEqual({
    page: 1,
    searchCriteria: "aft",
    total: 11,
    movies: [movieData],
    error: "",
  });
});

test("SET_SEARCH_CRITERIA", () => {
  const action = {
    type: SET_SEARCH_CRITERIA,
    searchCriteria: "after",
  } as SetSearchCriteriaAction;

  expect(movieListReducer(initialState, action)).toEqual({
    page: 2,
    searchCriteria: "after",
    total: 0,
    movies: [],
    error: "",
  });
});

test("MORE_MOVIES_RECEIVED", () => {
  const newMovie = { ...movieData, Title: "Before Hours" };

  const action = {
    type: MORE_MOVIES_RECEIVED,
    movies: [newMovie],
    page: 3,
  } as MoreMoviesReceivedAction;

  expect(
    movieListReducer({ ...initialState, movies: [movieData] }, action)
  ).toEqual({
    page: 3,
    searchCriteria: "aft",
    total: 10,
    movies: [movieData, newMovie],
    error: "unex",
  });
});

test("SET_ERROR", () => {
  const action = {
    type: SET_ERROR,
    error: "unexpected error",
  } as SetErrorAction;

  expect(movieListReducer(initialState, action)).toEqual({
    page: 2,
    searchCriteria: "aft",
    total: 10,
    movies: [movieData],
    error: "unexpected error",
  });
});
