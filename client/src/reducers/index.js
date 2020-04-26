import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import group from "./group";
import profile from "./profile";

export default combineReducers({
  alert,
  auth,
  group,
  profile,
});
