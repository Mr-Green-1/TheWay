import React from 'react';
import classes from '../componentCss/Profile.module.css';

export const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.content_img}>
                <img className={classes.profile_img}
                     src="https://sirenum.com/wp-content/uploads/2018/11/sirenum-staffing-header.jpg"
                     alt="profile picture"/>
            </div>
        </div>
    )
}