import axios from "axios";
import {
  CREATE_GROUP,
  GET_GROUP,
  GET_MYGROUPS,
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
    const response = await axios.get(`/api/groups/group/${id}`)

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

// get all groups user belongs to 
// page page number as well
export const getMyGroups = ({ page }) => async (dispatch) => {

  try {
    const response = await axios.get(`/api/groups/${page}`)

    console.log(page);
    dispatch({
      type: GET_MYGROUPS,
      payload: response.data
    })
  } catch (err) {
    dispatch({
      type: GROUP_ERROR,
    })
  }

}