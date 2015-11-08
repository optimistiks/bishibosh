import {combineReducers} from 'redux';
import {currentUser, actionError} from '../reducers/index';
import {builds, compareFormData} from '../../../public/modules/reducers/index';

const reducer = combineReducers({
    actionError,
    currentUser,
    builds,
    compareFormData
});

export default reducer;
