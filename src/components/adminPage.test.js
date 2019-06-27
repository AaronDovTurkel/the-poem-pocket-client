import React from 'react';
import {shallow} from 'enzyme';

import {AdminPage} from './adminPage';

describe('<AdminPage />', () => {
    it('Renders without crashing', () => {
        shallow(<AdminPage />);
    });

    it('Renders with proper class', () => {
        const wrapper = shallow(<AdminPage />);
        expect(wrapper.hasClass('adminPage')).toBe(true);
    });
});