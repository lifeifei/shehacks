import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root_reducer';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Invitation from './components/invitation/Invitation';

const middleware = applyMiddleware(thunk);


let store = createStore(rootReducer,
    compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f)
);
const history = syncHistoryWithStore(browserHistory, store);
history.listen(location => console.log(location));

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} />
            <Route path="/invitation" component={Invitation} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
