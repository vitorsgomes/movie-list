import thunk from "redux-thunk";
import fetch from "jest-fetch-mock";
import configureMockStore from "redux-mock-store";
import { fetchMovies } from "./actions";
import { MOVIES_RECEIVED } from "./types";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("when api responds ", () => {
  test("with success and has results", async () => {
    const movieData = {
      Title: "After Hours",
      Year: "1985",
      imdbID: "tt0088680",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTUxMjEzMzI2MV5BMl5BanBnXkFtZTgwNTU3ODAxMDE@._V1_SX300.jpg",
    };

    fetch.mockResponseOnce(
      JSON.stringify({
        Response: "True",
        Search: [movieData],
      })
    );

    const store = mockStore({});
    await store.dispatch(fetchMovies("after"));

    const actualAction = store.getActions();

    expect(fetch).toHaveBeenCalledWith(
      `http://www.omdbapi.com/?s=after&type=movie&apikey=${process.env.REACT_APP_API_KEY}`
    );
    expect(actualAction[0]).toEqual({
      type: MOVIES_RECEIVED,
      payload: [movieData],
    });
  });
});
