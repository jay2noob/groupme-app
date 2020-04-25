import {
  CREATE_GROUP,
  GET_GROUP,
  GET_GROUPS,
  GROUP_ERROR,
} from "../actions/types";

// create inital state
const initialState = {
  groupID: null,
  memberID: null,
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
        ...payload,
        loading: false,
        isAdmin: true,
        isEditable: true,
      };
    case GROUP_ERROR:
      return {
        groupID: null,
        memberID: null,
        loading: false,
        isAdmin: false,
        isEditable: false,
        isJoined: false,
      };
    default:
      return state;
  }
}
