import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View} from 'react-native';
import {PostsScreen} from './postsScreen';
import {postScreen} from './postScreen';
import {useDispatch, useSelector} from 'react-redux';
import {UserProfileScreen} from './userProfile';

import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export const ButtomTabNavigation = () => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.user);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShadowVisible: false,
        tabBarStyle: {borderTopWidth: 0, elevation: 0},
      }}>
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: () => <Icon name="home" size={20} />,
          // headerShown: false,
        }}
      />
      <Tab.Screen
        name="To Do"
        component={UserProfileScreen}
        options={{tabBarIcon: () => <Icon name="calendar-minus-o" size={20} />}}
      />
      <Tab.Screen
        name="Group"
        component={UserProfileScreen}
        options={{
          tabBarIcon: () => <Icon name="users" size={20} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfileScreen}
        options={{
          tabBarIcon: () => {
            <Image
              style={{height: 25, width: 25, borderRadius: 50}}
              source={{
                uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
              }}
            />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
