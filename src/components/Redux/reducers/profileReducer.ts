import {RootActionTypes} from '../State';

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';

let initialState = {
    posts: [
        {id: 1, message: 'hi , how are you?', likesCount: 12},
        {id: 2, message: 'hi , good and you?', likesCount: 11},
        {id: 3, message: 'hi all', likesCount: 17}
    ],
    newPostMessage: 'Alex'
}


const profileReducer = ( state = initialState, action: RootActionTypes ) => {
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

type AddPostActionCreatorType = ReturnType<typeof addPostActionCreator>
type UpdateNewPostTextActionCreatorType = ReturnType<typeof updateNewPostTextActionCreator>

export type ProfileActionsType = AddPostActionCreatorType | UpdateNewPostTextActionCreatorType

export default profileReducer;