import React, { Component } from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';

import Home from './app/views/Home'
import News from './app/views/News'
import ForYou from './app/views/ForYou'
export default class App extends Component{
  render() {
    return (
      <Navigator />
    )
  }
}

const stackRoute = {
  I: Home,
  LOVE: News,
  YOU: ForYou
};

const stackConfig = {
  initialRouteName: 'I',
  navigationOptions: ({navigation}) => (
    {
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'I') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'LOVE') {
          iconName = `ios-heart${focused ? '' : '-outline'}`;
        } else if (routeName === 'YOU') {
          iconName = `ios-female${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={30} color={tintColor} />;
      }
    }
  ),
  tabBarOptions: {
    activeTintColor: 'skyblue',
    inactiveTintColor: 'gray',
  },
};

const Navigator = createBottomTabNavigator(stackRoute, stackConfig);