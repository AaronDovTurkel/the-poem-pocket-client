import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {fetchPoems} from '../actions/poems';

export const ADD_POEM_SUCCESS = 'ADD_POEM_SUCCESS';
export const addPoemSuccess = (data) => ({
    type: ADD_POEM_SUCCESS,
    data
});

export const ADD_POEM_REQUEST = 'ADD_POEM_REQUEST';
export const addPoemRequest = () => ({
    type: ADD_POEM_REQUEST
});

export const ADD_POEM_ERROR = 'ADD_POEM_ERROR';
export const addPoemError = error => ({
    type: ADD_POEM_ERROR,
    error
});

export const addPoem = (titleArg) => (dispatch, getState) => {
    dispatch(addPoemRequest());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/api/poems/title`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({
                title: titleArg
            })
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => {
            dispatch(fetchPoems());
            dispatch(addPoemSuccess(data));
        })
        .catch(err => {
            alert(err.message);
            dispatch(addPoemError(err));
        });
};