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
  'VirtualizedLists should never be nested'
])

// Move between list and singular drink
const detailFlow = createStackNavigator({
  List: ListScreen,
  Detail: DetailScreen,
  Create: CreateScreen
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
// Style Drinks in DrinkList to alternate between white and lightgray

// TODO DEV:
// Navigate from Tag in DetailScreen to specific query of all drinks with that tag

// Add and Format ("May 20th, 2020") the date that the user first created the drink and add it to the object
// DELETE MIX. Learn how to permanently change the user's AsyncStorage by deleting the specific mix.

// DONE. Save the new edits into the Redux store !!
//    This will be difficult because the navigation button needs access to the Screen's current state and
//    to the actions that will update the Redux state with the drink's changes. Not sure how this is done yet.



// CAUTION:
// Picker default options has an occasional glitch where it does not work. Keep a watch on this.

// STRETCH:
// Animate the Down Arrow in EditSingleIngredient to rotate to an up arrow onpress
// Add a handful of pictures within assets that the user can use to choose a fill-in for one of their pictures