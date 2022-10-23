import { userAPI } from "../../api/api";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data.data,
                isAuth: true,
            }

        case 'SET_USER_NAME':
            return {
                ...state,
                ...action.data.data,
                login: action.data.login
            }

        default:
            return state;
    }
}

export const setUserData = (data) => {
    return {
        type: 'SET_USER_DATA',
        data
    }
}

export const setUserName = (data) => {
    return {
        type: 'SET_USER_NAME',
        data
    }
}

export const authMe = (dispatch) => {
    return ( (dispatch) => {
        userAPI.authMyAcc().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(response.data.data));
            }
            if (response.data.data.login != null) {
                dispatch(setUserName(response.data.data));
            }
        })
    })
}

export default authReducer;