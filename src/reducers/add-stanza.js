import {
    ADD_STANZA_SUCCESS,
    ADD_STANZA_REQUEST,
    ADD_STANZA_ERROR
} from '../actions/add-stanza';

const initialState = {
    data: null,
    error: null,
    loading: false
};

export const addStanzaReducer = (state = initialState, action) => {
    if (action.type === ADD_STANZA_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null,
            loading: false
        });
    } else if (action.type === ADD_STANZA_REQUEST) {
        return Object.assign({}, state, {
            error: action.error,
            loading: true
        });
    } else if (action.type === ADD_STANZA_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    }
    return state;
}