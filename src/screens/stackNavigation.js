import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PostsScreen} from './postsScreen';
import {postScreen} from './postScreen';
import {useDispatch, useSelector} from 'react-redux';
import {LoadingScreen} from './loadingScreen';
import {LoginScreen} from './loginScreen';
import {signOut} from '../store/actions/userAction';
import {View, Text, TouchableOpacity} from 'react-native';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.user);

  const LogOut = () => {
    dispatch(signOut());
  };
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
    <Stack.Navigator>
      {user.uid ? (
        <>
          <Stack.Screen
            name="Posts"
            component={PostsScreen}
            options={{
              headerTitleAlign: 'center',
              title: 'Posts',
              headerRight: () => <LogoutButton />,
            }}
          />
          <Stack.Screen
            name="post"
            component={postScreen}
            options={{
              headerTitleAlign: 'center',
              title: 'Post',
              headerRight: () => <LogoutButton />,
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerTitleAlign: 'center',
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
