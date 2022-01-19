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
import {Toast} from '../../components/toast';
import {signIn} from '../../store/actions/userAction';
import {styles} from './style';
import { UserCredientialsForm } from '../../components/LoginScreen';

export const LoginScreen = ({navigation, route}) => {
  const {user, isError, message} = useSelector(state => state.user);
  const [email, setEmail] = useState('prabhat123@gmail.com');
  const [password, setPassword] = useState('prabhat');
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const Login = () => {
    dispatch(signIn({email, password, rememberMe}));
  };

  return (
    <View style={styles.loginContainer}>
      <Text>Login Page</Text>
     <UserCredientialsForm />
    </View>
  );
};
