import {loadBuilds as actionLoadBuilds} from '../action-repository/index';
import Parse from 'parse';
import getCurrentUser from '../../../common/modules/get-current-user/index';


export const loadBuilds = () => {

    return async function (dispatch) {

        const query = new Parse.Query('Build');
        query.equalTo('user', getCurrentUser());

        try {

            const response = await query.find();
            dispatch(actionLoadBuilds(response));

        } catch (exception) {
            console.error('LOAD_BUILDS', exception);
        }

    };

};
