import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import listReducer from "./list/reducer";

export default function configureStore() {
  const store = createStore(listReducer, applyMiddleware(thunkMiddleware));

  return store;
}
