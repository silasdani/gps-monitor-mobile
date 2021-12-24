import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/routes/Navigation';
import { getCurrentLocation } from './src/redux/locationDuck'

const requestLocation = () => {
  if (store.getState().session.signedIn) store.dispatch(getCurrentLocation())
  setTimeout(requestLocation, 30000)
}

requestLocation();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
}