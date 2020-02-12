//all reducers will be imported here and wired up to the combined reducers
import {combineReducers} from "redux"
import postReducer from './PostReducer'
export default combineReducers({
    dummy: () => "getting error message in console to go away"
});