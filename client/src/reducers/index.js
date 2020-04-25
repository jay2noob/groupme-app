import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import createGroup from './createGroup'

export default combineReducers({
  alert,
  auth,
  createGroup
});
