import axios from "axios";
import {
  CREATE_GROUP,
  GET_GROUP,
  GROUP_ERROR
} from "./types";

// create a new group
export const createGroup = ({ name, description }) => async (dispatch) => {
  // axios config object - with the headers you want to include 
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({ name, description });

  try {
    const response = await axios.post('/api/groups', body, config)

    dispatch({
      type: CREATE_GROUP,
      payload: response.data
    })
  } catch (err) {
    dispatch({
      type: GROUP_ERROR,
    })
  }

}

// get group by id
export const getGroup = (id) => async (dispatch) => {

  try {
    const response = await axios.get(`/api/group/${id}`)

    dispatch({
      type: GET_GROUP,
      payload: response.data
    })
  } catch (err) {
    dispatch({
      type: GROUP_ERROR,
    })
  }

}