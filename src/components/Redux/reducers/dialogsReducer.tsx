import {DialogsPageType, RootActionTypes} from '../State';

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const dialogsReducer = ( state: DialogsPageType, action: RootActionTypes ): DialogsPageType => {

    if (action.type === UPDATE_NEW_MESSAGE_BODY){
    state.newMessageBody = action.body;
} else if (action.type === SEND_MESSAGE){
    let bodyText = state.newMessageBody;
    state.newMessageBody = "";
    state.messages.push({id: 4, message: bodyText})
}


    return state;
}

export const  addMessageBodyActionCreator = (bodyText: string) => {
    return  {
        type: "SEND-MESSAGE",
        bodyText: bodyText
    } as const
}
export const  updateNewMessageBodyActionCreator = (body: string) => {
    return  {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: body
    } as const
}

type AddMessageBodyActionCreatorType = ReturnType<typeof addMessageBodyActionCreator>
type  UpdateNewMessageBodyActionCreatorType = ReturnType<typeof updateNewMessageBodyActionCreator>

export type DialogsActionsType = AddMessageBodyActionCreatorType | UpdateNewMessageBodyActionCreatorType

export default dialogsReducer;