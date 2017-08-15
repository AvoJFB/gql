import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import subredditsReducer from './subredditsReducer';


const rootReducer = combineReducers({
  posts: postsReducer,
  subreddits: subredditsReducer,
});

export default rootReducer;
