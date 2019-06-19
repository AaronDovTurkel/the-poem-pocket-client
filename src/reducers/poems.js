import {
    FETCH_POEMS_SUCCESS,
    FETCH_POEMS_ERROR
} from '../actions/poems';

const initialState = {
    data: {
        title: '',
        stanzas: []
    },
    error: null
};

export const poemReducer = (state = initialState, action) => {
    if (action.type === FETCH_POEMS_SUCCESS) {
        return Object.assign({}, state, {
            data: {
                title: action.data.title,
                stanzas: action.data.stanzas
            },
            error: null
        });
    } else if (action.type === FETCH_POEMS_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}