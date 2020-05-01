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

// get event by id
export const getEvent = (id) => async (dispatch) => {

  try {
    const response = await axios.get(`/api/events/${id}`)

    dispatch({
      type: GET_EVENT,
      payload: response.data
    })
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
    })
  }

}

// get all groups user belongs to 
// page page number as well
export const getMyEvents = ({ page }) => async (dispatch) => {

  try {
    const response = await axios.get(`/api/events/${page}`)
    // console.log(page);
    // if (page === 0) {
    //   dispatch({
    //     type: GROUP_ERROR
    //   })
    // }
    dispatch({
      type: GET_MYEVENTS,
      payload: response.data
    })
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
    })
  }

}

// join a new group
export const joinEvent = ({ id }) => async (dispatch) => {
  // axios config object - with the headers you want to include 
  const config = {
    headers: {
      "Content-Type": "application/json",
    }
  };

  const body = JSON.stringify({ join: 1 })

  try {
    const response = await axios.put(`/api/events/join/${id}`, body, config)

    dispatch({
      type: JOIN_EVENT,
      payload: response.data
    })
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
    })
  }

}