import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormControls/FormsControls';
import { maxLengthCreator, requiredField } from '../../Validation/validators';



const Dialogs = (props) => {

    let state = props.messagePage;

    let dialogsElements = state.dialogs.map((d) => {
        return (
            <DialogItem name={d.name} key={d.id} id={d.id} />
        )
    })

    let messagesElements = state.messages.map((m) => {
        return (
            <Message message={m.message} key={m.id} />
        )
    })

    let addNewMessage = (value) => {
        props.sendNewMessage(value.newMessage)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
                <MessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    );
}

const max = maxLengthCreator(30)

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newMessage'} placeholder={"Enter your message"}
                validate={[requiredField, max]}/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

const MessageFormRedux = reduxForm({
    form: 'message'
})(MessageForm)

export default Dialogs;