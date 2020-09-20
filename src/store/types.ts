export interface MoviesState {
  movies: Array<MovieListItem>;
}

export const MOVIES_RECEIVED = "MOVIES_RECEIVED";

interface MoviesReceivedAction {
  type: typeof MOVIES_RECEIVED;
  payload: Array<MovieListItem>;
}

export type MoviesActionTypes = MoviesReceivedAction;
