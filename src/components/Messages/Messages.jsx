import classes from './Messages.module.css';
import Dialog from "./Dialog/DialogItem";
import Message from "./Message/Message";
import React from "react";


const Messages = (props) => {

    let dialogsElements = props.dialogsData.map(d => <Dialog name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message}/>)

    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        return alert(text)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div className={classes.textInput}>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Отправить сообщение</button>
                </div>
            </div>
        </div>
    )
}

export default Messages
