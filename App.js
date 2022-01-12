import React, {useEffect} from 'react';
import {Provider, useDispatch} from 'react-redux';
import {Store} from './src/store';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigation} from './src/screens/stackNavigation';
import {navigationRef} from './src/RootNavigation';
import {StatusBar} from 'react-native';


// to do  
//code readability
// react native best practices
// error display 

const App = () => {
  return (
    <Provider store={Store}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <NavigationContainer ref={navigationRef}>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;