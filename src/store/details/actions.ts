import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../types/RootState";
import { MovieReceivedAction, MOVIE_RECEIVED, SET_ERROR } from "./types";

const movieReceivedAction = (movie: MovieDetail): MovieReceivedAction => {
  return {
    type: MOVIE_RECEIVED,
    movie,
  };
};

const setErrorAction = (error: string) => {
  return {
    type: SET_ERROR,
    error: error,
  };
};

export const fetchMovie = (
  movieId: string
): ThunkAction<void, RootState, undefined, Action<string>> => async (
  dispatch
) => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?i=${movieId}&apikey=${process.env.REACT_APP_API_KEY}`
    );

    const data = await response.json();

    if (data.Response === "True") {
      dispatch(movieReceivedAction(data));
    } else {
      dispatch(setErrorAction(data.Error));
    }
  } catch (error) {
    dispatch(setErrorAction("Unexpected error"));
  }
};
