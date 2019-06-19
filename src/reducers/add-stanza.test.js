import {addStanzaReducer} from './add-stanza';
import {addStanza} from '../actions/add-stanza';

describe('poemReducer', () => {
    const newPoemOne = {
        "author": "authorArg",
        "stanza": "textArg"
    };
    const newPoemTwo = {
        "title": "Test Title for Tests Two"
    };
    const newPoemThree = {
        "title": "Test Title for Tests Three"
    };


    it('Should set the initial state when nothing is passed in', () => {
        const state = addStanzaReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            data: null,
            error: null,
            loading: false
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = addStanzaReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('addStanza', () => {
        it('Should return empty with out dummy data', () => {
            let state;
            state = addStanzaReducer(state, addStanza("authorArg", "textArg"));
            expect(state).toEqual({
                data: null,
                error: null,
                loading: false
            });
        });
    });
});