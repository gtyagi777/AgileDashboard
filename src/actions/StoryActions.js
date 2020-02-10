import API from "../apis/API";
import { GET_STORY, SET_FORMDATA } from "../constants";

export const  createStory   = (values) => async (dispatch, getState) => {
  console.log(values);
  dispatch({ type: SET_FORMDATA, payload: values });
}

export const getUserStories = () => async (dispatch, getState) => {
  const response = await API.get(`/api/getStories`);
  let i = 1;
  response.data.map(obj => {
    obj["id"] = i;
    i++;
    return obj;
  });

  dispatch({ type: GET_STORY, payload: response.data });
};

export const setUserStories = data => async (dispatch, getState) => {
  let filteredData = data;
  if (getState().auth.loginStatus == "ADMIN") {
  } else {
    filteredData = data.filter(obj => {
      if (obj.createdBy == getState().auth.userID) {
        return obj;
      }
    });
  }
  dispatch({ type: GET_STORY, payload: filteredData });
};

export const updateStory = (id, status) => async (dispatch, getState) => {
  let data = getState().story.stories.map(obj => {
    if (obj.id == id) {
      obj.status = status;
    }
    return obj;
  });

  dispatch({ type: GET_STORY, payload: data });
};
