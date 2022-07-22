import {PostsType, ProfilePageType, RootActionTypes} from '../State';

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';


const profileReducer = ( state: ProfilePageType, action: RootActionTypes ): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostsType = {
                id: new Date().getTime(),
                message: state.newPostMessage,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostMessage = '';
            return stateCopy;
        }
        case CHANGE_NEW_POST: {
            let stateCopy = {...state}
            stateCopy.newPostMessage = action.newText;
            return stateCopy;
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