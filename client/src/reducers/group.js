import {
  CREATE_GROUP,
  GET_GROUP,
  GET_GROUPS,
  GROUP_ERROR,
} from "../actions/types";
import { profile_url } from "gravatar";

// create inital state
const initialState = {
  group: null,
  groups: [],
  loading: true,
  isAdmin: false,
  isEditable: false,
  isJoined: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_GROUP:
      return {
        ...state,
        group: payload,
        loading: false,
        isAdmin: true,
        isEditable: true,
        isJoined: true
      };
    case GROUP_ERROR:
      return {
        loading: true,
        isAdmin: false,
        isEditable: false,
        isJoined: false
      };
    default:
      return state;
  }
}
