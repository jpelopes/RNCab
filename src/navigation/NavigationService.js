import { NavigationActions, DrawerActions } from 'react-navigation';

let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function navigate(routeName, params) {
  navigator.dispatch(NavigationActions.navigate({
    type: NavigationActions.NAVIGATE,
    routeName,
    params,
  }));
}

function openDrawer() {
  navigator.dispatch(DrawerActions.openDrawer());
}

export default {
  navigate,
  setTopLevelNavigator,
  openDrawer,
};
