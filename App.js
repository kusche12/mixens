import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/store/store';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { YellowBox } from 'react-native'


import ListScreen from './src/screens/ListScreen';
import DetailScreen from './src/screens/DetailScreen';
import CreateScreen from './src/screens/CreateScreen';
import SearchScreen from './src/screens/SearchScreen';
import UserScreen from './src/screens/UserScreen';
import AuthScreen from './src/screens/AuthScreen';

// TODO: Find the appropriate fix for displaying the Ingredients list component in CreateScreen
YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

// Move between list and singular drink
const detailFlow = createStackNavigator({
  List: ListScreen,
  Detail: DetailScreen
});

// Move between search and singular drink
const searchFlow = createStackNavigator({
  Search: SearchScreen,
  Detail: DetailScreen
});

// Move between user settings and authentication
const authFlow = createStackNavigator({
  User: UserScreen,
  Auth: AuthScreen
});

const Navigator = createBottomTabNavigator({
  detailFlow,
  createFlow: createStackNavigator({
    Create: CreateScreen
  }),
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

// Redux Persist explained
//https://itnext.io/react-native-why-you-should-be-using-redux-persist-8ad1d68fa48b

// TODO STYLE:
// Style the navbar: https://reactnavigation.org/docs/headers/
// Style the footer
// Style every other Drink in DrinkList to alternate between white and lightgray
// Create a default image for the CreateDrink. Save this within the assets so that the app can use it at any time

// TODO DEV:
// Navigate from Tag in DetailScreen to specific query of all drinks with that tag

// 2. Add the Name component
// 3. Add the instructions component
// 4. Add the tags component
// 5. Add to favorites component
// 6. Delete Mix component




// CAUTION:
// Picker default options has an occasional glitch where it does not work. Keep a watch on this.

// STRETCH:
// Animate the Down Arrow in EditSingleIngredient to rotate to an up arrow onpress