import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_POEMS_SUCCESS = 'FETCH_POEMS_SUCCESS';
export const fetchPoemsSuccess = (dataArg) => ({
    type: FETCH_POEMS_SUCCESS,
    data: {
        title: dataArg.title,
        stanzas: dataArg.stanzas
    }
});

export const FETCH_POEMS_ERROR = 'FETCH_POEMS_ERROR';
export const fetchPoemsError = (error) => ({
    type: FETCH_POEMS_ERROR,
    error
});

export const fetchPoems = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/poems/title`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => {
            dispatch(fetchPoemsSuccess(data));
        })
        .catch(err => {
            dispatch(fetchPoemsError(err));
        });
};