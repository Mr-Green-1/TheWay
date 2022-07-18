import React from 'react';
import classes from './Profile.module.css';
import {Posts} from './Posts/Posts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostsType} from './../../Redux/State';

type ProfilePropsType = {
    posts: Array<PostsType>
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <Posts posts={props.posts}/>
        </div>
    )
}