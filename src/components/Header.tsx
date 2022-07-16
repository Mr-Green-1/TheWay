import React from 'react';
import classes from './../componentCss/Header.module.css';

export const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.img}
                 src="https://www.designmantic.com/logo-images/16409.png?company=Company+Name&slogan=&verify=1"
                 alt="logo"/>
        </header>
    )
}