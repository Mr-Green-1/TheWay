import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navigation} from './components/Navigation/Navigation';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';
import {Profile} from './components/Profile/Profile';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Navigation/>
            <div className="wrapper">
                <Routes>
                    <Route path={'/Profile'} element={<Profile/>}/>
                    <Route path={'/Dialogs'} element={<Dialogs/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
