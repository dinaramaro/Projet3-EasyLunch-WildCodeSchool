import { combineReducers } from 'redux';
import searchResults from './searchResults';
import menuResto from './menuResto';
import notificationsReducer from './notificationsReducer';
import log from './log';

const allReducers = combineReducers({
  searchResults,
  menuResto,
  notificationsReducer,
  log,
});

export default allReducers;
