import React, {useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {signUp} from '../../store/actions/userAction';
import {styles} from './style';

export const RegisterScreen = ({navigation}) => {
  const {user, isError, message} = useSelector(state => state.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const SignUp = () => {
    dispatch(signUp({email, password}));
  };

  return (
    <View style={styles.registerScreenContainer}>
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
      <View style={styles.buttonContainer}>
        <Pressable onPress={SignUp} style={styles.buttonStyle}>
          <Text>Register</Text>
        </Pressable>
        <Pressable style={styles.buttonStyle}
          onPress=
          {() => {
            navigation.navigate('Login');
          }}>
          <Text>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};
