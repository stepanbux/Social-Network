import { connect } from 'react-redux';
import { addNewMessageActionCreator, updateNewMessageActionCreate } from '../redux/message-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendNewMessage: () => {
            dispatch(addNewMessageActionCreator());      
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageActionCreate(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;