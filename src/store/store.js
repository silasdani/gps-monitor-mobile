import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { user as reducer } from './reducer';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export { store };