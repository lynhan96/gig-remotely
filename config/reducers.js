import { combineReducers } from 'redux';
import alert from 'redux/alert';
import user from 'redux/user';

export default combineReducers({
  alert,
  user,
});
