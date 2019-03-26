import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import App from "./components/App.js";

const tracks = [
    {
        title: 'Some track'
    },
    {
        title: 'Some other track'
    }
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);