import movieListReducer from "./reducer";
import {
  MORE_MOVIES_RECEIVED,
  MoviesReceivedAction,
  MOVIES_RECEIVED,
  SetSearchCriteriaAction,
  SET_SEARCH_CRITERIA,
  MoreMoviesReceivedAction,
} from "./types";

const initialState = {
  movies: [] as MovieListItem[],
  page: 1,
  total: 0,
  searchCriteria: "",
};

const movieData = {
  Title: "After Hours",
  Year: "1985",
  imdbID: "tt0088680",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTUxMjEzMzI2MV5BMl5BanBnXkFtZTgwNTU3ODAxMDE@._V1_SX300.jpg",
};

test("MOVIES_RECEIVED", () => {
  const action = {
    type: MOVIES_RECEIVED,
    movies: [movieData],
    total: 10,
  } as MoviesReceivedAction;

  expect(movieListReducer(initialState, action)).toEqual({
    page: 1,
    searchCriteria: "",
    total: 10,
    movies: [movieData],
  });
});

test("SET_SEARCH_CRITERIA", () => {
  const action = {
    type: SET_SEARCH_CRITERIA,
    searchCriteria: "after",
  } as SetSearchCriteriaAction;

  expect(movieListReducer(initialState, action)).toEqual({
    page: 1,
    searchCriteria: "after",
    total: 0,
    movies: [],
  });
});

test("MORE_MOVIES_RECEIVED", () => {
  const newMovie = { ...movieData, Title: "Before Hours" };

  const action = {
    type: MORE_MOVIES_RECEIVED,
    movies: [newMovie],
    page: 2,
  } as MoreMoviesReceivedAction;

  expect(
    movieListReducer({ ...initialState, movies: [movieData] }, action)
  ).toEqual({
    page: 2,
    searchCriteria: "",
    total: 0,
    movies: [movieData, newMovie],
  });
});
