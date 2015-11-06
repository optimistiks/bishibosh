import getCurrentUser from '../get-current-user/index';

export const actionError = function (state = '', action) {

    console.log('ActionErrorReducer', action);

    if (action.isError) {
        return action.type;
    }

    return state;

};


export const currentUser = function (state = getCurrentUser(), action) {

    switch (action.type) {

        case 'REGISTER':
        case 'SIGN_IN':
        case 'SIGN_OUT':
            return action.payload;

        default:
            return state;

    }

};
