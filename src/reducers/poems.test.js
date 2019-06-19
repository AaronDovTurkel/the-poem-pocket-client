import {poemReducer} from './poems';
import {fetchPoems} from '../actions/poems';

describe('poemReducer', () => {


    it('Should set the initial state when nothing is passed in', () => {
        const state = poemReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            data: {
                title: '',
                stanzas: []
            },
            error: null
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = poemReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('fetchPoems', () => {
        it('Should return empty with out dummy data', () => {
            let state;
            state = poemReducer(state, fetchPoems());
            state = poemReducer(state, fetchPoems());
            expect(state).toEqual({
                data: {
                    title: '',
                    stanzas: []
                },
                error: null
            });
        });
    });
});