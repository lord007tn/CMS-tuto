import { combineReducers } from "redux";
import auth from "./auth.reducers";
import category from './category.reducers'
export default combineReducers({
  auth,
  category
});
