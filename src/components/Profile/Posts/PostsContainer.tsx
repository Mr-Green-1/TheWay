import React from 'react';
import {Posts} from './Posts';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../Redux/reducers/profileReducer';
import {connect} from 'react-redux';
import {RootReducerType} from '../../Redux/reduxStore';
import {Dispatch} from 'redux';

type mapStateToPropsType = {
    posts:
        newPostMessage:
}

type mapDispatchToPropsType = {
    addPost:
        changeNewPostMessage:
}


let mapStateToProps = ( state: RootReducerType ) => {
    return {
        posts: state.profilePage.posts,
        newPostMessage: state.profilePage.newPostMessage
    }
}
let mapDispatchToProps = ( dispatch: Dispatch ) => {
    return {
        addPost: () => {dispatch(addPostActionCreator());},
        changeNewPostMessage: (newText: string)=> {dispatch(updateNewPostTextActionCreator(newText));}
    }
}

const postsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default postsContainer;


//type PostsPropsType = {
//     store: StoreType
// }
//
// const PostsContainer = ( props: PostsPropsType ) => {
//
//     let state = props.store.getState();
//
//     const addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     }
//
//     const newPostChangeHandler = ( newText: string ) => {
//         props.store.dispatch(updateNewPostTextActionCreator(newText));
//     };
//
//     return (
//         <Posts changeNewPostMessage={newPostChangeHandler}
//                addPost={addPost}
//                posts={state.profilePage.posts}
//                newPostMessage={state.profilePage.newPostMessage}/>
//     )
// }
//
// export default PostsContainer;