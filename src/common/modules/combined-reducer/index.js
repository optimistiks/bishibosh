import {combineReducers} from 'redux';
import {currentUser} from '../reducers/index';
import {builds} from '../../../public/modules/reducers/index';

const reducer = combineReducers({
    currentUser,
    builds
});

export default reducer;
