import {
    FETCH_POEMS_SUCCESS,
    fetchPoemsSuccess,
    FETCH_POEMS_ERROR,
    fetchPoemsError
} from './poems';


describe('fetchPoemsSuccess', () => {
    it('Should return the action', () => {
        const action = fetchPoemsSuccess("title");
        expect(action.type).toEqual(FETCH_POEMS_SUCCESS);
    });
});

describe('fetchPoemsError', () => {
    it('Should return the action', () => {
        const action = fetchPoemsError();
        expect(action.type).toEqual(FETCH_POEMS_ERROR);
    });
});


