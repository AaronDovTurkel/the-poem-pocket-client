import {authReducer} from './auth';
import {login} from '../actions/auth';

describe('authReducer', () => {


    it('Should set the initial state when nothing is passed in', () => {
        const state = authReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            error: null,
            authToken: null, 
            currentUser: null,
            loading: false
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = authReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('addStanza', () => {
        it('Should return empty with out dummy data', () => {
            let state;
            state = authReducer(state, login("authorArg", "textArg"));
            expect(state).toEqual({
                error: null,
                authToken: null, 
                currentUser: null,
                loading: false
            });
        });
    });
});