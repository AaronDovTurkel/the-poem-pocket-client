import React from 'react';
import {shallow} from 'enzyme';

import {EditForm} from './edit-form';

describe('<EditForm />', () => {
    it('Renders without crashing', () => {
        const dispatch = jest.fn();
        shallow(<EditForm handleSubmit={dispatch} />);
    });

    it('Renders the add button initially', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<EditForm handleSubmit={dispatch} />);
        expect(wrapper.hasClass('editStanza-form')).toBe(true);
    });

});