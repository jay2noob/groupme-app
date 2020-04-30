import axios from "axios";
import {
  CREATE_GROUP,
  GET_GROUP,
  JOIN_GROUP,
  GET_MYGROUPS,
  GROUP_ERROR
} from "./types";

// create a new group
export const createGroup = ({ name, description, groupImage }) => async (dispatch) => {
  // axios config object - with the headers you want to include 
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      // 'x-auth-token': localStorage.getItem('token')
    }
  }

  const formData = new FormData();
  formData.append("name", name);
  formData.append("description", description);
  formData.append("groupImage", groupImage);

  try {
    const response = await axios.post('/api/groups', formData, config)

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

// join a new group
export const joinGroup = ({ id }) => async (dispatch) => {
  // axios config object - with the headers you want to include 
  const config = {
    headers: {
      "Content-Type": "application/json",
    }
  };

  const body = JSON.stringify({ join: 1 })

  try {
    const response = await axios.put(`/api/groups/join/${id}`, body, config)

    dispatch({
      type: JOIN_GROUP,
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