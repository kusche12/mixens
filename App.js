import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/store/store';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { YellowBox } from 'react-native'
import { MaterialCommunityIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons'; 
import FirebaseSetup from './src/api/FirebaseSetup';
import * as firebase from 'firebase';

import ListScreen from './src/screens/ListScreen';
import DetailScreen from './src/screens/DetailScreen';
import CreateScreen from './src/screens/CreateScreen';
import SearchScreen from './src/screens/SearchScreen';
import UserScreen from './src/screens/UserScreen';
import ForgotScreen from './src/screens/ForgotScreen';
import DeleteAccountScreen from './src/screens/DeleteAccountScreen';
import Loading from './src/components/Loading';

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
detailFlow.navigationOptions = () => {
  return {
    title: 'Home',
    tabBarIcon: ({ focused }) => {
      let iconColor = 'gray';
      if (focused) {
          iconColor = '#64CAF6';
      }
      return <MaterialCommunityIcons name="notebook" size={30} color={iconColor} />;
    },
    tabBarOptions: {
      activeTintColor: '#64CAF6',
      inactiveTintColor: 'gray'
    },
  }
}

// Move between search and singular drink
const searchFlow = createStackNavigator({
  Search: SearchScreen,
  Detail: DetailScreen
});
searchFlow.navigationOptions = () => {
  return {
    title: 'Search',
    tabBarIcon: ({ focused }) => {
      let iconColor = 'gray';
      if (focused) {
          iconColor = '#64CAF6';
      }
      return <Ionicons name="md-search" size={40} color={iconColor} style={{ bottom: 2 }}/>;
    },
    tabBarOptions: {
      activeTintColor: '#64CAF6',
      inactiveTintColor: 'gray'
    }
  }
}

const createFlow = createStackNavigator({
  Create: CreateScreen,
});
createFlow.navigationOptions = () => {
  return {
    title: 'Create',
    tabBarIcon: ({ focused }) => {
      let iconColor = 'gray';
      if (focused) {
          iconColor = '#64CAF6';
      }
      return <FontAwesome5 name="glass-martini-alt" size={26} color={iconColor} />;
  },
  tabBarOptions: {
      activeTintColor: '#64CAF6',
      inactiveTintColor: 'gray'
  }}
}

const userFlow = createStackNavigator({
  User: UserScreen,
  Forgot: ForgotScreen,
  DeleteAccount: DeleteAccountScreen
});
userFlow.navigationOptions = () => {
  return {
    title: 'Profile',
    tabBarIcon: ({ focused }) => {
      let iconColor = 'gray';
      if (focused) {
          iconColor = '#64CAF6';
      }
      return <FontAwesome5 name="user-alt" size={28} color={iconColor} style={{ top: 1 }} />;
    },
    tabBarOptions: {
      activeTintColor: '#64CAF6',
      inactiveTintColor: 'gray'
    }
  }
}

const Navigator = createBottomTabNavigator({
  detailFlow,
  createFlow,
  searchFlow,
  userFlow,
}, {
  lazy: false
});

const Main = createAppContainer(Navigator);

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

// TODO DEV:
// Navigate from Tag in DetailScreen to specific query of all drinks with that tag

// BUGS:

// STRETCH:
// Animate the Down Arrow in EditSingleIngredient to rotate to an up arrow onpress
// Add a handful of pictures within assets that the user can use to choose a fill-in for one of their pictures