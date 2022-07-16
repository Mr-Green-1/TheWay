import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navigation} from './components/Navigation/Navigation';
import {Dialogs} from './components/Dialogs/Dialogs';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Navigation/>
            {/*<Profile />*/}
            <div className="App_Wrapper">
                <Dialogs/>
            </div>
        </div>
    );
}

export default App;
