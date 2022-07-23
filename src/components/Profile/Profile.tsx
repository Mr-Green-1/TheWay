import React from 'react';
import classes from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';

type ProfilePropsType = {

}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <PostsContainer/>
        </div>
    )
}