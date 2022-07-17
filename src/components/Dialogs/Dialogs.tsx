import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogsPropsType = {
    name: string
    id: string | number
}

type MessagesPropsType = {
    message: string
}

const DialogItem = ( props: DialogsPropsType ) => {
    let path = '/Dialogs/' + props.id;
    return (
        <div className={classes.dialogItem}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Messages = ( props: MessagesPropsType ) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}


export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Anna'},
        {id: 3, name: 'Jon'},
        {id: 4, name: 'Mia'},
        {id: 5, name: 'Mike'}
    ];

    let messagesData = [
        {id: 1, message: "hi"},
        {id: 2, message: "how are you?"},
        {id: 3, message: "good"}
    ];

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={classes.messages}>
                <Messages message={messagesData[0].message}/>
                <Messages message={messagesData[1].message}/>
                <Messages message={messagesData[2].message}/>
            </div>
        </div>
    )
}