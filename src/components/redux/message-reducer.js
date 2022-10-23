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
    newMessageBody: 'snofva sosat'
}

const messageReducer = (state = newState, action) => {

    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_BODY': {
            let stateCopy = { ...state };

            stateCopy.newMessageBody = action.newText;
            return stateCopy;
        }
        case 'SEND_MESSAGE': {
            let newMessage = {
                id: 4,
                message: state.newMessageBody
            };
            let stateCopy = { ...state };
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageBody = '';

            return stateCopy;
        }
        default:
            return state;
    }
}

export const updateNewMessageActionCreate = (text) => {
    return {
        type: 'UPDATE_NEW_MESSAGE_BODY',
        newText: text
    }
}

export const addNewMessageActionCreator = (text) => {
    return {
        type: 'SEND_MESSAGE',
    }
}

export default messageReducer;