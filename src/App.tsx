import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navigation} from './components/Navigation/Navigation';
import {Route, Routes} from 'react-router-dom';
import {Profile} from './components/Profile/Profile';
import {StoreType} from './components/Redux/State';
import DialogsContainer from './components/Dialogs/DialogsContainer';


type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = ( props ) => {

    return (
        <div className="App">
            <Header/>
            <Navigation/>
            <div className="wrapper">
                <Routes>
                    <Route path={'/Profile'} element={<Profile/>}/>
                    <Route path={'/Dialogs'} element={<DialogsContainer}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
