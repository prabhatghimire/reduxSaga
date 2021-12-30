import React, { useState } from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {signIn} from '../store/actions/userAction'

export const LoginScreen = () => {
    const [email, setEmail] = useState('prabhat.ghimire2@gmail.com')
    const [password, setPassword] = useState('prabhat')
    const dispatch = useDispatch()

    const {user, isLoading }  = useSelector(state => state.user)
console.log(user, isLoading)

    const Login = () => {
        dispatch(signIn({email, password}))
    }
  return (
    <View>
      <Text>Login Page</Text>
      <TextInput placeholder='email' value={email} onChangeText={(text)=>setEmail(text)}/>
      <TextInput placeholder='password' value={password} onChangeText={(text)=>setPassword(text)} secureTextEntry/>
      <Pressable onPress={Login} style={{backgroundColor : 'skyblue', width : 50}}><Text>Login</Text></Pressable>
    </View>
  );
};
