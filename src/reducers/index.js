import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import AuthReducer from './AuthReducer'
import storyReducer from './Stories'

export default combineReducers({
  auth: AuthReducer,
  form: formReducer,
  story : storyReducer
});
