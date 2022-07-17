import React from 'react';
import classes from './Profile.module.css';
import {Posts} from './Posts/Posts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

export const Profile = () => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <Posts/>
        </div>
    )
}