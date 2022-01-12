import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native'
import {useDispatch} from 'react-redux';
import {removeState} from '../../API/localStorage';
import {signOut} from '../../store/actions/userAction';
import{styles} from './style'



export const LogoutButton = () => {

    const dispatch = useDispatch();

    const LogOut = () => {
      dispatch(signOut());
      removeState();
    };

    return (
      <View>
        <TouchableOpacity
          style={styles.LogoutButtonStyle}
          onPress={() => {
            LogOut();
          }}>
          <Text>LogOut</Text>
        </TouchableOpacity>
      </View>
    );
  };
