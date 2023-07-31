import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "./reducers/auth";
import thunk from "redux-thunk";
import profileReducer from "./reducers/profile";

const RootReducers = combineReducers({
  // your reducers here...
  user: userReducer,
  profile: profileReducer,
});

export const store = createStore(RootReducers, applyMiddleware(thunk));
