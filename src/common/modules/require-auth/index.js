import getCurrentUser from '../../modules/get-current-user/index';


export default (nextState, replaceState) => {
    if (!getCurrentUser()) {
        replaceState({nextPathname: nextState.location.pathname}, '/login');
    }
};
