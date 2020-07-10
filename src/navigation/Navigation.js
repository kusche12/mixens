import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { MaterialCommunityIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons'; 
import { createAppContainer } from 'react-navigation';

import ListScreen from '../screens/ListScreen';
import DetailScreen from '../screens/DetailScreen';
import CreateScreen from '../screens/CreateScreen';
import SearchScreen from '../screens/SearchScreen';
import UserScreen from '../screens/UserScreen';
import ForgotScreen from '../screens/ForgotScreen';
import DeleteAccountScreen from '../screens/DeleteAccountScreen';
import ImageScreen from '../screens/ImageScreen';

// Move between list and singular drink
const detailFlow = createStackNavigator({
    List: ListScreen,
    Detail: DetailScreen,
    Create: CreateScreen,
    Image: ImageScreen
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
  };
  
  const createFlow = createStackNavigator({
    Create: CreateScreen,
    Image: ImageScreen
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
  };
  
  // Move between search and singular drink
  const searchFlow = createStackNavigator({
    Search: SearchScreen,
    List: ListScreen,
    Detail: DetailScreen,
    Create: CreateScreen
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
  };
  
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
  };
  
  const Navigator = createBottomTabNavigator({
    detailFlow,
    createFlow,
    searchFlow,
    userFlow,
  }, {
    lazy: false
  });

  const Main = createAppContainer(Navigator);

  export default Main;