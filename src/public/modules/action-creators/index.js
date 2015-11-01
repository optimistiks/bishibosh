import createAction from '../../../common/modules/create-action/index';
import Parse from 'parse';


const actionSignUp = createAction('SIGN_UP');

export const signUp = (username, password) => {

    //todo: refactor to async when https://github.com/babel/babel/commit/39bdecb119da13c6b2df7464863322adc49a1c9a is released
    //todo: probably babel 6.0.15
    return function (dispatch) {

        const user = new Parse.User();
        user.set('username', username);
        user.set('password', password);

        dispatch(actionSignUp(user));

        user.signUp()
            .then(
                () => dispatch(actionSignUp(Parse.User.current())),
                (exception) => console.error('SIGN_UP', exception)
            );

    };
};
