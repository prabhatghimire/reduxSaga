import { AsyncStorage } from "react-native";
import { useToast } from "../components/toast";

export const saveState = async state => {
    try {
      if (state.length !== 0) {
        const response = await AsyncStorage.setItem('user', state);
      }
    } catch (error) {
      useToast("fail", error)
    }
  };
  
  export async function  getState(key) {
    try {
      const state = await AsyncStorage.getItem(key);
      console.log(state)
      return JSON.parse(state);
    } catch (error) {
      useToast("fail", {error})
    }
  };
  
  export const removeState = async key => {
    try {
        const response = await AsyncStorage.removeItem(key);
    }
    catch(error){
      useToast("fail", {error})
    }
  };