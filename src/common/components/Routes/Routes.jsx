import React from 'react';
import {Router, Route} from 'react-router';
import {Provider} from 'react-redux';

import store from '../../modules/store/index';

import App from '../App/App.jsx';
import Public from '../Public/Public.jsx';
import Protected from '../Protected/Protected.jsx';
import RegistrationPage from '../../../public/components/RegistrationPage/RegistrationPage.jsx';
import LoginPage from '../../../public/components/LoginPage/LoginPage.jsx';
import BuildsPage from '../../../builds/components/BuildsPage/BuildsPage.jsx';

const Routes = (

    <Provider store={store}>
        <Router>
            <Route path="/" component={App}>
                <Route component={Public}>
                    <Route path="registration" component={RegistrationPage}/>
                    <Route path="login" component={LoginPage}/>
                </Route>
                <Route component={Protected}>
                    <Route path="builds" component={BuildsPage}/>
                </Route>
            </Route>
        </Router>
    </Provider>

);

export default Routes;
