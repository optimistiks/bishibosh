export const builds = function(state = [], action) {

    switch (action.type) {

        case 'LOAD_BUILDS':
            return action.payload;

        default:
            return state;

    }

};

export const compareFormData = function(state = {battleTag: '', heroName: '', buildId: ''}, action) {

    switch (action.type) {

        case 'COMPARE_FORM_CHANGE':
            const newState = Object.assign({}, state, action.payload);
            return newState;

        default:
            return state;

    }

};
