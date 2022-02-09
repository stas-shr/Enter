import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://cabinet.miem.hse.ru/public-api/user/7/avatar'/>
            {props.message}
            <div>
                <span>Like</span> {props.likes}
            </div>
        </div>
    )
}

export default Post