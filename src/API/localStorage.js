import { AsyncStorage } from "react-native";

export const saveState = async state => {
    try {
      if (state.length !== 0) {
        const response = await AsyncStorage.setItem('user', state);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  export async function  getState(key) {
    try {
      const state = await AsyncStorage.getItem(key);
      console.log(state)
      return JSON.parse(state);
    } catch (error) {
      console.log({error});
    }
  };
  
  export const removeState = async key => {
    try {
        const response = await AsyncStorage.removeItem(key);
    }
    catch(error){
        console.log('unable to logout from local store', error)
    }
  };