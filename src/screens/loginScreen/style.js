import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
