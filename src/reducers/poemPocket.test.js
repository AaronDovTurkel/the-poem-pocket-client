import {poemPocketReducer} from './poemPocket';
import {fetchPoemPocket} from '../actions/poemPocket';

describe('poemPocketReducer', () => {


    it('Should set the initial state when nothing is passed in', () => {
        const state = poemPocketReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            data: [],
            error: null,
            loading: false
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = poemPocketReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('fetchPoemPocket', () => {
        it('Should return empty with out dummy data', () => {
            let state;
            state = poemPocketReducer(state, fetchPoemPocket());
            expect(state).toEqual({
                data: [],
                error: null,
                loading: false
            });
        });
    });
});