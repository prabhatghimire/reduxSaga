import React from 'react'
import {View, TouchableOpacity, Text} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import {removeState} from '../../App'
import { signOut } from '../store/actions/userAction'


export const UserProfileScreen = () => {
  const {user} = useSelector(state => state.user)
   const dispatch = useDispatch()
useSelector
 const LogOut = () => {
  dispatch(signOut());
  removeState()
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



  return(
    <View><Text>user Profile</Text>
    <Text>
      {user.email}
      {user.displayName}
    </Text>
    <LogoutButton /></View>
  )
}