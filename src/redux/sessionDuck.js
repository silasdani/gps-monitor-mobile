
export const USER_LOGGED_IN = "USER_LOGGED_IN";
export const USER_LOGGED_OUT = "USER_LOGGED_OUT";

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
