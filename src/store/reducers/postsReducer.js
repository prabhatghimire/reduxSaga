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
  isLoading: false,
  isError: false,
  message: '',
};

export const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      state = {...state, isLoading: true};
      break;
    case GET_POSTS_SUCCESS:
      state = {...state, posts: action.payload, isLoading: false};
      break;
    case GET_POSTS_FAIL:
      state = {
        ...state,
        message: action.payload,
        isLoading: false,
        isError: true,
      };
      break;
    case GET_POST_DETAILS:
      state = {...state, post: {}, isLoading: true};
      break;
    case GET_POST_DETAILS_SUCCESS:
      state = {...state, post: action.payload, isLoading: false};
      break;
    case GET_POST_DETAILS_FAIL:
      state = {
        ...state,
        error: action.payload,
        isLoading: false,
        isError : true
      };
      break;
    default:
      state = {...state};
      break;
  }
  return state;
};
