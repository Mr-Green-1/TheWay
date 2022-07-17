import React from 'react';
import classes from './Navigation.module.css';
import {NavLink} from 'react-router-dom';

export const Navigation = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.navItems}>
                <li className={classes.navItem}><NavLink to="/Profile" className={classes.activeLink}>Profile</NavLink></li>
                <li className={classes.navItem}><NavLink to="/Dialogs" className={classes.activeLink}>Messages</NavLink></li>
                <li className={classes.navItem}><NavLink to="/News" className={classes.activeLink}>News</NavLink></li>
                <li className={classes.navItem}><NavLink to="/Music" className={classes.activeLink}>Music</NavLink></li>
                <li className={classes.navItem}><NavLink to="/Settings" className={classes.activeLink}>Settings</NavLink></li>
            </ul>
        </nav>
    )
}