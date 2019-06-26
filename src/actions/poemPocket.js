import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_POEMPOCKET_SUCCESS = 'FETCH_POEMPOCKET_SUCCESS';
export const fetchPoemPocketSuccess = (dataArg) => ({
    type: FETCH_POEMPOCKET_SUCCESS,
    data: dataArg
});

export const FETCH_POEMPOCKET_REQUEST = 'FETCH_POEMPOCKET_REQUEST';
export const poemPocketRequest = () => ({
    type: FETCH_POEMPOCKET_REQUEST
});

export const FETCH_POEMPOCKET_ERROR = 'FETCH_POEMPOCKET_ERROR';
export const fetchPoemPocketError = (error) => ({
    type: FETCH_POEMPOCKET_ERROR,
    error
});

export const fetchPoemPocket = () => (dispatch, getState) => {
    dispatch(poemPocketRequest);
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/api/poems/poemPocket`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => {
            console.log(dispatch(fetchPoemPocketSuccess(data)));

            dispatch(fetchPoemPocketSuccess(data));
        })
        .catch(err => {
            dispatch(fetchPoemPocketError(err));
        });
};