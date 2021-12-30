import {combineReducers} from 'redux';
import {PostsReducer} from './postsReducer'
import {UserReducer} from './userReducer'

export const RootReducer = combineReducers({
posts : PostsReducer,
user : UserReducer
});
