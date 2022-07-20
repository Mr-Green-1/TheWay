import React, {ChangeEvent} from 'react';
import classes from './Posts.module.css'
import {Post} from './post/Post';
import {PostsType, RootActionTypes} from '../../../Redux/State';
import {addPostActionCreator} from '../../../Redux/profileReducer';

type PostsPropsType = {
    posts: Array<PostsType>
    addPost: ( postText: string ) => void
    newPostMessage: string
    changeNewPostMessage: ( newText: string ) => void
    dispatch: ( action: RootActionTypes ) => void
}

export const Posts = ( props: PostsPropsType ) => {

    let postsElements = props.posts.map(( p ) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    const addPost = () => {
        props.dispatch(addPostActionCreator(props.newPostMessage));
        props.changeNewPostMessage('')
    }

    const newPostChangeHandler = ( e: ChangeEvent<HTMLTextAreaElement> ) => {
        props.changeNewPostMessage(e.currentTarget.value);
    };

    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <textarea onChange={newPostChangeHandler} value={props.newPostMessage}/>
            </div>
            <button onClick={addPost}>add post</button>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}
