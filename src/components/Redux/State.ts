// type MessagesType = {
//     id: number
//     message: string
// }
//
// type DialogsType = {
//     id: number
//     name: string
// }
//
// type PostsType = {
//     id: number
//     message: string
//     likesCount: number
// }
//
// type ProfilePageType = {
//     newPostMessage: string
//     posts: Array<PostsType>
// }
//
// type DialogsPageType = {
//     dialogs: Array<DialogsType>
//     messages: Array<MessagesType>
//     newMessageBody: string
// }
//
// type SidebarType = {}
//
// type RootStateType = {
//     dialogsPage: DialogsPageType
//     profilePage: ProfilePageType
//     sidebar: SidebarType
// }
//
// type StoreType = {
//     _state: RootStateType
//     changeNewText: ( newText: string ) => void
//     addPost: ( postText: string ) => void
//     _onChange: () => void
//     subscribe: ( callback: () => void ) => void
//     getState: () => RootStateType
//     dispatch: ( action: RootActionTypes ) => void
// }
//
// type RootActionTypes = ProfileActionsType | DialogsActionsType;
//
// const store: StoreType = {
//     _state: {
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Alex'},
//                 {id: 2, name: 'Anna'},
//                 {id: 3, name: 'Jon'},
//                 {id: 4, name: 'Mia'},
//                 {id: 5, name: 'Mike'}
//             ],
//             messages: [
//                 {id: 1, message: 'hi'},
//                 {id: 2, message: 'how are you?'},
//                 {id: 3, message: 'good'}
//             ],
//             newMessageBody: ''
//         },
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'hi , how are you?', likesCount: 12},
//                 {id: 2, message: 'hi , good and you?', likesCount: 11},
//                 {id: 3, message: 'hi all', likesCount: 17}
//             ],
//             newPostMessage: 'Alex'
//         },
//         sidebar: {}
//     },
//     changeNewText( newText: string ) {
//         this._state.profilePage.newPostMessage = newText;
//         this._onChange();
//     },
//     addPost( postText: string ) {
//         const newPost: PostsType = {
//             id: new Date().getTime(),
//             message: postText,
//             likesCount: 0
//         }
//         this._state.profilePage.posts.push(newPost);
//         this._onChange();
//     },
//     _onChange() {
//         console.log('state changed')
//     },
//     subscribe( callback ) {
//         this._onChange = callback;
//     },
//     getState() {
//         return this._state;
//     },
//     dispatch( action ) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//         this._onChange();
//     },
// }
export {}