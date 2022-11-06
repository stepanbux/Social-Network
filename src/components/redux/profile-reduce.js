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
                message: action.post,
                like: 0
            };
            return {
                ...state,
                posts: [...state.posts, { id: 3, message: action.post, like: 4 }]
            }

            // let stateCopy = { ...state };
            // stateCopy.posts = [...state.posts];
            // stateCopy.posts.push(newPost);
            // return stateCopy;
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

export const addPostActionCreator = (post) => {
    return {
        type: 'ADD-POST',
        post
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
    return (async (dispatch) => {
        let data = await userAPI.setUser(id)
            dispatch(setUserProfile(data))
        })
}

export const getStatus = (id) => {
    return (async (dispatch) => {
        let response = await userAPI.getStatus(id)
            dispatch(setStatus(response.data))
        })
}

export const updateStatus = (status) => {
    return (async (dispatch) => {
        let response = await userAPI.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}
export default profileReducer;

