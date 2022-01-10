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

  const ProfileIcon = () => {
    return (
      <View>
        <Image
          style={{
            height: 25,
            width: 25,
          }}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />
      </View>
    );
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{tabBarIcon: () => <Icon name="home" size={25} />}}
      />
      <Tab.Screen
        name="extra"
        component={UserProfileScreen}
        options={{tabBarIcon: () => <Icon name="calendar-minus-o" size={25} />}}
      />
      <Tab.Screen
        name="extraextra"
        component={UserProfileScreen}
        options={{
          tabBarIcon: () => <Icon name="users" size={25} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfileScreen}
        options={{
          tabBarIcon: () => {
            <ProfileIcon />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
