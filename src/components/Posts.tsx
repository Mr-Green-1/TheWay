import React from 'react';
import classes from '../componentCss/Posts.module.css'
import {Post} from './Post';

export const Posts = () => {
    return (
         <div>
             <textarea></textarea>
             <button>add post</button>
             <div className={classes.posts}>
                 <Post message={'hi , how are you?'} likesCount={7}/>
                 <Post message={'hi , good and you?'} likesCount={15}/>
             </div>
         </div>
    )
}