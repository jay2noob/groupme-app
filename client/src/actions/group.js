import axios from "axios";
import {
  CREATE_GROUP,
  GET_GROUP,
  GET_GROUPS,
  GROUP_ERROR
} from "./types";

// create a new group
export const createGroup = (formData) => async (dispatch) => {
  // axios config object - with the headers you want to include 
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    //
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

