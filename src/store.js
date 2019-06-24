import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth';
import {poemReducer} from './reducers/poems';
import {poemPocketReducer} from './reducers/poemPocket';
import {addStanzaReducer} from './reducers/add-stanza';
import {setAuthToken, refreshAuthToken} from './actions/auth';

const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        poems: poemReducer,
        poemPocket: poemPocketReducer,
        addStanza: addStanzaReducer
    }),
    applyMiddleware(thunk)
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;
