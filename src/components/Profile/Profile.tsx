import React from 'react';
import classes from './Profile.module.css';
import {Posts} from './Posts/Posts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostsType, RootActionTypes} from '../../Redux/State';

type ProfilePropsType = {
    posts: Array<PostsType>
    addPost: ( postText: string ) => void
    newPostMessage: string
    changeNewPostMessage: (newText: string) => void
    dispatch: (action: RootActionTypes)=>void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <Posts dispatch={props.dispatch}
                   posts={props.posts}
                   addPost={props.addPost}
                   newPostMessage={props.newPostMessage}
                   changeNewPostMessage={props.changeNewPostMessage}/>
        </div>
    )
}