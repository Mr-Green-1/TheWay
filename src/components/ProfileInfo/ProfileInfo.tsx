import React from 'react';
import classes from '../ProfileInfo/ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (
        <div className={classes.profileInfo}>
            <img className={classes.profileInfo_img}
                 src="https://sirenum.com/wp-content/uploads/2018/11/sirenum-staffing-header.jpg"
                 alt="profile picture"/>
        </div>
    )
}