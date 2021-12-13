import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import user from './userDuck';
import location from './locationDuck';
import spinner from './spinnerDuck';

const rootReducer = combineReducers({
    user,
    location,
    spinner
});

const configureStore = () => {
    return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
};

export default configureStore;