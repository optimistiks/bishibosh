export const heroProfileItems = function (state = {}, action) {

    switch (action.type) {

        case 'HERO_PROFILE_ITEMS':
            return action.payload;

        default:
            return state;

    }

};

export const buildData = function (state = {}, action) {

    switch (action.type) {

        case 'BUILD_DATA':
            return action.payload;

        default:
            return state;

    }

};

export const recommendations = function (state = [], action) {

    switch (action.type) {

        case 'RECOMMENDATIONS':
            return action.payload;

        default:
            return state;

    }

};
