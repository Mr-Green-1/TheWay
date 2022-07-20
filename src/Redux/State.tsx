const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST = "CHANGE-NEW-POST";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";



export type MessagesType = {
    id: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    newPostMessage: string
    posts: Array<PostsType>
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}

export type SidebarType = {}

export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sidebar: SidebarType
}

export type StoreType = {
    _state: RootStateType
    changeNewText: ( newText: string ) => void
    addPost: ( postText: string ) => void
    _onChange: () => void
    subscribe: ( callback: () => void ) => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator> | ReturnType<typeof addMessageBodyActionCreator> | ReturnType<typeof updateNewMessageBodyActionCreator>;



export const store: StoreType = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            posts: [
                {id: 1, message: 'hi , how are you?', likesCount: 12},
                {id: 2, message: 'hi , good and you?', likesCount: 11},
                {id: 3, message: 'hi all', likesCount: 17}
            ],
            newPostMessage: 'Alex'
        },
        sidebar: {}
    },
    changeNewText( newText: string ) {
        this._state.profilePage.newPostMessage = newText;
        this._onChange();
    },
    addPost( postText: string ) {
        const newPost: PostsType = {
            id: new Date().getTime(),
            message: postText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._onChange();
    },
    _onChange() {
        console.log('state changed')
    },
    subscribe( callback ) {
        this._onChange = callback;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._onChange();
        } else if (action.type === CHANGE_NEW_POST){
            this._state.profilePage.newPostMessage = action.newText;
            this._onChange();
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody = action.body;
            this._onChange();
        } else if (action.type === SEND_MESSAGE){
            let bodyText = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = "";
            this._state.dialogsPage.messages.push({id: 4, message: bodyText})
            this._onChange();
        }
    },
}

export const addPostActionCreator = (postText: string) => {
    return {
        type: "ADD-POST",
        postText: postText
    } as const
}
export const updateNewPostTextActionCreator = (newText: string) => {
     return  {
         type: "CHANGE-NEW-POST",
         newText: newText
    } as const
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




