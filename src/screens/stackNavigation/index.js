import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {LoginScreen} from '../loginScreen';
import {RegisterScreen} from '../registerScreen';
import {ButtomTabNavigation} from '../buttomTabNavigation';
import {setState} from '../../store/actions/userAction';
import {getState} from '../../API/localStorage';
import {PostScreen} from '../postDetailScreen';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.user);

  const _getUserState = async () => {
    dispatch(setState(await getState('user')));
  };

  // useEffect(() => {
  //   _getUserState();
  // }, [])



  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: 'center',
      }}>
      {user?.uid ? (
        <>
          <Stack.Screen
            name="Home"
            component={ButtomTabNavigation}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Post" component={PostScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};