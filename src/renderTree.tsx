import {addPost, changeNewText, state} from './Redux/State';
import ReactDOM from 'react-dom/client';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

export const renderTree = () => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost={addPost}
                     newPostMessage={state.profilePage.newPostMessage}
                     changeNewPostMessage={changeNewText}/>
            </BrowserRouter>
        </React.StrictMode>
    );

    reportWebVitals();
}