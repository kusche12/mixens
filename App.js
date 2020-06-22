import React from 'react';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/store/store';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ListScreen from './src/screens/ListScreen';
import DetailScreen from './src/screens/DetailScreen';
import CreateScreen from './src/screens/CreateScreen';
import SearchScreen from './src/screens/SearchScreen';
import UserScreen from './src/screens/UserScreen';
import AuthScreen from './src/screens/AuthScreen';

// Move between singular drink and edit drink
const drinkFlow = createStackNavigator({
  Detail: DetailScreen,
  Create: CreateScreen
});

// Move between list and singular drink
const detailFlow = createStackNavigator({
  List: ListScreen,
  drinkFlow
});

// Move between search and singular drink
const searchFlow = createStackNavigator({
  Search: SearchScreen,
  drinkFlow
});

// Move between user settings and authentication
const authFlow = createStackNavigator({
  User: UserScreen,
  Auth: AuthScreen
});

const Navigator = createBottomTabNavigator({
  detailFlow,
  Create: CreateScreen,
  searchFlow,
  authFlow
});

const Main = createAppContainer(Navigator);

export default function App() {
  return (
    <Provider store={store}>
      {/* TODO: Create a loading component to show during app start up */}
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
};