import React from 'react';
import {shallow} from 'enzyme';

import {LandingPage} from './landing-page';

describe('<LandingPage />', () => {
    it('Renders without crashing', () => {
        shallow(<LandingPage />);
    });

    it('Renders with proper class', () => {
        const wrapper = shallow(<LandingPage />);
        expect(wrapper.hasClass('home')).toBe(true);
    });
});