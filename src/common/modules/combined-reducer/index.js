import {combineReducers} from 'redux';
import {currentUser, actionError, slots} from '../reducers/index';
import {builds, compareFormData} from '../../../public/modules/reducers/index';
import {buildData, heroProfileItems, recommendations} from '../../../compare/modules/reducers/index';

const reducer = combineReducers({
    actionError,
    currentUser,
    builds,
    compareFormData,
    buildData,
    heroProfileItems,
    recommendations,
    slots
});

export default reducer;
