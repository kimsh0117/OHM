import { combineReducers } from "redux";
import eventReducer from "reducers/eventReducer";

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
  eventReducer
});

export default rootReducer;