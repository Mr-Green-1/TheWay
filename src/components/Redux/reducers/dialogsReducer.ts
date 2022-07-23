const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

type MessagesType = {
    id: number
    message: string
}

type DialogsType = {
    id: number
    name: string
}

let initialState = {
        dialogs: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Anna'},
            {id: 3, name: 'Jon'},
            {id: 4, name: 'Mia'},
            {id: 5, name: 'Mike'}
        ] as Array<DialogsType>,
        messages: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'how are you?'},
            {id: 3, message: 'good'}
        ] as Array<MessagesType>,
        newMessageBody: '',
};

export type DialogInitialState = typeof initialState;

const dialogsReducer = ( state: DialogInitialState = initialState, action: DialogsActionsType ): DialogInitialState => {

    switch (action.type) {
        case
        UPDATE_NEW_MESSAGE_BODY:
            return  {
            ...state,
                newMessageBody: action.body
        };
        case
        SEND_MESSAGE:
            let body = state.newMessageBody;
            return  {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 4, message: body}]
            };
        default:
            return state;
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

export type AddMessageBodyActionCreatorType = ReturnType<typeof addMessageBodyActionCreator>
export type  UpdateNewMessageBodyActionCreatorType = ReturnType<typeof updateNewMessageBodyActionCreator>

export type DialogsActionsType = AddMessageBodyActionCreatorType | UpdateNewMessageBodyActionCreatorType

export default dialogsReducer;