import React from 'react';
import classes from './Users.module.css';
import {UserPropsType} from './UserContainer';

export function Users( props: UserPropsType ) {

    if (props.users.users.length === 0)
    {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMlFrXT2YtlYq7JPbi2A6FYdEVHn1nExbAGg&usqp=CAU',
                fullName: 'alex',
                status: 'boss',
                location: {city: 'New York', country: 'USA'},
                followed: false
            },
            {
                id: 2,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMlFrXT2YtlYq7JPbi2A6FYdEVHn1nExbAGg&usqp=CAU',
                fullName: 'jon',
                status: 'good man',
                location: {city: 'London', country: 'England'},
                followed: true
            },
            {
                id: 3,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMlFrXT2YtlYq7JPbi2A6FYdEVHn1nExbAGg&usqp=CAU',
                fullName: 'mike',
                status: 'sleep',
                location: {city: 'Berlin', country: 'German'},
                followed: false
            }
        ]);
    }

    return (
        <div>{
            props.users.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={classes.userAvatar} src={u.photoUrl} alt="avatar"/>
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
    )
}