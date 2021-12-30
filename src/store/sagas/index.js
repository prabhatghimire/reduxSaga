import { all, fork } from "redux-saga/effects";

import PostSaga from "./postsSaga";
import UserSaga from './userSaga'

export default function* rootSaga() {
  yield all([
    fork(PostSaga),
    fork(UserSaga)
  ]);
}