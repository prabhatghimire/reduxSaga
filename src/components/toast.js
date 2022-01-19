import React, {useState, useEffect} from 'react';
import {Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Toast = ({type, message}) => {
  const [modalVisible, setmodalVisible] = useState(true);

  // const toastType = {
  //    'fail' : { color: 'color', 'message': message},
  //    'success' : { color: 'color', 'message': message},
  //    'warning' : { color: 'color', 'message': message},
  // }
  const closeToast = () => {
    setmodalVisible(false);
  };

  useEffect(() => {
    setTimeout(closeToast, 3000);
  }, []);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeToast}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{message}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={closeToast}>
              <Text style={styles.textStyle}>
                <Icon name="close" size={10} />
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    flexDirection: 'row',
    margin: 20,
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {color: 'white'},
  button: {
    borderRadius: 30,
  },
});

// performation optimization
// code optimization
// usememo
// useCallback
// memo
