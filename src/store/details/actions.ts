import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../types/RootState";
import { MovieReceivedAction, MOVIE_RECEIVED } from "./types";

const movieReceived = (movie: MovieDetail): MovieReceivedAction => {
  return {
    type: MOVIE_RECEIVED,
    movie,
  };
};

export const fetchMovie = (
  movieId: string
): ThunkAction<void, RootState, undefined, Action<string>> => async (
  dispatch
) => {
  const response = await fetch(
    `http://www.omdbapi.com/?i=${movieId}&apikey=${process.env.REACT_APP_API_KEY}`
  );

  const data = await response.json();

  dispatch(movieReceived(data));
};
