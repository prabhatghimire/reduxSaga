import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  GET_POST_DETAILS,
  GET_POST_DETAILS_SUCCESS,
  GET_POST_DETAILS_FAIL,
} from '../actions/actionTypes';

const initialState = {
  posts: [],
  post: {},
  loadingPosts: false,
  loadingPostDetails: false,
  error: {
    message: '',
  },
};

export const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      state = {...state, loadingPosts: true};
      break;
      case GET_POSTS_SUCCESS:
      state = {...state, posts: action.payload, loadingPosts: false};
      break;
    case GET_POSTS_FAIL:
      state = {
        ...state,
        error: action.payload,
        loadingPosts: false,
      };
      break;
    case GET_POST_DETAILS:
      state = {...state, loadingPostDetails: true};
      break;
    case GET_POST_DETAILS_SUCCESS:
      state = {...state, post: action.payload, loadingPostDetails: false};
      break;
    case GET_POST_DETAILS_FAIL:
      state = {
        ...state,
        error: action.payload,
        loadingPostDetails: false,
      };
      break;
    default:
      state = {...state};
      break;
  }
  return state;
};
