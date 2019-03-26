import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import App from './components/App';
import Main from './components/Main';
import Test from './components/Test';

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

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Main} />
                <Route path="/" component={Main} />
                <Route path="/test" component={Test} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);