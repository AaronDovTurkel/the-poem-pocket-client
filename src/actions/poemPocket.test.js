import {
    FETCH_POEMPOCKET_SUCCESS,
    fetchPoemPocketSuccess,
    FETCH_POEMPOCKET_ERROR,
    fetchPoemPocketError
} from './poemPocket';


describe('fetchPoemPocketSuccess', () => {
    it('Should return the action', () => {
        const action = fetchPoemPocketSuccess("title");
        expect(action.type).toEqual(FETCH_POEMPOCKET_SUCCESS);
    });
});

describe('fetchPoemPocketError', () => {
    it('Should return the action', () => {
        const action = fetchPoemPocketError();
        expect(action.type).toEqual(FETCH_POEMPOCKET_ERROR);
    });
});