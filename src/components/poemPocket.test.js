import React from 'react';
import {shallow} from 'enzyme';

import {PoemPocket} from './poemPocket';
// Mock the async fetchBoard action
const mockFetchPoemsAction = {
    type: 'FETCH_POEMS_SUCCESS',
    data: "Shalom"
};
jest.mock('../actions/poemPocket', () => Object.assign({},
    require.requireActual('../actions/poemPocket'),
    {
        fetchPoemPocket: jest.fn().mockImplementation(() => {
            return mockFetchPoemsAction;
        })
    }
));

describe('<PoemPocket/>', () => {

    it('Renders without crashing', () => {
        const dispatch = jest.fn();
        shallow(<PoemPocket dispatch={dispatch} />);
    });

    it('Dispatches fetchBoard on mount', () => {
        const dispatch = jest.fn();
        shallow(<PoemPocket dispatch={dispatch} />);
        expect(dispatch).toHaveBeenCalledWith(mockFetchPoemsAction);
    });

    it('Renders with proper class', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<PoemPocket dispatch={dispatch} />);
        expect(wrapper.hasClass('poemPocketPageContainer')).toBe(true);
    });

});