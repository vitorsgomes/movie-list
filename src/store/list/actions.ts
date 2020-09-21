import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  SetSearchCriteriaAction,
  MoviesReceivedAction,
  ListState,
  MOVIES_RECEIVED,
  SET_SEARCH_CRITERIA,
  MoreMoviesReceivedAction,
  MORE_MOVIES_RECEIVED,
  SET_ERROR,
  SetErrorAction,
} from "./types";

const moviesReceived = (
  movies: MovieListItem[],
  total: number
): MoviesReceivedAction => {
  return {
    type: MOVIES_RECEIVED,
    movies,
    total,
  };
};

const moreMoviesReceived = (
  movies: MovieListItem[],
  page: number
): MoreMoviesReceivedAction => {
  return {
    type: MORE_MOVIES_RECEIVED,
    movies,
    page,
  };
};

const setSearchCriteriaAction = (
  searchCriteria: string
): SetSearchCriteriaAction => {
  return {
    type: SET_SEARCH_CRITERIA,
    searchCriteria,
  };
};

const setErrorAction = (error: string): SetErrorAction => {
  return {
    type: SET_ERROR,
    error,
  };
};

const fetchMoviesFromAPI = async (text: string, page: number) => {
  const response = await fetch(
    `http://www.omdbapi.com/?s=${text}&type=movie&page=${page}&apikey=${process.env.REACT_APP_API_KEY}`
  );

  return response.json();
};

export const searchMovies = (
  text: string
): ThunkAction<void, ListState, undefined, Action<string>> => async (
  dispatch
) => {
  dispatch(setSearchCriteriaAction(text));

  try {
    const data = await fetchMoviesFromAPI(text, 1);

    if (data.Response === "True") {
      dispatch(moviesReceived(data.Search, data.totalResults));
    } else {
      dispatch(setErrorAction(data.Error));
    }
  } catch (error) {
    dispatch(setErrorAction("Unexpected error"));
  }
};

export const fetchMoreMovies = (): ThunkAction<
  void,
  ListState,
  undefined,
  Action<string>
> => async (dispatch, getState) => {
  const { searchCriteria, page } = getState();
  const nextPage = page + 1;

  try {
    const data = await fetchMoviesFromAPI(searchCriteria, nextPage);

    if (data.Response === "True") {
      dispatch(moreMoviesReceived(data.Search, nextPage));
    } else {
      dispatch(setErrorAction(data.Error));
    }
  } catch (error) {
    dispatch(setErrorAction("Unexpected error"));
  }
};
