import {
    FETCH_POEMPOCKET_SUCCESS,
    FETCH_POEMPOCKET_ERROR
} from '../actions/poemPocket';

const initialState = {
    data: {
        title: '',
        stanzas: []
    },
    error: null
};

export const poemPocketReducer = (state = initialState, action) => {
    if (action.type === FETCH_POEMPOCKET_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_POEMPOCKET_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}