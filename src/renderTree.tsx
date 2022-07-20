import {store} from './components/Redux/State';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';

export const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );

    reportWebVitals();
}