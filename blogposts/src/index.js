//how the app is rendered
//root index.js file
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import thunk from "redux-thunk"
import {createStore, applyMiddleware} from 'redux'

import App from './components/App'
import reducers from './reducers'

//hooking up middleware to redux store
const store = createStore(reducers, applyMiddleware(thunk))
ReactDOM.render(
    <Provider store ={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)

