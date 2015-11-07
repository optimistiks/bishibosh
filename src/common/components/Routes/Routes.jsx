import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';

import store from '../../modules/store/index';

import App from '../App/App.jsx';
import PublicGateway from '../PublicGateway/PublicGateway.jsx';
import ProtectedGateway from '../ProtectedGateway/ProtectedGateway.jsx';
import RegistrationPage from '../../../public/components/RegistrationPage/RegistrationPage.jsx';
import LoginPage from '../../../public/components/LoginPage/LoginPage.jsx';
import DashboardPage from '../../../dashboard/components/DashboardPage/DashboardPage.jsx';
import PromoPage from '../../../public/components/PromoPage/PromoPage.jsx';
import ComparePage from '../../../compare/components/ComparePage/ComparePage.jsx';


const Routes = (

    <Provider store={store}>
        <Router>
            <Route path="/" component={App}>
                <IndexRoute component={PromoPage}/>
                <Route path="compare" component={ComparePage}/>
                <Route component={PublicGateway}>
                    <Route path="register" component={RegistrationPage}/>
                    <Route path="signin" component={LoginPage}/>
                </Route>
                <Route component={ProtectedGateway}>
                    <Route path="dashboard" component={DashboardPage}/>
                </Route>
            </Route>
        </Router>
    </Provider>

);

export default Routes;
