import classes from './Messages.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = "/messages/" + props.id
    return (
        <div className={classes.dialog + " " + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}




const Messages = (props) => {

    let dialogsData = [
        {id: 1, name: "Stas"},
        {id: 2, name: "Vlad"},
        {id: 3, name: "Lena"},
        {id: 4, name: "Katya"},
        {id: 5, name: "Misha"},
    ]

    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "yo"},
        {id: 4, message: "man, answer please"},
        {id: 5, message: "come on"},
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
                <Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>
                <Dialog name={dialogsData[3].name} id={dialogsData[3].id}/>
                <Dialog name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
            </div>
        </div>
            )
            }

            export default Messages
