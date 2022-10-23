import { userAPI } from '../../api/api'

let newState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 25,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReduser = (state = newState, action) => {

    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        }

        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        }

        case 'SET_USERS': {
            return {
                ...state, users: action.users
            }
        }

        case 'SET_CURRENT_PAGE': {
            return {
                ...state, currentPage: action.currentPage
            }
        }

        case 'SET_TOTAL_USERS_COUNT': {
            return {
                ...state, totalUsersCount: action.count
            }
        }

        case 'TOGGLE_IS_FETCHING': {
            return {
                ...state, isFetching: action.condition
            }
        }

        case 'TOGGLE_FOLLOWING_PROGRESS': {
            return {
                ...state,
                followingInProgress: action.condition
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }

        default: {
            return state;
        }
    }

}

export const setIsFetchingAC = (condition) => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        condition
    }
}

export const toggleFollowingProgress = (condition, userId) => {
    return {
        type: 'TOGGLE_FOLLOWING_PROGRESS',
        condition,
        userId
    }
}

export const setCurrentPageAC = (currentPage) => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage
    }
}

export const followAC = (userId) => {
    return {
        type: 'FOLLOW',
        userId
    }
}

export const unfollowAC = (userId) => {
    return {
        type: 'UNFOLLOW',
        userId
    }
}

export const setUsersAC = (users) => {
    return {
        type: 'SET_USERS',
        users
    }
}

export const setTotalUsersCountAC = (count) => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        count: count
    }
}

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return ((dispatch) => {
        dispatch(setIsFetchingAC(true));
        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsersAC(data.items));
            dispatch(setTotalUsersCountAC(data.totalCount));
            dispatch(setIsFetchingAC(false));
        });
    })
}

export const unfollow = (id) => {
    return ((dispatch) => {
        dispatch(toggleFollowingProgress(true, id))
        userAPI.unfollowUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowAC(id))
                dispatch(toggleFollowingProgress(false, id))
            }
        });
    })
}

export const follow = (id) => {
    return ((dispatch) => {
        dispatch(toggleFollowingProgress(true, id))
        userAPI.followUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(followAC(id))
                dispatch(toggleFollowingProgress(false, id))
            }
        });
    })
}

export default usersReduser;