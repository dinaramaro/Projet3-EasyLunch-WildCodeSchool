import { combineReducers } from 'redux';
import searchResults from './searchResults';
import menuResto from './menuResto';
import formOrder from './formOrder';
import cardResto from './cardResto';
import chooseByUser from './chooseByUser';
import sendOrder from './sendOrder';
<<<<<<< HEAD
import getCode from './getCode';
=======
import notificationsReducer from './notificationsReducer';
>>>>>>> dev
import log from './log';

const allReducers = combineReducers({
  searchResults,
  menuResto,
  notificationsReducer,
  formOrder,
  cardResto,
  chooseByUser,
  sendOrder,
  log,
  getCode,
});

export default allReducers;
