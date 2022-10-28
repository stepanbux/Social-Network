import { userAPI } from "../../api/api";

let newState = {
    posts:
        [
            { id: 1, message: 'Hi, how are you?', like: 15 },
            { id: 2, message: 'Hi, what do you want?', like: 2 }
        ],
    newPostText: 'sosite',
    profile: null,
    status: ''
};

const profileReducer = (state = newState, action) => {

    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 3,
                message: state.newPostText,
                like: 0
            };
            let stateCopy = { ...state };
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case 'UPDATE-NEW-POST-TEXT': {
            let stateCopy = { ...state };

            stateCopy.newPostText = action.newText;
            return stateCopy;
        }

        case 'SET_USER_PROFILE': {
            return {
                ...state, profile: action.profile
            }
        }

        case 'SET_STATUS': {
            return {
                ...state, status: action.status
            }
        }


        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    }
}

export const setUserProfile = (profile) => {
    return {
        type: 'SET_USER_PROFILE',
        profile
    }
}

export const setStatus = (status) => {
    return {
        type: 'SET_STATUS',
        status
    }
}


export const setUser = (id) => {
    return ((dispatch) => {
        userAPI.setUser(id).then(data => {
            dispatch(setUserProfile(data))
        })
    })
}

export const getStatus = (id) => {
    return ((dispatch) => {
        userAPI.getStatus(id).then(response => {
            dispatch(setStatus(response.data))
        })
    })
}

export const updateStatus = (status) => {
    return ((dispatch) => {
        userAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    })
}
export default profileReducer;

