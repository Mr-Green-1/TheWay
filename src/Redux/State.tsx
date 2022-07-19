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
    dispatch: (action: AddPostActionType | ChangeNewTextActionType) => void
}

type AddPostActionType = {
    type: "ADD-POST"
    postText: string
}

type ChangeNewTextActionType = {
    type: "CHANGE-NEW-TEXT"
    newText: string
}

export type ActionTypes = AddPostActionType | ChangeNewTextActionType;

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
        },
        profilePage: {
            posts: [
                {id: 1, message: 'hi , how are you?', likesCount: 12},
                {id: 2, message: 'hi , good and you?', likesCount: 11},
                {id: 3, message: 'hi all', likesCount: 17}
            ],
            newPostMessage: '',
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
        if (action.type === "ADD-POST") {
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._onChange();
        } else if (action.type === "CHANGE-NEW-TEXT"){
            this._state.profilePage.newPostMessage = action.newText;
            this._onChange();
        }
    }
}

