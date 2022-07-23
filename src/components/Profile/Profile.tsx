import React from 'react';
import classes from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';


export const Profile = () => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <PostsContainer/>
        </div>
    )
}