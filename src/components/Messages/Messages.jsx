import classes from './Messages.module.css';
import Dialog from "./Dialog/DialogItem";
import Message from "./Message/Message";


const Messages = (props) => {

    let dialogsElements = props.dialogsData.map(d => <Dialog name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message}/>)


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Messages
