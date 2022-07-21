import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'
import {DialogItem} from './DialogsItem/DialogItem';
import {Messages} from './Messages/Messages';
import {DialogsPageType} from '../Redux/State';


type DialogsPropsType = {
    updateNewMessage: ( body: string ) => void
    sendMessage: () => void
    dialogsPage: DialogsPageType
}

export const Dialogs = ( props: DialogsPropsType ) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(( d ) => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = state.messages.map(( m ) => <Messages message={m.message}/>);

    let newMessageBody = state.newMessageBody;

    let onSendMassageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = ( e: ChangeEvent<HTMLTextAreaElement> ) => {
        let body = e.target.value;
        props.updateNewMessage(body);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  placeholder={'Enter your massage'}
                                  onChange={onNewMessageChange}>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMassageClick}>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}