import {
    addMessageBodyActionCreator,
    DialogInitialState,
    updateNewMessageBodyActionCreator
} from '../Redux/reducers/dialogsReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {RootReducerType} from '../Redux/reduxStore';
import {compose, Dispatch} from 'redux';
import {ComponentType, FC} from 'react';

type mapStateToPropsType = {
    dialogsPage: DialogInitialState
}

type mapDispatchToPropsType = {
    onSendMassageClick: ( bodyText: string ) => void
    onNewMessageChange: ( body: string ) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType;

let mapStateToProps = ( state: RootReducerType ): mapStateToPropsType => {

    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = ( dispatch: Dispatch ): mapDispatchToPropsType => {

    return {
        onSendMassageClick: ( bodyText: string ) => {
            dispatch(addMessageBodyActionCreator(bodyText));
        },
        onNewMessageChange: ( body: string ) => {
            dispatch(updateNewMessageBodyActionCreator(body));
        }
    }
}


export default compose<FC>(
    connect(mapStateToProps, mapDispatchToProps))(Dialogs);



