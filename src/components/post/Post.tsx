import React from 'react';
import classes from './Post.module.css'

type PostPropsType = {
    message: string
    likesCount: number
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={classes.content}>
            <img className={classes.img} src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" alt="avatar"/>
            {props.message}
            <span className={classes.item}>like</span> {props.likesCount}
        </div>
    )
}