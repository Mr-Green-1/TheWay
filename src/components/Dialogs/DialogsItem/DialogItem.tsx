import classes from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';

type DialogsPropsType = {
    name: string
    id: string | number
}
export const DialogItem = ( props: DialogsPropsType ) => {
    let path = '/Dialogs/' + props.id;
    return (
        <div className={classes.dialogItem}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}