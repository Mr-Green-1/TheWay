import {PostsType, ProfilePageType, RootActionTypes} from './State';

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';


const profileReducer = ( state: ProfilePageType, action: RootActionTypes ): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostMessage = '';
            return state;
        case CHANGE_NEW_POST:
            state.newPostMessage = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = ( postText: string ) => {
    return {
        type: 'ADD-POST',
        postText: postText
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