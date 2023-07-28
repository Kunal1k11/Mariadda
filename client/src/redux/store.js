import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "./reducers/auth";
import thunk from "redux-thunk";

const RootReducers = combineReducers({
  // your reducers here...
  user: userReducer,
});

export const store = createStore(RootReducers, applyMiddleware(thunk));
