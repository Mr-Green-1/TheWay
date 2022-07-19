import React from 'react';
import classes from './Profile.module.css';
import {Posts} from './Posts/Posts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostsType} from '../../Redux/State';

type ProfilePropsType = {
    posts: Array<PostsType>
    addPost: ( postText: string ) => void
    newPostMessage: string
    changeNewPostMessage: (newText: string) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <Posts posts={props.posts}
                   addPost={props.addPost}
                   newPostMessage={props.newPostMessage}
                   changeNewPostMessage={props.changeNewPostMessage}/>
        </div>
    )
}