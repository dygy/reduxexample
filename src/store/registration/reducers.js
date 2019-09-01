import {REG_CHANGE_EMAIL_TEXT, REG_CHANGE_PASSWORD_TEXT, REG_CHANGE_REPEAT_PASSWORD_TEXT} from "./actions";

const defaultState = {
    email: '',
    password:'',
    repeatPassword:''
};
export const regReducer = (state= defaultState, action)=>{
    switch (action.type) {
        case REG_CHANGE_EMAIL_TEXT:
            return {
                ...state,
                email: action.payload
            };

        case REG_CHANGE_PASSWORD_TEXT:
            return {
                ...state,
                password:action.payload
            };
        case REG_CHANGE_REPEAT_PASSWORD_TEXT:
            return {
                ...state,
                repeatPassword:action.payload
            };
    }
    return state;
}