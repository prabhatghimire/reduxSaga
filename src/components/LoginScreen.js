import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {signIn} from '../store/actions/userAction';
import { Toast } from './toast';


export const UserCredientialsForm = props => {
  const {user, isError, message} = useSelector(state => state.user);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(password);
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();

  const Login = () => {
    dispatch(signIn({email, password, rememberMe}));
  };

  const toast = () =>{
    if (isError) {return <Toast type='error' message={message}></Toast>}
    return null
  }
const changeRememberMe = () => {setRememberMe(!rememberMe)} 
  
  return (
    <View style={styles.loginContainer}>
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
      <View style={styles.rememberMeContainer}>
        <Pressable
          style={{
            ...styles.checkBox,
            backgroundColor: rememberMe ? 'skyblue' : 'white',
          }}
          onPress={changeRememberMe}></Pressable>
        <Text>Remember me</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
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
      {toast()}
    </View>
  );
};





const styles = StyleSheet.create({
  loginContainer: {flex: 1, backgroundColor: 'white'},
  ModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    height: 150,
    padding: 20,
  },
  rememberMeContainer : {flexDirection: 'row', alignItems: 'center'},
  buttonStyle: {
    margin: 10,
    height: 40,
    width: 100,
    borderRadius: 10,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBox: {
    borderWidth: 2,
    height: 15,
    width: 15,
    margin: 10,
    borderColor: 'skyblue',
  },
});
