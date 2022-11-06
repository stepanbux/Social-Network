import { userAPI } from '../../api/api'

let newState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 25,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const updateObjectInArray = (items, userId, objPropName, newObjProps) => {
     return items.map(u => {
        if (u[objPropName] === userId) {
            return { ...u, ...newObjProps }
        }
        return u;
    })
}
const usersReduser = (state = newState, action) => {

        switch (action.type) {
            case 'FOLLOW': {
                return {
                    ...state,
                    users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
                    // users: state.users.map(u => {
                    //     if (u.id === action.userId) {
                    //         return { ...u, followed: true }
                    //     }
                    //     return u;
                    // })
                }
            }

            case 'UNFOLLOW': {
                return {
                    ...state,
                    users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
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
        return (async (dispatch) => {
            dispatch(setIsFetchingAC(true));
            let data = await userAPI.getUsers(currentPage, pageSize)
            dispatch(setUsersAC(data.items));
            dispatch(setTotalUsersCountAC(data.totalCount));
            dispatch(setIsFetchingAC(false));
        });
    }

    const followUnfollow = async (dispatch, id, apiMethod, actionCreator) => {
        dispatch(toggleFollowingProgress(true, id))
        let data = await apiMethod;
        if (data.resultCode === 0) {
            dispatch(actionCreator(id))
        }
        dispatch(toggleFollowingProgress(false, id))
    }

    export const unfollow = (id) => {
        return (async (dispatch) => {
            followUnfollow(dispatch, id, userAPI.unfollowUser(id), unfollowAC)
        });
    }

    export const follow = (id) => {
        return (async (dispatch) => {
            followUnfollow(dispatch, id, userAPI.followUser(id), followAC)

        });
    }

    export default usersReduser;