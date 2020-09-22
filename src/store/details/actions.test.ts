import thunk from "redux-thunk";
import fetch from "jest-fetch-mock";
import configureMockStore from "redux-mock-store";
import { fetchMovie } from "./actions";
import { MOVIE_RECEIVED } from "./types";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

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
};

describe.only("fetch movie", () => {
  beforeEach(() => {
    fetch.mockReset();
  });

  test("with success", async () => {
    fetch.mockResponseOnce(JSON.stringify(movieData));

    const store = mockStore();
    await store.dispatch(fetchMovie("tt0088680"));

    const actualAction = store.getActions();

    expect(actualAction[0]).toEqual({
      type: MOVIE_RECEIVED,
      movie: movieData,
    });
  });
});
