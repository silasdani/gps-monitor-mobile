import api from "../api/user";
import setAuthorizationHeader from "../utils/setAuthorizationHeader";

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

const userEdited = (data) => ({
    type: USER_EDITED,
    data,
});

const userLoggedIn = (data) => ({
    type: USER_LOGGED_IN,
    data,
});

const userLoggedOut = () => ({
    type: USER_LOGGED_OUT,
});

export const login = (credentials) => (dispatch) => {
    return api.user.login(credentials)
        .then((user) => {
            setAuthorizationHeader(user.remember_digest);
            dispatch(userLoggedIn(user));
        });
}

export const logout = () =>
    api.user.logout()
        .then(() => {
            setAuthorizationHeader();
            userLoggedOut();
        });

export const resetPasswordRequest = ({ email }) => (dispatch) =>
    api.user.resetPasswordRequest(email)
        .then(dispatch(resetPasswordReseted()));

export const resetPassword = (credentials) => (dispatch) =>
    api.user.resetPassword(credentials)
        .then(dispatch(passwordReseted()))

export const signup = (data) => (dispatch) =>
    api.user.signup(data)
        .then((user) => {
            dispatchEvent(userCreated());
            dispatch(userLoggedIn(user));
        });

export const editUser = (user, id) => (dispatch) =>
    api.users.editUser(user, id)
        .then((data) => dispatch(userEdited(data)));

export const user = (state = {}, action = {}) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {
                ...state,
                user: action.data,
            };

        case USER_LOGGED_OUT:
        default:
            return state;
    }
}

export default user;