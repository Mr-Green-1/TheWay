import React from 'react';
import classes from './Dialogs.module.css'
import {DialogItem} from './DialogsItem/DialogItem';
import {Messages} from './Messages/Messages';
import {DialogsType, MessagesType} from '../../index';

type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements = props.dialogs.map(( d ) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(( m ) => <Messages message={m.message}/>)

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