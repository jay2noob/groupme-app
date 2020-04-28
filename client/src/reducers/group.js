import {
  CREATE_GROUP,
  GET_GROUP,
  GET_MYGROUPS,
  GROUP_ERROR
} from "../actions/types";

// create inital state
const initialState = {
  currentGroup: null,
  myGroups: [],
  loading: true,
  isAdmin: false,
  isEditable: false,
  isJoined: false
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_GROUP:
      return {
        ...state,
        currentGroup: payload,
        loading: false,
        isAdmin: true,
        isEditable: true,
        isJoined: true
      };
    case GET_GROUP:
      return {
        ...state,
        currentGroup: payload,
        loading: false,
        isJoined: true
      };
    case GET_MYGROUPS:
      return {
        ...state,
        myGroups: payload,
        loading: false,
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
