import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducers from './main/reducers'

import promise from 'redux-promise'


const store = applyMiddleware(promise)(createStore)(rootReducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app'))

