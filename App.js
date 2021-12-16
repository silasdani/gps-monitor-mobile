import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation, { navigationRef } from './src/routes/Navigation';
import { getCurrentLocation } from './src/redux/locationDuck'


export const store = configureStore();
const requestLocation = () => {
  store.dispatch(getCurrentLocation())
  setTimeout(requestLocation, 30000)
}

requestLocation();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
}