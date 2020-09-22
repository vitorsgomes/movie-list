import { DetailState, MOVIE_RECEIVED, DetailActionTypes } from "./types";

const initialState = {
  movie: null,
};

export default (
  state = initialState,
  action: DetailActionTypes
): DetailState => {
  switch (action.type) {
    case MOVIE_RECEIVED:
      return {
        ...state,
        movie: action.movie,
      };
    default:
      return state;
  }
};
