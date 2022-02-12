import classes from './../Messages.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = "/messages/" + props.id
    return (
        <div className={classes.dialog + " " + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog
