import React from 'react';
import {shallow} from 'enzyme';

import {AddForm} from './add-form';

describe('<AddForm />', () => {
    it('Renders without crashing', () => {
        const dispatch = jest.fn();
        shallow(<AddForm handleSubmit={dispatch} />);
    });

    it('Renders the add button initially', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<AddForm handleSubmit={dispatch} />);
        expect(wrapper.hasClass('addStanza-form')).toBe(true);
    });

});