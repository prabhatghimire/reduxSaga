import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_UP,
  SIGN_OUT,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAIL,
  SIGN_UP_FAIL,
  SIGN_UP_SUCCESS,
} from './actionTypes';

export const signIn = () => {
  return {type: SIGN_IN};
};

export const signInSuccess = user => {
  return {type: SIGN_IN_SUCCESS, payload: user};
};

export const signInFail = error => {
  return {type: SIGN_IN_FAIL, payload: error};
};

export const signUp = () => {
  return {type: SIGN_UP};
};

export const signUpSuccess = user => {
  return {type: SIGN_UP_SUCCESS, payload: user};
};

export const signUpFail = error => {
  return {type: SIGN_UP_FAIL, payload: error};
};

export const signOut = () => {
  return {type: SIGN_OUT};
};

export const signOutSuccess = () => {
  return {type: SIGN_OUT_SUCCESS, payload: none};
};

export const signOutFail = error => {
  return {type: SIGN_OUT_FAIL, payload: error};
};
