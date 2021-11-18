import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";
import api from "../api/user";
import { userLoggedIn } from "./auth";
import { USER_ADDED, USER_DELETED, USER_EDITED } from "../types";


const userFetched = (data) => ({
    type: USER_ADDED,
    data,
});

const userDeleted = (data) => ({
    type: USER_DELETED,
    data,
});

const userEdited = (data) => ({
    type: USER_EDITED,
    data,
});

export const signup = (data) => (dispatch) =>
    api.user.signup(data).then((user) => {
        dispatch(userLoggedIn(user));
    });

export const addUser = (data) => (dispatch) =>
    api.users.addUser(data).then(dispatch(userFetched(data)));

export const deleteUser = (id) => (dispatch) =>
    api.users.removeUser(id).then((id) => dispatch(userDeleted(id)));

export const editUser = (user, id) => (dispatch) =>
    api.users.editUser(user, id).then((data) => dispatch(userEdited(data)));



export default function user(state = {}, action = {}) {
    switch (action.type) {
        case USER_LOGGED_IN:
            return action.user;

        case USER_LOGGED_OUT:
            return {};
        default:
            return state;
    }
}

export { user };