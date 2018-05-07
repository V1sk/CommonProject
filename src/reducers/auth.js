import {AUTH} from '../utils/action-types'

const initialAuthState = {isLoggedIn: false};

export default function auth(state = initialAuthState, action) {
    switch (action.type) {
        case AUTH.LOGIN:
            return Object.assign({}, state, {isLoggedIn: true});
        case AUTH.LOGOUT:
            return Object.assign({}, state, {isLoggedIn: false});
        default:
            return state;
    }
}