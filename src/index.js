import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import App from './components/App';
import Main from './components/Main';
import Test from './components/Test';

const store = configureStore();

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