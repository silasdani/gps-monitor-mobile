export const SHOW_SPINNER = "SHOW_SPINNER";
export const HIDE_SPINNER = "HIDE_SPINNER";

const spinnerHidden = (data) => ({
    type: HIDE_SPINNER,
    data
});

const spinnerShown = (data) => ({
    type: SHOW_SPINNER,
    data
});

export const hideSpinner = () => (dispatch) => dispatch(spinnerHidden(false));

export const showSpinner = () => (dispatch) => dispatch(spinnerShown(true));

const spinner = (state, action) => {
    switch (action.type) {
        case SHOW_SPINNER:
            return true;
        case HIDE_SPINNER:
            return false;
        default:
            return false;
    }
}

export default spinner;