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
import {signIn} from '../store/actions/userAction';


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
    <View>
  
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
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Pressable
          style={{
            ...styles.checkBox,
            backgroundColor: rememberMe ? 'skyblue' : 'white',
          }}
          onPress={() => setRememberMe(!rememberMe)}></Pressable>
        <Text>Remember me</Text>
      </View>
      <Pressable
        onPress={Login}
        style={{backgroundColor: 'skyblue', width: 50, margin: 20}}>
        <Text>Login</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('Register');
        }}
        style={{backgroundColor: 'skyblue', width: 80, margin: 20}}>
        <Text>Register</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
  buttonStyle: {padding: 10, height: 40, borderRadius: 5},
  checkBox: {
    borderWidth: 2,
    height: 15,
    width: 15,
    margin: 10,
    borderColor: 'skyblue',
  },
});
