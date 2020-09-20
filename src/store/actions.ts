import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { MoviesActionTypes, MoviesState, MOVIES_RECEIVED } from "./types";

const moviesReceived = (movies: MovieListItem[]): MoviesActionTypes => {
  return {
    type: MOVIES_RECEIVED,
    payload: movies,
  };
};

export const fetchMovies = (
  text: string
): ThunkAction<void, MoviesState, undefined, Action<string>> => async (
  dispatch
) => {
  return fetch(
    `http://www.omdbapi.com/?s=${text}&type=movie&apikey=${process.env.REACT_APP_API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === "True") {
        dispatch(moviesReceived(data.Search));
      }
    });
};
