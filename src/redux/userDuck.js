import api from "../api/user";
import { USER_ADDED, USER_DELETED, USER_EDITED, USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";
import setAuthorizationHeader from "../utils/setAuthorizationHeader";

const userFetched = (data) => ({
    type: USER_ADDED,
    user: data,
});

const userDeleted = (data) => ({
    type: USER_DELETED,
    user: data,
});

const userEdited = (data) => ({
    type: USER_EDITED,
    user: data,
});

const userLoggedIn = (data) => ({
    type: USER_LOGGED_IN,
    user: data,
});

const userLoggedOut = () => ({
    type: USER_LOGGED_OUT,
});

// ---------------------------- //

export const login = (credentials) => (dispatch) => {
    console.warn("im here")
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

export const confirm = (token) =>
    api.user.confirm(token)
        .then((user) => {
            userLoggedIn(user);
        });

export const resetPasswordRequest = ({ email }) =>
    api.user.resetPasswordRequest(email);

export const validateToken = (token) =>
    api.user.validateToken(token);

export const resetPassword = (data) =>
    data;

export const signup = (data) =>
    api.user.signup(data).then((user) => userLoggedIn(user));

export const addUser = (data) =>
    api.users.addUser(data)
        .then(userFetched(data));

export const deleteUser = (id) =>
    api.users.removeUser(id)
        .then((id) => userDeleted(id));

export const editUser = (user, id) =>
    api.users.editUser(user, id)
        .then((data) => userEdited(data));



export const user = (state = {}, action = {}) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return action.user;

        case USER_LOGGED_OUT:
            return {};
        default:
            return state;
    }
}

export default user;