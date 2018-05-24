import React from 'react';
import { StackNavigator, SwitchNavigator, DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import NavigationService from './NavigationService';
import MapScreen from '../components/MapScreen';
import SignIn from '../components/SignIn';

const AppStack = StackNavigator({
  Main: {
    screen: MapScreen,
    navigationOptions: {
      title: 'RNCab',
      headerLeft: <Icon.Button
        name="menu"
        backgroundColor="#fff"
        color="#000"
        size={30}
        onPress={() => NavigationService.openDrawer()}
      />,
    },
  },
});

const Drawer = DrawerNavigator({
  Main: {
    screen: AppStack,
  },
});

const AuthStack = StackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: null,
    },
  },
});

export default SwitchNavigator(
  {
    App: Drawer,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  },
);
