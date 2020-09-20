import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer";

export default function configureStore() {
  const store = createStore(reducer, applyMiddleware(thunkMiddleware));

  return store;
}
