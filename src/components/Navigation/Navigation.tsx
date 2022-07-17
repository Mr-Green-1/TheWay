import React from 'react';
import classes from './Navigation.module.css';
import {NavLink} from 'react-router-dom';

export const Navigation = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li><NavLink to="/Profile">Profile</NavLink></li>
                <li><NavLink to="/Dialogs">Messages</NavLink></li>
                <li><NavLink to="/News">News</NavLink></li>
                <li><NavLink to="/Music">Music</NavLink></li>
                <li><NavLink to="/Settings">Settings</NavLink></li>
            </ul>
        </nav>
    )
}