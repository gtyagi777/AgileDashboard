import {
  SET_LOGIN_SUCCESS,
  SET_LOGIN_ERROR,
  SET_USER_ID,
  NO_AUTH
} from "../constants";

const initial = {
  loginStatus:
    localStorage.getItem("token") && localStorage.getItem("userID")
      ? localStorage.getItem("token")
      : NO_AUTH,
  loginError: null,
  userID:
    localStorage.getItem("token") && localStorage.getItem("userID")
      ? localStorage.getItem("userID")
      : null
};

export default function AuthReducer(state = initial, action) {
  switch (action.type) {
    case SET_LOGIN_SUCCESS:
      return {
        ...state,
        loginStatus: action.loginStatus
      };

    case SET_LOGIN_ERROR:
      return { ...state, loginError: action.loginError };

    case SET_USER_ID:
      return { ...state, userID: action.userid };

    default:
      return state;
  }
}
