import {ACTION_CHANGE_NAME, ACTION_CHANGE_PASSWORD} from "../../../index";

export const initialState = {
    name:"Kek",
    password:'123'
};
export  const rootReducer =(state= initialState, action)=>{
    switch (action.type) {
        case ACTION_CHANGE_NAME:
            return {...state, name: action.payload};
        case ACTION_CHANGE_PASSWORD:
            return {...state, password: action.payload};
    }
    return state;
};