import React from 'react';
import {shallow} from 'enzyme';

import {RegistrationForm} from './registration-form';

describe('<RegistrationForm />', () => {
    it('Renders without crashing', () => {
        const dispatch = jest.fn();
        shallow(<RegistrationForm handleSubmit={dispatch} />);
    });

    it('Renders the correct class', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<RegistrationForm handleSubmit={dispatch} />);
        expect(wrapper.hasClass('registration-form')).toBe(true);
    });
});