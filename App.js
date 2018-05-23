import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import Home from './app/views/Home';
import News from './app/views/News';
class App extends Component{
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
  initialRouteName: 'Home'
};

const Navigator = createStackNavigator(stackRoute, stackConfig);

export default App;



