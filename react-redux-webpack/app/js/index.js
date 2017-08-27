import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import postApp from './reducers'
import App from './containers/App'
import 'css/main.scss';

const store = createStore(postApp);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
