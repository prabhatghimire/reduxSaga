import {call, put} from 'redux-saga';
import {
  signInSuccess,
  signInFail,
  signUpSuccess,
  signUpFail,
  signOutSuccess,
  signOutFail,
} from '../actions/userAction';
import {SIGN_IN, SIGN_UP, SIGN_OUT} from '../actions/actionTypes';
import {signIn, signUp, signOut} from '../../API/userAPI';
import {takeLatest} from 'redux-saga/effects';

function* onSignIn(payload) {
  try {
    const response = call(signIn(payload));
    yield put(signInSuccess(response));
  } catch (error) {
    yield put(signInFail(error.response));
  }
}

function* onSignUp() {
  const response = call(signUp);
  yield put(signUpSuccess(response));
  try {
  } catch (error) {
    yield put(signUpFail(error));
  }
}

function* onSignOut() {
  try {
    const response = call(signOut);
    yield put(signOutSuccess(null));
  } catch (error) {
    yield put(signOutFail(error));
  }
}

function* UserSaga() {
  yield takeLatest(SIGN_IN, onSignIn);
  yield takeLatest(SIGN_UP, onSignUp);
  yield takeLatest(SIGN_OUT, onSignOut);
}

export default UserSaga;
