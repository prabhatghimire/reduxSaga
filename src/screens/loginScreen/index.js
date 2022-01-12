import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Modal,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {signIn} from '../../store/actions/userAction';
import { styles } from './style';

export const LoginScreen = ({navigation, route}) => {
  const {user, isError, message} = useSelector(state => state.user);
  const [email, setEmail] = useState('prabhat.ghimire2@gmail.com');
  const [password, setPassword] = useState('prabhat');
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();

  const Login = () => {
    dispatch(signIn({email, password, rememberMe}));
  };

  return (
    <View style={styles.loginContainer}>
      <Text>Login Page</Text>
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
      {isError ? <Text style={{color: 'red'}}>{message}</Text> : <></>}
      <View style={styles.rememberMeContainer}>
        <Pressable
          style={{
            ...styles.checkBox,
            backgroundColor: rememberMe ? 'skyblue' : 'white',
          }}
          onPress={() => setRememberMe(!rememberMe)}></Pressable>
        <Text>Remember me</Text>
      </View>
     <View style={{flexDirection:"row"}}>
     <Pressable onPress={Login} style={styles.buttonStyle}>
        <Text>Login</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('Register');
        }}
        style={styles.buttonStyle}>
        <Text>Register</Text>
      </Pressable>
     </View>
    </View>
  );
};


