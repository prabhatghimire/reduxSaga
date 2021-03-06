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
import {saveState, removeState} from '../../API/localStorage'
import { useToast } from '../../components/toast';

function* onSignIn({payload}) {
  try {
    const response = yield call(signIn, payload);
    yield put(signInSuccess(response));
    if(payload.rememberMe) {
      yield saveState(response)
    }
    // yield RootNavigation.navigate('Home', { screen: 'Posts' });
  } catch (error) {
    const {message} = error
    yield put(signInFail(message));
    // yield call(useToast("fail", message))
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
    // yield call(useToast("fail", message))
  }
}

function* onSignOut() {
  try {
    const response = yield call(signOut);
    yield put(signOutSuccess({}));
    yield call(removeState('user'))
    yield RootNavigation.navigate('Login');
    
  } catch (error) {
    const {message} = error
    yield put(signOutFail(message));
    // yield call(useToast("fail", message))
  }
}

function* UserSaga() {
  yield takeLatest(SIGN_IN, onSignIn);
  yield takeLatest(SIGN_UP, onSignUp);
  yield takeLatest(SIGN_OUT, onSignOut);
}

export default UserSaga;
