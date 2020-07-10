import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/store/store';
import FirebaseSetup from './src/api/FirebaseSetup';
import * as firebase from 'firebase';
import Main from './src/navigation/Navigation';
import Loading from './src/components/Loading';

export default function App() {
  if (!firebase.apps.length) { firebase.initializeApp(FirebaseSetup.firebaseConfig) };
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
};

// TODO STYLING:
// Install the Expo Simulator to test the app out in all displays of iPhone. Style until pixel perfect.

// TODO DEV:
// Change database rules for reading/writing drinks. Maximum sexurity.

// Fix the glitchy transitions between stack screens

// Make the UX of drink creation a bit more smooth. Make it something you enjoy doing, not a chore. Be proud of it.