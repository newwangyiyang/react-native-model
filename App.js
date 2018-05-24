import React, { Component } from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';

import Home from './app/views/Home'
import News from './app/views/News'

export default class App extends Component{
  render() {
    return (
      <Navigator />
    )
  }
}

const stackRoute = {
  Home,
  News
};

const stackConfig = {
  initialRouteName: 'Home',
  navigationOptions: ({navigation}) => (
    {
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'News') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={30} color={tintColor} />;
      }
    }
  )
};

const Navigator = createBottomTabNavigator(stackRoute, stackConfig);