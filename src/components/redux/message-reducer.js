let newState = {
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
}

const messageReducer = (state = newState, action) => {

    switch (action.type) {
        case 'SEND_MESSAGE': {
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: action.newMessage}]
            }
        }
        default:
            return state;
    }
}

export const addNewMessageActionCreator = (newMessage) => {
    return {
        type: 'SEND_MESSAGE',
        newMessage
    }
}

export default messageReducer;