import {
  DetailState,
  MOVIE_RECEIVED,
  DetailActionTypes,
  SET_ERROR,
} from "./types";

const initialState = {
  movie: null,
  error: "",
} as DetailState;

export default (
  state = initialState,
  action: DetailActionTypes
): DetailState => {
  switch (action.type) {
    case MOVIE_RECEIVED:
      return {
        ...state,
        movie: action.movie,
        error: "",
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
