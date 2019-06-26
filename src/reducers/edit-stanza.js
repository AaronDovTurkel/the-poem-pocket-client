import {
    EDIT_STANZA_SUCCESS,
    EDIT_STANZA_REQUEST,
    EDIT_STANZA_ERROR
} from '../actions/edit-stanza';

const initialState = {
    data: null,
    error: null,
    loading: false
};

export const editStanzaReducer = (state = initialState, action) => {
    if (action.type === EDIT_STANZA_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null,
            loading: false
        });
    } else if (action.type === EDIT_STANZA_REQUEST) {
        return Object.assign({}, state, {
            error: action.error,
            loading: true
        });
    } else if (action.type === EDIT_STANZA_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    }
    return state;
}