const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';

type PostsType = {
    id: number
    message: string
    likesCount: number
}

type ProfileInitialStateType = {
    newPostMessage: string
    posts: Array<PostsType>
}

let initialState: ProfileInitialStateType = {
    posts: [
        {id: 1, message: 'hi , how are you?', likesCount: 12},
        {id: 2, message: 'hi , good and you?', likesCount: 11},
        {id: 3, message: 'hi all', likesCount: 17}
    ],
    newPostMessage: 'Alex'
}


const profileReducer = ( state = initialState, action: ProfileActionsType ): ProfileInitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: new Date().getTime(),
                message: state.newPostMessage,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostMessage: ''
            };
        }
        case CHANGE_NEW_POST: {
            return {
                ...state,
                newPostMessage: action.newText
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export const updateNewPostTextActionCreator = ( newText: string ) => {
    return {
        type: 'CHANGE-NEW-POST',
        newText: newText
    } as const
}

export type AddPostActionCreatorType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostTextActionCreatorType = ReturnType<typeof updateNewPostTextActionCreator>

export type ProfileActionsType = AddPostActionCreatorType | UpdateNewPostTextActionCreatorType

export default profileReducer;