import {
  MoviesState,
  MoviesActionTypes,
  MOVIES_RECEIVED,
  MORE_MOVIES_RECEIVED,
  SET_SEARCH_CRITERIA,
} from "./types";

const initialState = {
  movies: [] as MovieListItem[],
  page: 1,
  total: 0,
  searchCriteria: "",
};

export default (
  state = initialState,
  action: MoviesActionTypes
): MoviesState => {
  switch (action.type) {
    case MOVIES_RECEIVED:
      return {
        ...state,
        page: 1,
        total: action.total,
        movies: action.movies,
      };
    case SET_SEARCH_CRITERIA:
      return {
        ...state,
        searchCriteria: action.searchCriteria,
      };
    case MORE_MOVIES_RECEIVED:
      return {
        ...state,
        page: action.page,
        movies: [...state.movies, ...action.movies],
      };
    default:
      return state;
  }
};
