import React from 'react';
import classes from './Dialogs.module.css'
import {DialogItem} from './DialogsItem/DialogItem';
import {Messages} from './Messages/Messages';


export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Anna'},
        {id: 3, name: 'Jon'},
        {id: 4, name: 'Mia'},
        {id: 5, name: 'Mike'}
    ];

    let messagesData = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'how are you?'},
        {id: 3, message: 'good'}
    ];

    let dialogsElements = dialogsData.map(( d ) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messagesData.map(( m ) => <Messages message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}