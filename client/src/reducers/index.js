import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import group from "./group";
import profile from "./profile";
import event from './event';
import post from './post';

export default combineReducers({
  alert,
  auth,
  group,
  profile,
  event,
  post
});
