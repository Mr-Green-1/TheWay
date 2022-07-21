import React from 'react';
import {addMessageBodyActionCreator, updateNewMessageBodyActionCreator} from '../Redux/reducers/dialogsReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {DialogsPageType, RootActionTypes} from '../Redux/State';


let mapStateToProps = ( state: DialogsPageType ) => {

    return {
        dialog: state.dialogs
    }
}

let mapDispatchToProps = ( dispatch: ( action: RootActionTypes ) => void ) => {

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