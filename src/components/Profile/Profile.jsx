import MyPosts from './MyPosts/MyPosts'
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://www.fao.org/uploads/pics/Corals_03.jpg"/>
            </div>
            <div>
                ava + descr
            </div>
            <textarea></textarea>
            <button>Add Post</button>
            <MyPosts/>
        </div>
    )
}

export default Profile