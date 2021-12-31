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

function* onSignIn({payload}) {
  try {
    const response = yield call(signIn, payload);
    yield put(signInSuccess(response));
  } catch (error) {
    yield put(signInFail(error.response));
  }
}

function* onSignUp({payload}) {
  const response = yield call(signUp, payload);
  console.log(response)
  yield put(signUpSuccess(response));
  try {
  } catch (error) {
    yield put(signUpFail(error));
  }
}

function* onSignOut() {
  try {
    const response = yield call(signOut);
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
