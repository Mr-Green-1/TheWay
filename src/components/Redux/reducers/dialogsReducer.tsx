import {DialogsPageType, RootActionTypes} from '../State';

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';


let initialState = {
        dialogs: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Anna'},
            {id: 3, name: 'Jon'},
            {id: 4, name: 'Mia'},
            {id: 5, name: 'Mike'}
        ],
        messages: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'how are you?'},
            {id: 3, message: 'good'}
        ],
        newMessageBody: ''
};

const dialogsReducer = ( state = initialState, action: RootActionTypes ) => {

    let stateCopy;
    switch (action.type) {
        case
        UPDATE_NEW_MESSAGE_BODY:
            stateCopy = {
            ...state,
                newMessageBody: action.body
        };
            return stateCopy;
        case
        SEND_MESSAGE:
            let body = state.newMessageBody;
            stateCopy = {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 4, message: body}]
            };
            return stateCopy;
        default:
            return stateCopy;
    }
};

export const addMessageBodyActionCreator = ( bodyText: string ) => {
    return {
        type: 'SEND-MESSAGE',
        bodyText: bodyText
    } as const
}
export const updateNewMessageBodyActionCreator = ( body: string ) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}

type AddMessageBodyActionCreatorType = ReturnType<typeof addMessageBodyActionCreator>
type  UpdateNewMessageBodyActionCreatorType = ReturnType<typeof updateNewMessageBodyActionCreator>

export type DialogsActionsType = AddMessageBodyActionCreatorType | UpdateNewMessageBodyActionCreatorType

export default dialogsReducer;