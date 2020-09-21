import {
  ListState,
  ListActionTypes,
  MOVIES_RECEIVED,
  MORE_MOVIES_RECEIVED,
  SET_SEARCH_CRITERIA,
  SET_ERROR,
} from "./types";

const initialState = {
  movies: [] as MovieListItem[],
  page: 1,
  total: 0,
  searchCriteria: "",
  error: "",
};

export default (state = initialState, action: ListActionTypes): ListState => {
  switch (action.type) {
    case MOVIES_RECEIVED:
      return {
        ...state,
        error: "",
        page: 1,
        total: action.total,
        movies: action.movies,
      };
    case SET_SEARCH_CRITERIA:
      return {
        ...state,
        movies: [],
        searchCriteria: action.searchCriteria,
        error: "",
        total: 0,
      };
    case MORE_MOVIES_RECEIVED:
      return {
        ...state,
        page: action.page,
        movies: [...state.movies, ...action.movies],
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
