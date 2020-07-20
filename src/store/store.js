import AsyncStorage from '@react-native-community/async-storage';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import rootReducer from '../reducers/index';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // Save Specific Reducers
  whitelist: ['authReducer', 'drinkReducer'],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(persistedReducer);

// Middleware: Redux Persist Persister
let persistor = persistStore(store);
persistor.purge();

// Exports
export { store, persistor };
