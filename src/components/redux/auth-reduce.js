import { userAPI } from "../../api/api";
import { stopSubmit } from 'redux-form'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    url: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth,
                url: ''
            }

        case 'USER_CAPTCHA':
            return {
                ...state,
                ...action.data,
                url: action.url
            }

        default:
            return state;
    }
}

export const setUserData = (data, isAuth) => {
    return {
        type: 'SET_USER_DATA',
        data,
        isAuth
    }
}

export const userCaptcha = (url) => {
    return {
        type: 'USER_CAPTCHA',
        url
    }
}

export const captchaUser = () => async (dispatch) => {
    let response = await userAPI.captcha();
    dispatch(userCaptcha(response.data.url));
}

export const authMe = () => async (dispatch) => {
    let response = await userAPI.authMyAcc()
    if (response.data.resultCode === 0) {
        dispatch(setUserData(response.data.data, true));
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await userAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(authMe())
    }
    if (response.data.resultCode === 10) {
        dispatch(captchaUser())
    } else {
        dispatch(stopSubmit('login', { _error: response.data.messages }))
    }
}


export const logout = () => async (dispatch) => {
    let response = await userAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setUserData({
            id: null,
            email: null,
            login: null
        }, false))
    }
}

export default authReducer;