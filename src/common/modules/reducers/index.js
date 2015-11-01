import getCurrentUser from '../get-current-user/index';

export const currentUser = function (state = getCurrentUser(), action) {

    switch (action.type) {

        case 'CURRENT_USER_CHANGE':
            return action.payload;

        default:
            return state;

    }

};
