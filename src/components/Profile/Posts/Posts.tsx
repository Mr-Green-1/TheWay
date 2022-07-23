import React, {ChangeEvent} from 'react';
import classes from './Posts.module.css'
import {Post} from './post/Post';

type PostsType = {
    id: number
    message: string
    likesCount: number
}

type PostsPropsType = {
    changeNewPostMessage: ( newText: string ) => void
    addPost: () => void
    posts: Array<PostsType>
    newPostMessage: string
}

export const Posts = ( props: PostsPropsType ) => {

    let postsElements = props.posts.map(( p ) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    const onAddPost = () => {
        props.addPost();
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
            <button onClick={onAddPost}>add post</button>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}
