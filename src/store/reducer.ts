import { MoviesState, MoviesActionTypes, MOVIES_RECEIVED } from "./types";

const initialState = {
  movies: [] as MovieListItem[],
};

export default (
  state = initialState,
  action: MoviesActionTypes
): MoviesState => {
  switch (action.type) {
    case MOVIES_RECEIVED:
      return {
        movies: [...action.payload],
      };
    default:
      return state;
  }
};
