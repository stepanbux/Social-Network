import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {

    let newMessage = React.createRef();

    let addMessage = () => {
        let text = newMessage.current.value;
        props.updateNewMessageText(text);
    }

    let sendMessage = () => {
        props.sendNewMessage();
    }
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

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <div>
                        <textarea onChange={addMessage} ref={newMessage} value={state.newMessageBody}></textarea>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;