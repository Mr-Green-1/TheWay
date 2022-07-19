let onChange = () => {
    console.log('hi')
}

export const subscribe = ( callback: () => void ) => {
    onChange = callback;
}

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

export let state: RootStateType = {
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
        newPostMessage: 'Alex',
    },
    sidebar: {}
};

export const addPost = ( newText: string ) => {
    const newPost: PostsType = {
        id: new Date().getTime(),
        message: newText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    onChange();
}

export const changeNewText = ( newText: string ) => {
    state.profilePage.newPostMessage = newText;
    onChange();
}