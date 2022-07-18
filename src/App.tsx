import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navigation} from './components/Navigation/Navigation';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';
import {Profile} from './components/Profile/Profile';
import {RootStateType} from './Redux/State';



type AppPropsType = {
    state: RootStateType
    addPost: ( postText: string ) => void
}

const App = ( props: AppPropsType ) => {
    return (
        <div className="App">
            <Header/>
            <Navigation/>
            <div className="wrapper">
                <Routes>
                    <Route path={'/Profile'} element={<Profile posts={props.state.profilePage.posts}
                                                               addPost={props.addPost}/>}/>
                    <Route path={'/Dialogs'} element={<Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                               messages={props.state.dialogsPage.messages}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
