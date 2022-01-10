import React, {useEffect} from 'react';
import {Provider, useDispatch} from 'react-redux';
import {Store} from './src/store';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigation} from './src/screens/stackNavigation';
import {navigationRef} from './src/RootNavigation';
import {AsyncStorage, StatusBar} from 'react-native';
import {setState} from './src/store/actions/userAction';

export const saveState = async state => {
  try {
    if (state.length !== 0) {
      const response = await AsyncStorage.setItem('user', state);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getState = async () => {
  try {
    const state = await AsyncStorage.getItem('user');
    return JSON.parse(state);
  } catch (error) {
    console.log({error});
  }
};

export const removeState = async key => {
  const response = await AsyncStorage.removeItem(key);
};

const App = () => {
  return (
    <Provider store={Store}>
      <StatusBar
        backgroundColor="white"
        barStyle='dark-content'
      />
      <NavigationContainer ref={navigationRef}>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
