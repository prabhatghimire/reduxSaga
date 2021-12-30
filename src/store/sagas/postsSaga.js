import { takeLatest, put, call } from "redux-saga/effects";

import { GET_POSTS, GET_POST_DETAILS } from "../actions/actionTypes";

import {
  getPostsSuccess,
  getPostsFail,
  getPostDetailsSuccess,
  getPostDetailsFail,
} from "../actions/postsAction";

import { getPosts, getPostDetails } from "../../API/postsAPI";

function* onGetPosts() {
  try {
    const response = yield call(getPosts);
    yield put(getPostsSuccess(response));
  } catch (error) {
    yield put(getPostsFail(error.response));
  }
}

function* onGetPostDetails({ payload: id }) {
  try {
    const response = yield call(getPostDetails, id);
    yield put(getPostDetailsSuccess(response));
  } catch (error) {
    yield put(getPostDetailsFail(error.response));
  }
}

function* rootSaga() {
  yield takeLatest(GET_POSTS, onGetPosts);
  yield takeLatest(GET_POST_DETAILS, onGetPostDetails);
}

export default rootSaga;