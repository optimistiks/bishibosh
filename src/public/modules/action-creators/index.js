import Parse from 'parse';
import {
    register as actionRegister,
    signIn as actionSignIn,
    loadBuilds as actionLoadBuilds
} from '../action-repository/index';

export const loadBuilds = () => {

    return async function (dispatch) {

        const query = new Parse.Query('Build');

        try {

            const response = await query.find();
            dispatch(actionLoadBuilds(response));

        } catch (exception) {

            dispatch(actionLoadBuilds([], true));

        }

    };

};

export const register = (username, password) => {

    return async function (dispatch) {

        const user = new Parse.User();
        user.set('username', username);
        user.set('password', password);

        dispatch(actionRegister(user));

        try {

            await user.signUp();
            dispatch(actionRegister(Parse.User.current()));

        } catch (exception) {
            console.error('REGISTER', exception);
        }

    };
};

export const signIn = (username, password) => {

    return async function (dispatch) {

        try {

            await Parse.User.logIn(username, password);
            dispatch(actionSignIn(Parse.User.current()));

        } catch (exception) {
            console.error('SIGN_IN', exception);
        }

    };
};
