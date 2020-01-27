import {
  SET_LOGIN_PENDING,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_ERROR,
} from "../constants";

export default function AuthReducer(
  state = {
    isLoginSuccess: false,
    isLoginPending: false,
    loginError: null,
    isAdmin: null,
    token: localStorage.getItem('token'),
  },
  action
) {
  switch (action.type) {
    case SET_LOGIN_PENDING:
      return { ...state, isLoginPending: action.isLoginPending };

    case SET_LOGIN_SUCCESS:
      return {
        ...state,
        isLoginSuccess: action.isLoginSuccess,
        isAdmin: action.isAdmin
      };

    case SET_LOGIN_ERROR:
      return { ...state, loginError: action.loginError };

    default:
      return state;
  }
}
