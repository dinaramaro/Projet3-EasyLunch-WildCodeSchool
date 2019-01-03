import { combineReducers } from 'redux';
import searchResults from './searchResults';
import menuResto from './menuResto';
import formOrder from './formOrder';
import cardResto from './cardResto';
import chooseMeals from './chooseMeals';

const allReducers = combineReducers({
  searchResults,
  menuResto,
  formOrder,
  cardResto,
  chooseMeals,
});

export default allReducers;
