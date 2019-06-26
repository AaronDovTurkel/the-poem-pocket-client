import {
    ADD_POEM_SUCCESS,
    ADD_POEM_REQUEST,
    ADD_POEM_ERROR
} from '../actions/addPoem';

const initialState = {
    data: null,
    error: null,
    loading: false
};

export const addPoemReducer = (state = initialState, action) => {
    if (action.type === ADD_POEM_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null,
            loading: false
        });
    } else if (action.type === ADD_POEM_REQUEST) {
        return Object.assign({}, state, {
            error: action.error,
            loading: true
        });
    } else if (action.type === ADD_POEM_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    }
    return state;
}