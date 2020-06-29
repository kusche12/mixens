import { combineReducers } from 'redux';

import authReducer from './authReducer';
import drinkReducer from './drinkReducer';
import createReducer from './createReducer';

const rootReducer = combineReducers({
  authReducer: authReducer,
  drinkReducer: drinkReducer,
  createReducer: createReducer
});

export default rootReducer;