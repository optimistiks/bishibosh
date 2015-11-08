import getCurrentUser from '../get-current-user/index';
import slotsList from '../../../../slots.json';

export const actionError = function (state = {}, action) {

    if (action.payload instanceof Error) {
        throw action.payload;
    }

    if (action.isError) {
        return action;
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

export const slots = function (state = slotsList) {
    return state;
};
