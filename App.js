import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/routes/Navigation';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
}