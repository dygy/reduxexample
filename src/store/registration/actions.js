export const REG_CHANGE_EMAIL_TEXT    = 'REG_CHANGE_EMAIL_TEXT';
export const REG_CHANGE_PASSWORD_TEXT = 'REG_CHANGE_PASSWORD_TEXT';
export const REG_CHANGE_REPEAT_PASSWORD_TEXT = 'REG_CHANGE_REPEAT_PASSWORD_TEXT';

export const setEmail=(email)=>({
    type:REG_CHANGE_EMAIL_TEXT,
    payload:email
});
export const setPass=(pass)=>({
    type:REG_CHANGE_PASSWORD_TEXT,
    payload:pass
});
export const setRepPass=(pass)=>({
    type:REG_CHANGE_REPEAT_PASSWORD_TEXT,
    payload:pass
});