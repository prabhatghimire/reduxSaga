import {takeLatest, put, call} from 'redux-saga/effects';
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
import * as RootNavigation from '../../RootNavigation'

function* onSignIn({payload}) {
  try {
    const response = yield call(signIn, payload);
    yield put(signInSuccess(response));
    yield RootNavigation.navigate('Posts');;
  } catch (error) {
    const {message} = error
    yield put(signInFail(message));
  }
}

function* onSignUp({payload}) {
  try {
  const response = yield call(signUp, payload);
  const {email} = response
  yield put(signUpSuccess({email}));
  yield RootNavigation.navigate('Login', {modalVisible: true,});;

  } catch (error) {
    const {message} = error
    yield put(signUpFail(message));
  }
}

function* onSignOut() {
  try {
    const response = yield call(signOut);
    yield put(signOutSuccess(null));
  } catch (error) {
    const {message} = error
    yield put(signOutFail(message));
  }
}

function* UserSaga() {
  yield takeLatest(SIGN_IN, onSignIn);
  yield takeLatest(SIGN_UP, onSignUp);
  yield takeLatest(SIGN_OUT, onSignOut);
}

export default UserSaga;
