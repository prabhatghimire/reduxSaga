import React, { useState } from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {signIn, signUp} from '../store/actions/userAction'

export const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const {user, isLoading }  = useSelector(state => state.user)

    const Login = () => {
        dispatch(signIn({email, password}))
    }
    const SignUp = () => {
      dispatch(signUp({email, password}))
  }
  return (
    <View>
      <Text>Login Page</Text>
      <TextInput placeholder='email' value={email} onChangeText={(text)=>setEmail(text)}/>
      <TextInput placeholder='password' value={password} onChangeText={(text)=>setPassword(text)} secureTextEntry/>
      <Pressable onPress={Login} style={{backgroundColor : 'skyblue', width : 50, margin : 20}}><Text>Login</Text></Pressable>
      <Pressable onPress={SignUp} style={{backgroundColor : 'skyblue', width : 80, margin : 20}}><Text>Register</Text></Pressable>
    </View>
  );
};
