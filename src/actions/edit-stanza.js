import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {fetchPoems} from '../actions/poems';

export const EDIT_STANZA_SUCCESS = 'EDIT_STANZA_SUCCESS';
export const editStanzaSuccess = (data) => ({
    type: EDIT_STANZA_SUCCESS,
    data
});

export const EDIT_STANZA_REQUEST = 'EDIT_STANZA_REQUEST';
export const editStanzaRequest = () => ({
    type: EDIT_STANZA_REQUEST
});

export const EDIT_STANZA_ERROR = 'EDIT_STANZA_ERROR';
export const editStanzaError = error => ({
    type: EDIT_STANZA_ERROR,
    error
});

export const editStanza = (textArg, idArg) => (dispatch, getState) => {
    dispatch(editStanzaRequest());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/api/poems/stanza`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({
                stanza: textArg,
                id: idArg
            })
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => {
            dispatch(fetchPoems());
            dispatch(editStanzaSuccess(data));
        })
        .catch(err => {
            alert(err.message);
            dispatch(editStanzaError(err));
        });
};