import getCurrentUser from '../get-current-user/index';


export const currentUser = function(state = getCurrentUser(), action) {

    switch (action.type) {

        case 'SIGN_UP':
            return action.payload;

        default:
            return state;

    }

};

