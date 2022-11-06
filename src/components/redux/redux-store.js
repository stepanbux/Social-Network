import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import authReducer from "./auth-reduce";
import messageReducer from "./message-reducer";
import profileReducer from "./profile-reduce";
import sidebarReducer from "./sidebar-reducer";
import usersReduser from "./users-reducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReduser,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store;
