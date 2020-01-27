// import API from "../apis/API";
import {
  SET_LOGIN_PENDING,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_ERROR,
  SET_ADMIN
} from "../constants";

export function login(email, password, isAdmin) {
  return dispatch => {
    dispatch(setLoginPending(true)); 
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));

    callLoginApi(email, password, isAdmin, error => {
      dispatch(setLoginPending(false));
      if (!error) {
        localStorage.setItem('token', 'token');
        dispatch(setLoginSuccess(true));
        dispatch(setAdminStatus(true));
      } else {
        dispatch(setLoginError(error));
      }
    });
  };
}

function setLoginPending(isLoginPending) {
  return {
    type: SET_LOGIN_PENDING,
    isLoginPending
  };
}

function setLoginSuccess(isLoginSuccess) {
  return {
    type: SET_LOGIN_SUCCESS,
    isLoginSuccess
  };
}

function setAdminStatus(isAdmin) {
  return {
    type: SET_ADMIN,
    isAdmin
  };
}

function setLoginError(loginError) {
  return {
    type: SET_LOGIN_ERROR,
    loginError
  };
}

function callLoginApi(email, password, isAdmin, callback) {
  // API.post("/");
  setTimeout(() => {
    if (email === "admin@example.com" && password === "admin") {
      return callback(null);
    } else {
      return callback(new Error("Invalid email and password"));
    }
  }, 1000);
}
