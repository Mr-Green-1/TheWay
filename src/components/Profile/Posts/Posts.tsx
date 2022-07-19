import React, {ChangeEvent} from 'react';
import classes from './Posts.module.css'
import {Post} from './post/Post';
import {ActionTypes, PostsType} from '../../../Redux/State';

type PostsPropsType = {
    posts: Array<PostsType>
    addPost: ( postText: string ) => void
    newPostMessage: string
    changeNewPostMessage: ( newText: string ) => void
    dispatch: (action: ActionTypes)=>void
}

export const Posts = ( props: PostsPropsType ) => {

    let postsElements = props.posts.map(( p ) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    const addPost = () => {
        props.dispatch({type: "ADD-POST", postText: props.newPostMessage});
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
