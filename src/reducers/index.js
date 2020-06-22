import { combineReducers } from 'redux';

import authReducer from './authReducer';
import drinkReducer from './drinkReducer';

const rootReducer = combineReducers({
  authReducer: authReducer,
  drinkReducer: drinkReducer,
});

export default rootReducer;