import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StoreContext } from 'redux-react-hook'
import configureStore from './store/intex'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
const store = configureStore()

ReactDOM.render(
    <StoreContext.Provider value={store}>
        <Provider store={store}>
            <App />
        </Provider>    
    </StoreContext.Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
