import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { addNewMessageActionCreator } from '../redux/message-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendNewMessage: (newMessage) => {
            dispatch(addNewMessageActionCreator(newMessage));      
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
