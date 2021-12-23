import UserSerializer from '../Serializers/UserSerializer';
import SessionService from '../services/SessionService';

export const USER_LOGGED_IN = "USER_LOGGED_IN";
export const USER_LOGGED_OUT = "USER_LOGGED_OUT";

export const userLoggedIn = (data) => ({
    type: USER_LOGGED_IN,
    data,
});

const userLoggedOut = () => ({
    type: USER_LOGGED_OUT,
});

export const login = (credentials) => (dispatch) => {
    return new SessionService().login(credentials)
        .then((answer) => {
            const user = UserSerializer.deserialize(answer)
            dispatch(userLoggedIn(user));
        })
        .catch(console.warn)
}

export const logout = () => (dispatch) => {
    return new SessionService().logout()
        .then(() => {
            dispatch(userLoggedOut())
        })
        .catch(console.warn)
}

const DEFAULT_STATE = {
    user: {
        id: null,
        name: '',
        email: '',
    },
    signedIn: false
}

const session = (state = DEFAULT_STATE, action = {}) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {
                user: action.data,
                signedIn: true
            };
        case USER_LOGGED_OUT:
            return DEFAULT_STATE;
        default:
            return state;
    }
}

export default session;