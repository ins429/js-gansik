import { combineReducers  } from 'redux';
import comments from './comments';
import posts from './posts';

const postApp = combineReducers({
    comments,
    posts
});

export default postApp;

