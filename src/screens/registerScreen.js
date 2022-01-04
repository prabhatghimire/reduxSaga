import React, {useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {signUp} from '../store/actions/userAction';

export const RegisterScreen = ({navigation}) => {
  const {user, isError, message} = useSelector(state => state.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const SignUp = () => {
    dispatch(signUp({email, password}));
  };

  return (
    <View style={{flex: 1}}>
      <Text>Register page</Text>
      <TextInput
        placeholder="email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      {isError ? <Text style={{color: 'red'}}> {message}</Text> : <></>}
      <Pressable
        onPress={SignUp}
        style={{backgroundColor: 'skyblue', width: 80, margin: 20}}>
        <Text>Register</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={{backgroundColor: 'skyblue', width: 50, margin: 20}}>
        <Text>Login</Text>
      </Pressable>
    </View>
  );
};
