import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {LoginScreen} from './loginScreen';
import {signOut} from '../store/actions/userAction';
import {View, Text, TouchableOpacity} from 'react-native';
import {RegisterScreen} from './registerScreen';
import {ButtomTabNavigation} from './buttomTabNavigation';
import {setState} from '../store/actions/userAction';
import {getState} from '../../App';
import {PostScreen} from './postScreen';
const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.user);

  const LogOut = () => {
    dispatch(signOut());
  };

  const _getUserState = async () => {
    dispatch(setState(await getState('user')));
  };

  useEffect(() => {
    _getUserState();
  }, [])

  const LogoutButton = () => {
    return (
      <View>
        <TouchableOpacity
          style={{
            borderColor: 'skyblue',
            borderWidth: 2,
            width: 80,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            margin: 5,
          }}
          onPress={() => {
            LogOut();
          }}>
          <Text>LogOut</Text>
        </TouchableOpacity>
      </View>
    );
  };

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
