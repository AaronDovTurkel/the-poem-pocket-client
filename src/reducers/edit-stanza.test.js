import {editStanzaReducer} from './edit-stanza';
import { editStanza } from '../actions/edit-stanza';

describe('addStanzaReducer', () => {


    it('Should set the initial state when nothing is passed in', () => {
        const state = editStanzaReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            data: null,
            error: null,
            loading: false
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = editStanzaReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('addStanza', () => {
        it('Should return empty with out dummy data', () => {
            let state;
            state = editStanzaReducer(state, editStanza("authorArg", "textArg"));
            expect(state).toEqual({
                data: null,
                error: null,
                loading: false
            });
        });
    });
});