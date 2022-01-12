import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import { useSelector} from 'react-redux';
import {LogoutButton} from '../LogoutButton'
import { styles } from './style';


export const UserProfileScreen = () => {
  const {user} = useSelector(state => state.user);


  return (
    <View style={styles.profileContainer}>
      <Text>user Profile</Text>
      <Text>
        {user.email}
        {user.displayName}
      </Text>
      <LogoutButton />
    </View>
  );
};
