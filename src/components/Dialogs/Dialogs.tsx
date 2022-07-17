import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogsPropsType = {
    name: string
    id: string
}

type MessagesPropsType = {
    message: string
}

const DialogItem = (props: DialogsPropsType) => {
    let path = "/Dialogs/" + props.id;
    return (
        <div className={classes.dialogItem}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Messages = (props: MessagesPropsType) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}


export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem name="Alex" id="1"/>
                <DialogItem name="Anna" id="2"/>
                <DialogItem name="Jon" id="3"/>
                <DialogItem name="Mia" id="4"/>
                <DialogItem name="Mike" id="5"/>
            </div>
            <div className={classes.messages}>
                <Messages message="hi"/>
                <Messages message="how are you?"/>
                <Messages message="good"/>
                <Messages message="Hello"/>
            </div>
        </div>
    )
}