export const AUTH_CHANGE_EMAIL_TEXT = 'AUTH_CHANGE_EMAIL_TEXT';
export const AUTH_CHANGE_PASSWORD_TEXT = 'AUTH_CHANGE_PASSWORD_TEXT';

export const setEmail=(email)=>({
    type:AUTH_CHANGE_EMAIL_TEXT,
    payload:email
})
export const setPass=(pass)=>({
    type:AUTH_CHANGE_PASSWORD_TEXT,
    payload:pass
})