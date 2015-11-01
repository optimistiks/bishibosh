import React from 'react';
import {Router, Route} from 'react-router';
import {Provider} from 'react-redux';

import store from '../../modules/store/index';

import App from '../App/App.jsx';
import RegistrationPage from '../../../public/components/RegistrationPage/RegistrationPage.jsx';
import LoginPage from '../../../public/components/LoginPage/LoginPage.jsx';


const Routes = (

    <Provider store={store}>
        <Router>
            <Route path="/" component={App}>
                <Route path="registration" component={RegistrationPage}/>
                <Route path="login" component={LoginPage}/>
            </Route>
        </Router>
    </Provider>

);

export default Routes;
