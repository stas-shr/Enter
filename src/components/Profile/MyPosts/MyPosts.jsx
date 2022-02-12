import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {

    let postsData = [
        {id: 1, post: "Hello there", likesCount: 15},
        {id: 2, post: "I'm here", likesCount: 150},
    ]

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div><textarea></textarea></div>
            <div>
                <button>Add Post</button>
            </div>
            <div className={classes.posts}>
                <Post message={postsData[0].post} likes={postsData[0].likesCount} />
                <Post message={postsData[1].post} likes={postsData[1].likesCount} />
            </div>
        </div>
    )
}

export default MyPosts