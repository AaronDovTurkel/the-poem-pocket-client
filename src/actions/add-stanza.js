import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {fetchPoems} from '../actions/poems';

export const ADD_STANZA_SUCCESS = 'ADD_STANZA_SUCCESS';
export const addStanzaSuccess = (data) => ({
    type: ADD_STANZA_SUCCESS,
    data
});

export const ADD_STANZA_REQUEST = 'ADD_STANZA_REQUEST';
export const addStanzaRequest = () => ({
    type: ADD_STANZA_REQUEST
});

export const ADD_STANZA_ERROR = 'ADD_STANZA_ERROR';
export const addStanzaError = error => ({
    type: ADD_STANZA_ERROR,
    error
});

export const addStanza = (authorArg, textArg) => (dispatch, getState) => {
    dispatch(addStanzaRequest());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/poems/stanza`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({
                author: authorArg,
                stanza: textArg
            })
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => {
            dispatch(fetchPoems());
            dispatch(addStanzaSuccess(data));
        })
        .catch(err => {
            dispatch(addStanzaError(err));
        });
};