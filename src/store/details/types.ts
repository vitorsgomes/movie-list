export interface DetailState {
  movie: MovieDetail | null;
}

export const MOVIE_RECEIVED = "MOVIE_RECEIVED";

export interface MovieReceivedAction {
  type: typeof MOVIE_RECEIVED;
  movie: MovieDetail;
}

export type DetailActionTypes = MovieReceivedAction;
