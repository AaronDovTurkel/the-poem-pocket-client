import React from 'react';
import {shallow, mount} from 'enzyme';

import {HeaderBar} from './header-bar';

describe('<HeaderBar />', () => {
    it('Renders without crashing', () => {
        shallow(<HeaderBar />);
    });

    it('Renders with proper class', () => {
        const wrapper = shallow(<HeaderBar />);
        expect(wrapper.hasClass('header-bar')).toBe(true);
    });

    it('Renders header even after click', () => {
        const wrapper = shallow(<HeaderBar />);
        wrapper.simulate('click');
        expect(wrapper.hasClass('header-bar')).toBe(true);
    });
});