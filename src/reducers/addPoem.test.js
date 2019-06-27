import {addPoemReducer} from './addPoem';
import {addPoem} from '../actions/addPoem';

describe('addPoemReducer', () => {


    it('Should set the initial state when nothing is passed in', () => {
        const state = addPoemReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            data: null,
            error: null,
            loading: false
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = addPoemReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('addPoem', () => {
        it('Should return empty with out dummy data', () => {
            let state;
            state = addPoemReducer(state, addPoem("textArg"));
            expect(state).toEqual({
                data: null,
                error: null,
                loading: false
            });
        });
    });
});