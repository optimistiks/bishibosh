import {combineReducers} from 'redux';
import {currentUser, actionError} from '../reducers/index';
import {builds} from '../../../public/modules/reducers/index';

const reducer = combineReducers({
    actionError,
    currentUser,
    builds
});

export default reducer;
