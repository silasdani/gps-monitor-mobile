import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import user from './userDuck';
import location from './locationDuck';
import spinner from './spinnerDuck';
import session from './sessionDuck';

const rootReducer = combineReducers({
    user,
    location,
    spinner,
    session,
});

var Singleton = (() => {
    var instance;

    function createInstance() {
        return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

export default Singleton.getInstance();