import thunk from "redux-thunk";
import fetch from "jest-fetch-mock";
import configureMockStore from "redux-mock-store";
import { fetchMoreMovies, searchMovies } from "./actions";
import {
  MORE_MOVIES_RECEIVED,
  MOVIES_RECEIVED,
  SET_ERROR,
  SET_SEARCH_CRITERIA,
} from "./types";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const movieData = {
  Title: "After Hours",
  Year: "1985",
  imdbID: "tt0088680",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTUxMjEzMzI2MV5BMl5BanBnXkFtZTgwNTU3ODAxMDE@._V1_SX300.jpg",
};

describe("search movies", () => {
  beforeEach(() => {
    fetch.mockReset();
  });

  test("with success", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        Response: "True",
        totalResults: 20,
        Search: [movieData],
      })
    );

    const store = mockStore({ list: { searchCriteria: "test", page: 2 } });
    await store.dispatch(searchMovies("after"));

    const actualAction = store.getActions();

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_URL}/?s=after&type=movie&page=1&apikey=${process.env.REACT_APP_API_KEY}`
    );

    expect(actualAction[0]).toEqual({
      type: SET_SEARCH_CRITERIA,
      searchCriteria: "after",
    });

    expect(actualAction[1]).toEqual({
      type: MOVIES_RECEIVED,
      movies: [movieData],
      total: 20,
    });
  });

  test("with error", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        Response: "False",
        Error: "Too many movies",
      })
    );

    const store = mockStore({ list: { searchCriteria: "test", page: 2 } });
    await store.dispatch(searchMovies("after"));

    const actualAction = store.getActions();

    expect(actualAction[1]).toEqual({
      type: SET_ERROR,
      error: "Too many movies",
    });
  });

  test("with exception", async () => {
    fetch.mockReject(new Error("foo"));

    const store = mockStore({ list: { searchCriteria: "test", page: 2 } });
    await store.dispatch(searchMovies("after"));

    const actualAction = store.getActions();

    expect(actualAction[1]).toEqual({
      type: SET_ERROR,
      error: "Unexpected error",
    });
  });
});

describe("fetch more movies", () => {
  beforeEach(() => {
    fetch.mockReset();
  });

  test("with success", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        Response: "True",
        totalResults: 20,
        Search: [movieData],
      })
    );

    const store = mockStore({ list: { searchCriteria: "test", page: 2 } });
    await store.dispatch(fetchMoreMovies());

    const actualAction = store.getActions();

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_URL}/?s=test&type=movie&page=3&apikey=${process.env.REACT_APP_API_KEY}`
    );

    expect(actualAction[0]).toEqual({
      type: MORE_MOVIES_RECEIVED,
      movies: [movieData],
      page: 3,
    });
  });

  test("with error", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        Response: "False",
        Error: "Too many movies",
      })
    );

    const store = mockStore({ list: { searchCriteria: "test", page: 2 } });
    await store.dispatch(fetchMoreMovies());

    const actualAction = store.getActions();

    expect(actualAction[0]).toEqual({
      type: SET_ERROR,
      error: "Too many movies",
    });
  });

  test("with exception", async () => {
    fetch.mockReject(new Error("foo"));

    const store = mockStore({ list: { searchCriteria: "test", page: 2 } });
    await store.dispatch(fetchMoreMovies());

    const actualAction = store.getActions();

    expect(actualAction[0]).toEqual({
      type: SET_ERROR,
      error: "Unexpected error",
    });
  });
});
