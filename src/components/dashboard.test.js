import React from 'react';
import {shallow} from 'enzyme';

import {Dashboard} from './dashboard';
// Mock the async fetchBoard action
const mockFetchPoemsAction = {
    type: 'FETCH_POEMS_SUCCESS',
    data: {
        title: "Shalom",
        stanzas: "Howdyyyyyyyyyy"
    }
};
jest.mock('../actions/poems', () => Object.assign({},
    require.requireActual('../actions/poems'),
    {
        fetchPoems: jest.fn().mockImplementation(() => {
            return mockFetchPoemsAction;
        })
    }
));

describe('<Dashboard/>', () => {
    let seedLists = [];
    beforeAll(() => {
        for (let i=0; i<10; i++) {
            seedLists.push({
                title: `Test Title ${i}`
            })
        }
    });

    it('Renders without crashing', () => {
        const dispatch = jest.fn();
        shallow(<Dashboard dispatch={dispatch} />);
    });

    it('Dispatches fetchBoard on mount', () => {
        const dispatch = jest.fn();
        shallow(<Dashboard dispatch={dispatch} />);
        expect(dispatch).toHaveBeenCalledWith(mockFetchPoemsAction);
    });

    it('Renders with proper class', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<Dashboard dispatch={dispatch} />);
        expect(wrapper.hasClass('dashboard')).toBe(true);
    });

    it('Renders with proper class', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<Dashboard dispatch={dispatch} />);
        expect(wrapper.hasClass('dashboard')).toBe(true);
    });

});
