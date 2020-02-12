//all reducers will be imported here and wired up to the combined reducers
import {combineReducers} from "redux"
import PostReducer from './PostReducer'
import userReducer from "./userReducer";

export default combineReducers({
    posts: PostReducer,
    users: userReducer
});