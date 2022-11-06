import { authMe } from "./auth-reduce";

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_INITIALIZED':
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}

export const setInitialized = () => {
    return {
        type: 'SET_INITIALIZED'
    }
}

export const initialize = () => (dispatch) => {
    let promise = dispatch(authMe());

    Promise.all([promise])
        .then(() => {
            dispatch(setInitialized());
        })
}

export default appReducer;