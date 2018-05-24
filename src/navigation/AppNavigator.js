import { StackNavigator, SwitchNavigator, DrawerNavigator } from 'react-navigation';

import MapScreen from '../components/MapScreen';
import SignIn from '../components/SignIn';

const AppStack = StackNavigator({
  Main: {
    screen: MapScreen,
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
