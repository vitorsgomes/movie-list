export interface MoviesState {
  movies: Array<MovieListItem>;
  page: number;
  total: number;
  searchCriteria: string;
  error: string;
}

export const MOVIES_RECEIVED = "MOVIES_RECEIVED";
export const MORE_MOVIES_RECEIVED = "MORE_MOVIES_RECEIVED";
export const SET_SEARCH_CRITERIA = "SET_SEARCH_CRITERIA";
export const SET_ERROR = "SET_ERROR";

export interface MoviesReceivedAction {
  type: typeof MOVIES_RECEIVED;
  movies: Array<MovieListItem>;
  total: number;
}

export interface MoreMoviesReceivedAction {
  type: typeof MORE_MOVIES_RECEIVED;
  movies: Array<MovieListItem>;
  page: number;
}

export interface SetSearchCriteriaAction {
  type: typeof SET_SEARCH_CRITERIA;
  searchCriteria: string;
}

export interface SetErrorAction {
  type: typeof SET_ERROR;
  error: string;
}

export type MoviesActionTypes =
  | MoviesReceivedAction
  | SetSearchCriteriaAction
  | MoreMoviesReceivedAction
  | SetErrorAction;
