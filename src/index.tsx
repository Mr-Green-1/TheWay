import './index.css';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {reducersStore} from './components/Redux/reduxStore';


ReactDOM.render(
    <BrowserRouter>
        <Provider store={reducersStore}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

reportWebVitals();




