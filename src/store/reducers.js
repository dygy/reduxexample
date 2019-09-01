import {combineReducers, createStore} from "redux"
import {authReducer} from "./auth/reducers";
import {regReducer} from "./registration/reducers";
export default combineReducers({
    auth:authReducer,
    reg:regReducer
});
