import React from 'react';
import {shallow} from 'enzyme';

import {RegistrationPage} from './registration-page';

describe('<RegistrationPage />', () => {
    it('Renders without crashing', () => {
        shallow(<RegistrationPage />);
    });

    it('Renders with proper class', () => {
        const wrapper = shallow(<RegistrationPage />);
        expect(wrapper.hasClass('home')).toBe(true);
    });
});