import React from 'react';
import {Provider} from 'react-redux';
import {Store} from './src/store';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigation} from './src/screens/stackNavigation';

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
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