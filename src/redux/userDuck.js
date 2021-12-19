import UserService from "../services/UserService";

export const USER_CREATED = "USER_CREATED";
export const RESET_USER_PASSWORD = "RESET_USER_PASSWORD";
export const REQUEST_RESET_PASSWORD = "REQUEST_RESET_PASSWORD";
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
        })
        .catch(console.warn)
}

export const user = (state = {}, action = {}) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default user;