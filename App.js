import React from 'react';
import {Provider} from 'react-redux';
import {Store} from './src/store';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigation} from './src/screens/stackNavigation';
import {navigationRef} from './src/RootNavigation';

const saveState = state => {
  if (state.length !== 0) {
    localStorage.setItem('state', JSON.stringify(state));
  }
};

export const getState = () => {
  try {
    const state = localStorage.getItem('state');
    if (state === null) return null;
    return JSON.parse(state);
  } catch (error) {
    return null;
  }
};

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer ref={navigationRef}>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

//redux saga effects
//call put delay fork yield
//select take takeleatest tekeevery
//cancel
