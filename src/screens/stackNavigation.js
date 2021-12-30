import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PostsScreen} from './postsScreen';
import {postScreen} from './postScreen';
import {useSelector} from 'react-redux';
import {LoadingScreen} from './loadingScreen';
import {LoginScreen} from './loginScreen'

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Posts" component={PostsScreen} />
      <Stack.Screen name="post" component={postScreen} />
    </Stack.Navigator>
  );
};
