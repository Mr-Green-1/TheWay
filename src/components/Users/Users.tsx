import React from 'react';
import classes from './Users.module.css';
import {UserPropsType} from './UserContainer';
import axios from 'axios';

const Users = ( props: UserPropsType ) => {
    let getUsers = () => {
        if (props.users.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            });
        }
    }

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            <div>{
                props.users.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={classes.userAvatar}
                             src={u.photoUrl.small != null ? u.photoUrl.small() : userPhoto} className={classes.}
                             alt="avatar"/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>follow</button>}
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
        </div>
    )
}