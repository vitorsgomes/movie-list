export interface DetailState {
  movie: MovieDetail | null;
  error: string;
}

export const MOVIE_RECEIVED = "MOVIE_RECEIVED";
export const SET_ERROR = "SET_ERROR";

export interface MovieReceivedAction {
  type: typeof MOVIE_RECEIVED;
  movie: MovieDetail;
}

export interface SetErrorAction {
  type: typeof SET_ERROR;
  error: string;
}

export type DetailActionTypes = MovieReceivedAction | SetErrorAction;
