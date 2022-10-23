import messageReducer from "./message-reducer";
import profileReducer from "./profile-reduce";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        messagePage: {
            dialogs:
                [
                    { id: 1, name: 'Stepa' },
                    { id: 2, name: 'Vika' },
                    { id: 3, name: 'Tolya' },
                    { id: 4, name: 'Vanya' },
                    { id: 5, name: 'Danik' }
                ],
            messages:
                [
                    { id: 1, message: 'Hi' },
                    { id: 2, message: 'How are you?' },
                    { id: 3, message: 'What do you will do tomorrow?' }
                ],
            newMessageBody: ''
        },
        profilePage: {
            posts:
                [
                    { id: 1, message: 'Hi, how are you?', like: 15 },
                    { id: 2, message: 'Hi, what do you want?', like: 2 }
                ],
            newPostText: ''
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _callSubscribe() {
        console.log("blabla");
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = messageReducer(this._state.messagePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscribe(this._state);
    }

}

export default store;