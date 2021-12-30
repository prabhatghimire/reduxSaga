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
  error: {},
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {...state, user: action.payload, isLoading: true};
      break;
    case SIGN_IN_SUCCESS:
      return {...state, user: action.payload, isLoading: false};
      break;
    case SIGN_IN_FAIL:
      return {...state, error: action.payload, isLoading: false};
      break;
    case SIGN_OUT:
      return {...state, user: action.payload, isLoading: true};
      break;
    case SIGN_OUT_SUCCESS:
      return {...state, user: action.payload, isLoading: false};
      break;
    case SIGN_OUT_FAIL:
      return {...state, error: action.payload, isLoading: false};
      break;
    case SIGN_UP:
      return {...state, user: action.payload, isLoading: true};
      break;
    case SIGN_UP_SUCCESS:
      return {...state, user: action.payload, isLoading: false};
      break;
    case SIGN_UP_FAIL:
      return {...state, error: action.payload, isLoading: false};
      break;
    default:
      state = {...state};
      break;
  }
};
