import UserService from '../api/UserService'
import * as RootNavigation from '../routes/Navigation';
export const USER_CREATED = "USER_CREATED";
export const RESET_USER_PASSWORD = "RESET_USER_PASSWORD";
export const REQUEST_RESET_PASSWORD = "REQUEST_RESET_PASSWORD";

export const USER_LOGGED_IN = "USER_LOGGED_IN";
export const USER_LOGGED_OUT = "USER_LOGGED_OUT";
export const USER_EDITED = "USER_EDITED";

const userCreated = () => ({
    type: USER_CREATED,
});

const passwordReseted = () => ({
    type: RESET_USER_PASSWORD,
});

const resetPasswordReseted = () => ({
    type: RESET_USER_PASSWORD,
});

const userLoggedIn = (data) => ({
    type: USER_LOGGED_IN,
    data,
});

const userLoggedOut = () => ({
    type: USER_LOGGED_OUT,
});

export const login = (credentials) => (dispatch) => {
    return new UserService().login(credentials)
        .then((user) => {
            dispatch(userLoggedIn(user));
            RootNavigation.navigate('Dashboard', user);
        })
        .catch(console.warn)
}

export const logout = () => (dispatch) => {
    return new UserService().logout()
        .then(() => {
            dispatch(userLoggedOut())
        })
        .catch(console.warn)
}

export const resetPasswordRequest = ({ email }) => (dispatch) => {
    return new UserService().resetPasswordRequest(email)
        .then(dispatch(resetPasswordReseted()))
        .catch(console.warn)
}

export const resetPassword = (credentials) => (dispatch) => {
    return new UserService().resetPassword(credentials)
        .then(dispatch(passwordReseted()))
        .catch(console.warn)
}

export const signup = (data) => (dispatch) => {
    return new UserService().signup(data)
        .then((user) => {
            dispatch(userCreated());
            dispatch(userLoggedIn(user));
            RootNavigation.navigate('Login', { user: user });
        })
        .catch(console.warn)
}

export const user = (state = {}, action = {}) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {
                ...state,
                ...action.data,
            };

        case USER_LOGGED_OUT:
        default:
            return state;
    }
}

export default user;