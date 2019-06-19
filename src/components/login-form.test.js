import React from 'react';
import {shallow} from 'enzyme';

import {LoginForm} from './login-form';

describe('<LoginForm />', () => {
    it('Renders without crashing', () => {
        const dispatch = jest.fn();
        shallow(<LoginForm handleSubmit={dispatch} />);
    });

    it('Renders the correct class', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<LoginForm handleSubmit={dispatch} />);
        expect(wrapper.hasClass('login-form')).toBe(true);
    });
});