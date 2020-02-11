//sets up react and redux
import React from 'react'
import ReactDOM from "react-dom"
import App from "./components/App"

import reducers from './reducers'
import { Provider } from 'react-redux'
import { createSTore, createStore } from 'redux'

ReactDOM.render(
    //any component in application can get access to store through the provider tag
    <Provider store={createStore(reducers)}><App /></Provider>,
    document.querySelector('#root')
);


