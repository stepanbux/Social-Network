import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { addNewMessageActionCreator, updateNewMessageActionCreate } from '../redux/message-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage,
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);