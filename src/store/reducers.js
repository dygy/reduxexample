import {combineReducers} from "redux"
import {authReducer} from "./auth/reducers";
import {regReducer} from "./registration/reducers";
import {SIGN_IN} from "./actions";

export const defaultState = {
    sign: sessionStorage.getItem('sign')||false
};
export const signReducer = (state= defaultState, action)=>{
    const val = state.sign;
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                sign: !val
            };
    }

    return state;
};


export default combineReducers({
    auth:authReducer,
    reg:regReducer,
    sign:signReducer
});

