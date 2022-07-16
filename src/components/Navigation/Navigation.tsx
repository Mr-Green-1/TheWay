import React from 'react';
import classes from './Navigation.module.css';

export const Navigation = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li><a href="src/components/Navigation/Navigation#">Profile</a></li>
                <li><a href="src/components/Navigation/Navigation#">Messages</a></li>
                <li><a href="src/components/Navigation/Navigation#">News</a></li>
                <li><a href="src/components/Navigation/Navigation#">Music</a></li>
                <li><a href="src/components/Navigation/Navigation#">Settings</a></li>
            </ul>
        </nav>
    )
}