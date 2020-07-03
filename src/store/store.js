import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';

import rootReducer from '../reducers/index';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // Save Specific Reducers
  whitelist: [
    'authReducer',
    'drinkReducer'
  ],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(
    createLogger(),
  ),
);

// Middleware: Redux Persist Persister
let persistor = persistStore(store); // IMPORTANT: .purge() is temporary. It dumps local storage every refresh, used for development only
//persistor.purge();

// Exports
export { store, persistor };