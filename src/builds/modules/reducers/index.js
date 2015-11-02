export const builds = function(state = [], action) {

    switch (action.type) {

        case 'LOAD_BUILDS':
            return action.payload;

        default:
            return state;

    }

};
