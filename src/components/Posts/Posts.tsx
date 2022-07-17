import React from 'react';
import classes from './Posts.module.css'
import {Post} from '../post/Post';

export const Posts = () => {

    let Posts = [
        {id: 1, message: 'hi , how are you?', likesCount: 12},
        {id: 2, message: 'hi , good and you?', likesCount: 11},
        {id: 3, message: 'hi all', likesCount: 17}
    ];

    let postsElements = Posts.map((p)=><Post key={1} message={p.message} likesCount={p.likesCount}/>);

    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <button>add post</button>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}