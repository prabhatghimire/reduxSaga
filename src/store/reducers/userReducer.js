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
} from '../actions/actionTypes';

const initialState = {
  user: {},
  isLoading: false,
  error: {
    message : ''
  },
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {...state, user: action.payload, isLoading: true};
      break;
    case SIGN_IN_SUCCESS:
      state = {...state, user: action.payload, isLoading: false};
      break;
    case SIGN_IN_FAIL:
      state = {...state, error: action.payload, isLoading: false};
      break;
    case SIGN_OUT:
      state = {...state, isLoading: true};
      break;
    case SIGN_OUT_SUCCESS:
      state = {...state, user: {}, isLoading: false};
      break;
    case SIGN_OUT_FAIL:
      state = {...state, error: action.payload, isLoading: false};
      break;
    case SIGN_UP:
      state = {...state, user: action.payload, isLoading: true};
      break;
    case SIGN_UP_SUCCESS:
      state = {...state, user: action.payload, isLoading: false};
      break;
    case SIGN_UP_FAIL:
      state = {...state, error: action.payload, isLoading: false};
      break;
    default:
      state = {...state};
      break;
  }
  return state;
};
