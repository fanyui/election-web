import React, { Component } from 'react';
import Login from './pages/login';
import {
    Router,
    Route,
    Switch
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

const hist = createBrowserHistory()
class IndexRoute extends Component {
    render() {
        return(
            <Router history={hist}>
                <Switch>
                    <Route exact path='/' component={Login}/>
                </Switch>
            </Router>
        )

    }
}

export default IndexRoute;
