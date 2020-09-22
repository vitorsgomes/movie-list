import { applyMiddleware, createStore, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import listReducer from "./list/reducer";
import detailReducer from "./details/reducer";

export default function configureStore() {
  const reducers = combineReducers({
    list: listReducer,
    details: detailReducer,
  });

  const store = createStore(reducers, applyMiddleware(thunkMiddleware));

  return store;
}
