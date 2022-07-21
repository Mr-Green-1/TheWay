import React from 'react';
import {StoreType} from '../Redux/State';
import {addMessageBodyActionCreator, updateNewMessageBodyActionCreator} from '../Redux/reducers/dialogsReducer';
import {Dialogs} from './Dialogs';

type DialogsPropsType = {
    store: StoreType
}

    const DialogsContainer = ( props: DialogsPropsType ) => {

    let state = props.store.getState().dialogsPage;


    let onSendMassageClick = () => {
        props.store.dispatch(addMessageBodyActionCreator(state.newMessageBody));
    }

    let onNewMessageChange = ( body: string ) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body));
    }

    return (
        <Dialogs updateNewMessage={onNewMessageChange} sendMessage={onSendMassageClick} dialogsPage={state}/>
    )
}

export default DialogsContainer;


























































// import {connect} from 'react-redux';
// import {Dialogs} from './Dialogs';
// import {addMessageBodyActionCreator, updateNewMessageBodyActionCreator} from '../Redux/reducers/dialogsReducer';
//
// let mapStateToProps = ( state ) => {
//     return {
//         dialogsPage: state.dialogsPage
//     }
// }
//
// let mapDispatchToProps = ( dispatch ) => {
//     return {
//         onSendMassageClick: () => {
//             dispatch(addMessageBodyActionCreator())
//         },
//         onNewMessageChange: ( body ) => {
//             dispatch(updateNewMessageBodyActionCreator(body))
//         }
//     }
// }
//
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
//
// export default DialogsContainer;