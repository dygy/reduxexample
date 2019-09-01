import  {ACTION_CHANGE_NAME, ACTION_CHANGE_PASSWORD} from "../../../index"
export  const changeName = (val)=>{
    console.log(val);
    return{
        type: ACTION_CHANGE_NAME,
        payload: val
    }
};
export  const changePassword = (val)=>{
    return{
        type: ACTION_CHANGE_PASSWORD,
        payload: val
    }
};