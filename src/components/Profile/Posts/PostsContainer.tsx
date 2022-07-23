import {Posts} from './Posts';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../Redux/reducers/profileReducer';
import {connect} from 'react-redux';
import {RootReducerType} from '../../Redux/reduxStore';
import {compose, Dispatch} from 'redux';
import {FC} from 'react';


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

export default compose<FC>(
    connect(mapStateToProps, mapDispatchToProps))(Posts);
