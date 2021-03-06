import {
    FETCH_POEMPOCKET_SUCCESS,
    FETCH_POEMPOCKET_ERROR,
    FETCH_POEMPOCKET_REQUEST
} from '../actions/poemPocket';

const initialState = {
    data: [],
    error: null,
    loading: false
};

export const poemPocketReducer = (state = initialState, action) => {
    if (action.type === FETCH_POEMPOCKET_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null,
            loading: false
        });
    } else if (action.type === FETCH_POEMPOCKET_REQUEST) {
        return Object.assign({}, state, {
            error: action.error,
            loading: true
        });
    } else if (action.type === FETCH_POEMPOCKET_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    }
    return state;
}