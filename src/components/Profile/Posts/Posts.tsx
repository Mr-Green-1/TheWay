import React, {ChangeEvent} from 'react';
import classes from './Posts.module.css'
import {Post} from './post/Post';
import {PostsType} from '../../../Redux/State';

type PostsPropsType = {
    posts: Array<PostsType>
    addPost: ( postText: string ) => void
    newPostMessage: string
    changeNewPostMessage: (newText: string) => void
}

export const Posts = (props: PostsPropsType) => {

    let postsElements = props.posts.map(( p ) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current){
        props.addPost(newPostElement.current.value);
        newPostElement.current.value = '';
        }
    }

    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <textarea ref={newPostElement} value={props.newPostMessage}></textarea>
            </div>
            <button onClick={addPost}>add post</button>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

// export const Posts = ( props: PostsPropsType ) => {
//
//     let postsElements = props.posts.map(( p ) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);
//
//     const addPost = () => {
//         props.addPost(props.newPostMessage);
//     }
//
//     const newPostChangeHandler = ( e: ChangeEvent<HTMLTextAreaElement> ) => {
//         props.changeNewPostMessage(e.currentTarget.value);
//     };
//
//     return (
//         <div>
//             <h3>My Posts</h3>
//             <div>
//                 <textarea value={props.newPostMessage} onChange={newPostChangeHandler}></textarea>
//             </div>
//             <button onClick={addPost}>add post</button>
//             <div className={classes.posts}>
//                 {postsElements}
//             </div>
//         </div>
//     )
// }