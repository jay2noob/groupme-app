import axios from "axios";
import {
  CREATE_EVENT,
  GET_EVENT,
  JOIN_EVENT,
  GET_MYEVENTS,
  EVENT_ERROR
} from "./types";

// create a new group
export const createEvent = ({ groupID, title, description, location, time, eventImage }) => async (dispatch) => {
  // axios config object - with the headers you want to include 
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      // 'x-auth-token': localStorage.getItem('token')
    }
  }

  const formData = new FormData();
  formData.append("groupID", groupID);
  formData.append("title", title);
  formData.append("description", description);
  formData.append("location", location);
  formData.append("time", time);
  formData.append("eventImage", eventImage);

  try {
    const response = await axios.post('/api/events', formData, config)

    dispatch({
      type: CREATE_EVENT,
      payload: response.data
    })
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
    })
  }

}

