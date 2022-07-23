import React from 'react';
import classes from './Users.module.css';

export const Users = ( props: any ) => {

    return (
        <div>{
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={classes.userAvatar} src={u.photoUrl} alt="avatar"/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>unfollow</button>
                                    : <button onClick={() => {props.follow(u.id)}}>follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }</div>
    )
}