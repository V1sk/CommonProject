import {AUTH} from '../utils/action-types';

/**
 * Actions
 */
const logoutAction = () => ({
    type: AUTH.LOGOUT
});

const loginAction = () => ({
    type: AUTH.LOGIN
});

/**
 * Actions dispatcher
 */
const login = () => (dispatch, getState) => {
    dispatch(loginAction())
};

const logout = () => (dispatch, getState) => {
    dispatch(logoutAction());
};

export default {
    login,
    logout
}