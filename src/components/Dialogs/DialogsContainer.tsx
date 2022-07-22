import React from 'react';
import {addMessageBodyActionCreator, updateNewMessageBodyActionCreator} from '../Redux/reducers/dialogsReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {RootReducerType} from '../Redux/reduxStore';
import {Dispatch} from 'redux';
import {DialogsPageType} from '../Redux/State';

type MessagesType = {
    id: number
    message: string
}

type DialogsType = {
    id: number
    name: string
}

type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}


type mapStateToPropsType = {
    dialog: DialogsPageType
}

type mapDispatchToProps = {}


let mapStateToProps = ( state: RootReducerType ): mapStateToPropsType => {

    return {
        dialog: state.dialogsPage.dialogs
    }
}

let mapDispatchToProps = ( dispatch: Dispatch ) => {

    return {
        onSendMassageClick: ( bodyText: string ) => {
            dispatch(addMessageBodyActionCreator(bodyText));
        },
        onNewMessageChange: ( body: string ) => {
            dispatch(updateNewMessageBodyActionCreator(body));
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;


//type DialogsPropsType = {
//     store: StoreType
// }
//
//     const DialogsContainer = ( props: DialogsPropsType ) => {
//
//     let state = props.store.getState().dialogsPage;
//
//
//     let onSendMassageClick = () => {
//         props.store.dispatch(addMessageBodyActionCreator(state.newMessageBody));
//     }
//
//     let onNewMessageChange = ( body: string ) => {
//         props.store.dispatch(updateNewMessageBodyActionCreator(body));
//     }
//
//     return (
//         <Dialogs updateNewMessage={onNewMessageChange} sendMessage={onSendMassageClick} dialogsPage={state}/>
//     )
// }
//
// export default DialogsContainer;