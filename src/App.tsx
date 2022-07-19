import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navigation} from './components/Navigation/Navigation';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';
import {Profile} from './components/Profile/Profile';
import {StoreType} from './Redux/State';

// state: RootStateType
// addPost: ( postText: string ) => void
//     newPostMessage: string
// changeNewPostMessage: (newText: string) => void


type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = ( props ) => {
    const state = props.store.getState();
    return (
        <div className="App">
            <Header/>
            <Navigation/>
            <div className="wrapper">
                <Routes>
                    <Route path={'/Profile'} element={<Profile posts={state.profilePage.posts}
                                                               addPost={props.store.addPost.bind(props.store)}
                                                               newPostMessage={state.profilePage.newPostMessage}
                                                               changeNewPostMessage={props.store.changeNewText.bind(props.store)}/>}/>

                    <Route path={'/Dialogs'} element={<Dialogs dialogs={props.store._state.dialogsPage.dialogs}
                                                               messages={props.store._state.dialogsPage.messages}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
