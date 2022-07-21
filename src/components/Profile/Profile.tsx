import React from 'react';
import classes from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {StoreType} from '../Redux/State';
import PostsContainer from './Posts/post/PostsContainer';

type ProfilePropsType = {
   store: StoreType
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <PostsContainer store={props.store}/>
        </div>
    )
}