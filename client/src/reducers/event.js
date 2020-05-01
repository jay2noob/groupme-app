import {
  CREATE_EVENT,
  GET_EVENT,
  GET_MYEVENTS,
  EVENT_ERROR,
  JOIN_EVENT
} from "../actions/types";

// create inital state
const initialState = {
  currentEvent: null,
  myEvents: [],
  loading: true,
  isAdmin: false,
  isEditable: false,
  isJoined: false
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_EVENT:
      return {
        ...state,
        currentEvent: payload,
        loading: false,
        isHost: true,
        isEditable: true,
        isGoing: true
      };
    case JOIN_EVENT:
      return {
        ...state,
        currentEvent: payload,
        loading: false,
        isHost: true,
        isEditable: true,
        isGoing: true
      };
    case GET_EVENT:
      return {
        ...state,
        currentEvent: payload,
        loading: false,
        isGoing: true
      };
    case GET_MYEVENTS:
      return {
        ...state,
        myEvents: [ ...state.myEvents, ...payload ],
        loading: false,
        isGoing: true
      };
    case EVENT_ERROR:
      return {
        loading: true,
        isHost: false,
        isEditable: false,
        isGoing: false
      };
    default:
      return state;
  }
}
