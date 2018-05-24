import React from 'react';

import AppNavigator from './src/navigation/AppNavigator';
import NavigationService from './src/navigation/NavigationService';

export default function App() {
  return (
    <AppNavigator ref={ref => NavigationService.setTopLevelNavigator(ref)} />
  );
}
