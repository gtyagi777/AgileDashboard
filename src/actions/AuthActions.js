// import API from "../apis/API";
import {
  SET_LOGIN_SUCCESS,
  SET_LOGIN_ERROR,
  SET_USER_ID,
  ADMIN,
  USER,
  NO_AUTH
} from "../constants";
import API from "../apis/API"


export function login(email, password, isAdmin) {
  return dispatch => {
    dispatch(setLoginSuccess(NO_AUTH));
    dispatch(setLoginError(null));

    callLoginSimulator(email, password, isAdmin, error => {
      if (!error) {
        if (isAdmin) {
          localStorage.setItem("token", ADMIN);
          localStorage.setItem("userID", 2);
          dispatch(setLoginSuccess(ADMIN));
        } else {
          localStorage.setItem("token", USER);
          dispatch(setLoginSuccess(USER));
          localStorage.setItem("userID", 2);
        }
      } else {
        dispatch(setLoginError(error));
      }
    });
  };
}


export function logout() {
  return dispatch => {
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    dispatch(setLoginSuccess(NO_AUTH));
    dispatch(setLoginError(null));
  };
}

function setLoginSuccess(payload) {
  return {
    type: SET_LOGIN_SUCCESS,
    loginStatus: payload
  };
}



function setUserID(payload) {
  return {
    type: SET_USER_ID,
    userid: payload
  };
}

function setLoginError(loginError) {
  return {
    type: SET_LOGIN_ERROR,
    loginError
  };
}

function callLoginSimulator(email, password, isAdmin, callback) {
  setTimeout(() => {
    if (email === "admin@example.com" && password === "admin") {
      return callback(null);
    } else {
      return callback(new Error("Invalid email and password"));
    }
  }, 1000);
}

function loginAPI (email, password, isAdmin) {
  return dispatch =>{
    const url = (isAdmin) ? '/api/login' : '/api/admin-login';
    API.post(url, {
      email: email,
      password: password
    })
    .then(function (response) {
      console.log(response);
      if (isAdmin) {
        localStorage.setItem("token", ADMIN);
        localStorage.setItem("userID", response.data.id);
        dispatch(setLoginSuccess(ADMIN));
        dispatch(setUserID(response.data.id))
      } else {
        localStorage.setItem("token", USER);
        localStorage.setItem("userID", response.data.id);
        dispatch(setLoginSuccess(USER));
        dispatch(setUserID(response.data.id))

      }
    })
    .catch(function (error) {
      console.log(error);
      dispatch(setLoginError(error));
    });

  }
}
