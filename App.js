import React from 'react';

import { Provider } from 'react-redux';

import configureStore from './src/store/configureStore';

import AppNavigator from './src/navigation/AppNavigator';
import NavigationService from './src/navigation/NavigationService';

const initialState = {
  locations: {
    origin: {},
    destination: {},
  },
};

const store = configureStore(initialState);

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator ref={ref => NavigationService.setTopLevelNavigator(ref)} />
    </Provider>
  );
}
