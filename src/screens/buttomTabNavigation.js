import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text, View} from 'react-native';
import {PostsScreen} from './postsScreen';
import {postScreen} from './postScreen';
import {useDispatch, useSelector} from 'react-redux';
import {UserProfileScreen} from './userProfile';

import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export const ButtomTabNavigation = () => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.user);

  // const TabList = [{name : '', icon : ''}]

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShadowVisible: false,
        tabBarStyle: {borderTopWidth: 0, elevation: 0},
        // tabBarIcon : ({focused, color, size}) => ({TabList.map((item)=>{<Icon name={item.icon} size={20} color={focused ? 'red' : 'black'} />})})
      }}>
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="home" size={20} color={focused ? 'red' : 'black'} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="To Do"
        component={UserProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="calendar-minus-o"
              size={20}
              color={focused ? 'red' : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Group"
        component={UserProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="users" size={20} color={focused ? 'red' : 'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfileScreen}
        options={{
          tabBarIcon: () => (
            <View>
              <Image
                style={{height: 25, width: 25, borderRadius: 50}}
                source={require('../../assets/image/profile.jpg')}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
