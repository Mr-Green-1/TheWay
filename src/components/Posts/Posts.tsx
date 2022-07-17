import React from 'react';
import classes from './Posts.module.css'
import {Post} from '../post/Post';

export const Posts = () => {
    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <button>add post</button>
            <div className={classes.posts}>
                <Post message={'hi , how are you?'} likesCount={7}/>
                <Post message={'hi , good and you?'} likesCount={15}/>
            </div>
        </div>
    )
}