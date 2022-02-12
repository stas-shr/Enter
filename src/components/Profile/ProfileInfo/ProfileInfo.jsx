import classes from './ProfileInfo.module.css'



const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src="https://www.fao.org/uploads/pics/Corals_03.jpg"/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + descr
            </div>
        </div>
    )
}

export default ProfileInfo