import {
    ADD_STANZA_SUCCESS,
    addStanzaSuccess,
    ADD_STANZA_REQUEST,
    addStanzaRequest,
    ADD_STANZA_ERROR,
    addStanzaError,
    addStanza
} from './add-stanza';


describe('addStanzaSuccess', () => {
    it('Should return the action', () => {
        const action = addStanzaSuccess();
        expect(action.type).toEqual(ADD_STANZA_SUCCESS);
    });
});

describe('addStanzaRequest', () => {
    it('Should return the action', () => {
        const action = addStanzaRequest();
        expect(action.type).toEqual(ADD_STANZA_REQUEST);
    });
});

describe('addStanzaError', () => {
    it('Should return the action', () => {
        const action = addStanzaError();
        expect(action.type).toEqual(ADD_STANZA_ERROR);
    });
});