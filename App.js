import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/store/store';
import FirebaseSetup from './src/api/FirebaseSetup';
import * as firebase from 'firebase';
import Main from './src/navigation/Navigation';
import Loading from './src/components/Loading';

export default function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(FirebaseSetup.firebaseConfig);
  }
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      store.dispatch({ type: 'LOGIN', payload: user });
    } else {
      store.dispatch({ type: 'LOGOUT' });
    }
  });

  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
}
