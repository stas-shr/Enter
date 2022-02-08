import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>
            <div className={classes.posts}>
                <Post message="Hello there!" likes="15"/>
                <Post message="I'm here" likes="150"/>
            </div>
        </div>
    )
}

export default MyPosts