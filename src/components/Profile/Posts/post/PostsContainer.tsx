import React from 'react';
import {Posts} from '../Posts';
import {StoreType} from '../../../Redux/State';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../Redux/reducers/profileReducer';

type PostsPropsType = {
    store: StoreType
}

const PostsContainer = ( props: PostsPropsType ) => {

    let state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const newPostChangeHandler = ( newText: string ) => {
        props.store.dispatch(updateNewPostTextActionCreator(newText));
    };

    return (
        <Posts changeNewPostMessage={newPostChangeHandler}
               addPost={addPost}
               posts={state.profilePage.posts}
               newPostMessage={state.profilePage.newPostMessage}/>
    )
}

export default PostsContainer;




























































































// import {connect} from 'react-redux';
// // import {Posts} from '../Posts';
// // import {addPostActionCreator} from '../../../Redux/reducers/profileReducer';
// //
// //
// // let mapStateToProps = ( state ) => {
// //     return {
// //         posts: state.profilePage.posts,
// //         newPostMessage: state.profilePage.newPostMessage
// //     }
// // }
// // let mapDispatchToProps = ( dispatch ) => {
// //     return {
// //         addPost: dispatch(addPostActionCreator()),
// //     }
// // }
// //
// // const postsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
// //
// // export default postsContainer;