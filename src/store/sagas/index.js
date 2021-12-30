import { all, fork } from "redux-saga/effects";

import PostSaga from "./postsSaga";

export default function* rootSaga() {
  yield all([fork(PostSaga)]);
}